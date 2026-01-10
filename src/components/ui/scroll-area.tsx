import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { ChevronUp, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-4 border-l border-l-transparent p-[2px]",
      orientation === "horizontal" && "h-4 flex-col border-t border-t-transparent p-[2px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border hover:bg-primary/50 transition-colors cursor-pointer" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

interface ScrollAreaWithButtonsProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  scrollAmount?: number;
}

const ScrollAreaWithButtons = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaWithButtonsProps
>(({ className, children, scrollAmount = 150, ...props }, ref) => {
  const viewportRef = React.useRef<HTMLDivElement>(null);

  const scrollUp = () => {
    viewportRef.current?.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
  };

  const scrollDown = () => {
    viewportRef.current?.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  };

  return (
    <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
      <ScrollAreaPrimitive.Viewport ref={viewportRef} className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      
      {/* Custom scrollbar with buttons */}
      <div className="absolute right-0 top-0 bottom-0 w-5 flex flex-col z-10">
        {/* Scroll Up Button */}
        <button
          onClick={scrollUp}
          className="flex items-center justify-center h-8 w-full bg-muted/60 hover:bg-muted border-b border-border transition-colors rounded-tr-md"
          aria-label="Scroll up"
        >
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        </button>
        
        {/* Scrollbar track */}
        <div className="flex-1 relative">
          <ScrollAreaPrimitive.ScrollAreaScrollbar
            orientation="vertical"
            className="flex h-full w-full touch-none select-none p-[2px] transition-colors"
          >
            <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border hover:bg-primary/50 transition-colors cursor-pointer" />
          </ScrollAreaPrimitive.ScrollAreaScrollbar>
        </div>
        
        {/* Scroll Down Button */}
        <button
          onClick={scrollDown}
          className="flex items-center justify-center h-8 w-full bg-muted/60 hover:bg-muted border-t border-border transition-colors rounded-br-md"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
      
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
ScrollAreaWithButtons.displayName = "ScrollAreaWithButtons";

export { ScrollArea, ScrollBar, ScrollAreaWithButtons };
