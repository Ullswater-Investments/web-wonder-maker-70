-- Create AI feedback table for continuous improvement
CREATE TABLE public.ai_feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  user_question TEXT NOT NULL,
  bot_response TEXT NOT NULL,
  is_positive BOOLEAN NOT NULL,
  user_correction TEXT,
  current_page TEXT,
  user_sector TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.ai_feedback ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert feedback (even anonymous for demo)
CREATE POLICY "Anyone can submit feedback" 
ON public.ai_feedback 
FOR INSERT 
WITH CHECK (true);

-- Policy: Only authenticated users can view their own feedback
CREATE POLICY "Users can view own feedback" 
ON public.ai_feedback 
FOR SELECT 
USING (auth.uid() = user_id);

-- Policy: Admins can view all feedback (using user_roles)
CREATE POLICY "Admins can view all feedback" 
ON public.ai_feedback 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.user_id = auth.uid() 
    AND user_roles.role = 'admin'
  )
);

-- Add index for faster queries
CREATE INDEX idx_ai_feedback_created_at ON public.ai_feedback(created_at DESC);
CREATE INDEX idx_ai_feedback_is_positive ON public.ai_feedback(is_positive);