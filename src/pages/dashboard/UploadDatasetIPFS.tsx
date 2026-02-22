import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe } from "lucide-react";
import { DatasetUploader } from "@/components/dataset/DatasetUploader";

const UploadDatasetIPFS = () => {
  const navigate = useNavigate();

  return (
    <div className="container max-w-2xl mx-auto py-8 px-4 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Subir Dataset a IPFS
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Sube tu dataset a la red IPFS a través de Pinata para almacenamiento descentralizado y permanente.
          </p>
        </div>
      </div>

      {/* Uploader Component */}
      <DatasetUploader />
    </div>
  );
};

export default UploadDatasetIPFS;
