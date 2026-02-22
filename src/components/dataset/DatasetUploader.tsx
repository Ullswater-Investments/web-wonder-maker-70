import { useState, useRef, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { UploadCloud, FileText, Trash2, CheckCircle2 } from "lucide-react";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const ACCEPTED_TYPES = [".csv", ".json", ".pdf"];
const ACCEPTED_MIME_TYPES = [
  "text/csv",
  "application/json",
  "application/pdf",
];

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export const DatasetUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedCID, setUploadedCID] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = (f: File): boolean => {
    if (f.size > MAX_FILE_SIZE) {
      toast.error("El archivo supera el límite de 50MB");
      return false;
    }
    const ext = f.name.substring(f.name.lastIndexOf(".")).toLowerCase();
    if (!ACCEPTED_TYPES.includes(ext) && !ACCEPTED_MIME_TYPES.includes(f.type)) {
      toast.error("Formato no soportado. Usa CSV, JSON o PDF");
      return false;
    }
    return true;
  };

  const handleFile = (f: File) => {
    if (validateFile(f)) {
      setFile(f);
      setUploadedCID(null);
      setProgress(0);
    }
  };

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) handleFile(selected);
  };

  const clearFile = () => {
    setFile(null);
    setProgress(0);
    setUploadedCID(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  // TODO: Reemplazar con llamada real Axios a NestJS Pinata API
  // Ejemplo: const res = await axios.post('/api/pinata/upload', formData, { onUploadProgress: ... })
  const uploadToIPFS = async (fileToUpload: File) => {
    setIsUploading(true);
    setProgress(0);

    return new Promise<void>((resolve) => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 8 + 2;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);
          setProgress(100);
          setIsUploading(false);
          setUploadedCID("QmTestHash123456789abcdefExampleCID");
          toast.success("Archivo subido a IPFS correctamente");
          resolve();
        } else {
          setProgress(Math.round(currentProgress));
        }
      }, 100);
    });
  };

  return (
    <div className="w-full space-y-6">
      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept=".csv,.json,.pdf"
        className="hidden"
        onChange={onChange}
      />

      {/* Drop Zone or File Preview */}
      {!file ? (
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={`
            min-h-[300px] flex flex-col items-center justify-center gap-4
            border-2 border-dashed rounded-xl cursor-pointer
            transition-all duration-200
            ${isDragOver
              ? "border-primary bg-accent/50 scale-[1.01]"
              : "border-border bg-muted/30 hover:border-primary/50 hover:bg-muted/50"
            }
          `}
        >
          <UploadCloud className="w-12 h-12 text-muted-foreground" />
          <div className="text-center space-y-1">
            <p className="text-base font-semibold text-foreground">
              Arrastra tu dataset aquí o haz clic para explorar
            </p>
            <p className="text-sm text-muted-foreground">
              Soporta CSV, JSON, PDF (Máx. 50MB)
            </p>
          </div>
        </div>
      ) : (
        <Card className="border-border">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
              <FileText className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {file.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatFileSize(file.size)}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={clearFile}
              disabled={isUploading}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Progress Bar */}
      {isUploading && (
        <div className="space-y-2">
          <Progress value={progress} className="h-3" />
          <p className="text-xs text-muted-foreground text-center">
            {progress}% completado
          </p>
        </div>
      )}

      {/* Upload Button */}
      {file && !uploadedCID && (
        <Button
          variant="premium"
          size="lg"
          className="w-full"
          onClick={() => uploadToIPFS(file)}
          disabled={isUploading}
        >
          {isUploading ? "Encriptando y subiendo..." : "Subir a IPFS (Pinata)"}
        </Button>
      )}

      {/* Success State */}
      {uploadedCID && (
        <Card className="border-primary/30 bg-accent/30">
          <CardContent className="flex items-center gap-3 p-4">
            <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground">
                ¡Subida completada!
              </p>
              <p className="text-xs text-muted-foreground font-mono truncate">
                CID: {uploadedCID}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DatasetUploader;
