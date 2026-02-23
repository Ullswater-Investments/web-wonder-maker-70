import { Presentation } from "@/components/presentation/Presentation";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComponentesEspaciosDatos() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col">
      {/* Back button overlay */}
      <div className="absolute top-3 left-3 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Volver
        </Button>
      </div>
      <Presentation />
    </div>
  );
}
