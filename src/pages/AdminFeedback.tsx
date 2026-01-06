import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThumbsUp, ThumbsDown, MessageSquare, Calendar, MapPin, Building2 } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Feedback {
  id: string;
  user_question: string;
  bot_response: string;
  is_positive: boolean;
  user_correction: string | null;
  current_page: string | null;
  user_sector: string | null;
  created_at: string;
}

export default function AdminFeedback() {
  const [activeTab, setActiveTab] = useState<"all" | "positive" | "negative">("all");

  const { data: feedback, isLoading } = useQuery({
    queryKey: ["ai-feedback", activeTab],
    queryFn: async () => {
      let query = supabase
        .from("ai_feedback")
        .select("*")
        .order("created_at", { ascending: false });

      if (activeTab === "positive") {
        query = query.eq("is_positive", true);
      } else if (activeTab === "negative") {
        query = query.eq("is_positive", false);
      }

      const { data, error } = await query.limit(100);
      if (error) throw error;
      return data as Feedback[];
    },
  });

  const positiveCount = feedback?.filter((f) => f.is_positive).length || 0;
  const negativeCount = feedback?.filter((f) => !f.is_positive).length || 0;
  const totalCount = feedback?.length || 0;

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Feedback de ARIA</h1>
        <p className="text-muted-foreground mt-2">
          Revisa las interacciones con el asistente virtual para mejorar las respuestas
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Feedback</p>
                <p className="text-2xl font-bold">{totalCount}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Positivos</p>
                <p className="text-2xl font-bold text-green-600">{positiveCount}</p>
              </div>
              <ThumbsUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Negativos</p>
                <p className="text-2xl font-bold text-red-600">{negativeCount}</p>
              </div>
              <ThumbsDown className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="positive">Positivos</TabsTrigger>
          <TabsTrigger value="negative">Negativos (para revisar)</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">Cargando feedback...</div>
          ) : !feedback?.length ? (
            <div className="text-center py-8 text-muted-foreground">No hay feedback disponible</div>
          ) : (
            <ScrollArea className="h-[600px]">
              <div className="space-y-4 pr-4">
                {feedback.map((item) => (
                  <Card key={item.id} className={item.is_positive ? "border-l-4 border-l-green-500" : "border-l-4 border-l-red-500"}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {item.is_positive ? (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              <ThumbsUp className="h-3 w-3 mr-1" /> Positivo
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                              <ThumbsDown className="h-3 w-3 mr-1" /> Negativo
                            </Badge>
                          )}
                          {item.current_page && (
                            <Badge variant="secondary" className="text-xs">
                              <MapPin className="h-3 w-3 mr-1" /> {item.current_page}
                            </Badge>
                          )}
                          {item.user_sector && (
                            <Badge variant="secondary" className="text-xs">
                              <Building2 className="h-3 w-3 mr-1" /> {item.user_sector}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {format(new Date(item.created_at), "dd MMM yyyy HH:mm", { locale: es })}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Pregunta del usuario:</p>
                        <p className="text-sm bg-muted p-2 rounded">{item.user_question}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Respuesta de ARIA:</p>
                        <p className="text-sm bg-muted p-2 rounded whitespace-pre-wrap">{item.bot_response}</p>
                      </div>
                      {item.user_correction && (
                        <div>
                          <p className="text-xs font-medium text-red-600 mb-1">⚠️ Corrección sugerida:</p>
                          <p className="text-sm bg-red-50 dark:bg-red-950/30 p-2 rounded border border-red-200 dark:border-red-800">
                            {item.user_correction}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
