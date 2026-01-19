import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CloserStillLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [partnerInfo, setPartnerInfo] = useState<{
    partner_name: string;
    logo_url: string | null;
    username: string;
  } | null>(null);

  useEffect(() => {
    const fetchPartnerInfo = async () => {
      const { data, error } = await supabase
        .from("partner_access")
        .select("partner_name, logo_url, username")
        .eq("partner_slug", "closerstill")
        .eq("is_active", true)
        .single();

      if (error || !data) {
        navigate("/partners");
        return;
      }

      setPartnerInfo(data);
    };

    fetchPartnerInfo();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("validate-partner-login", {
        body: {
          partner_slug: "closerstill",
          username: partnerInfo?.username || "CLOSERSTILL",
          password,
        },
      });

      if (error || !data?.success) {
        setError(data?.error || "Credenciales incorrectas");
        setIsLoading(false);
        return;
      }

      // Store session
      const sessionData = {
        token: data.token,
        expires_at: data.expires_at,
        partner_slug: "closerstill",
        partner_name: data.partner_name,
      };
      localStorage.setItem("partner_session_closerstill", JSON.stringify(sessionData));

      toast.success("Acceso concedido");
      navigate(data.redirect_path || "/partners/closerstill/miembros");
    } catch (err) {
      console.error("Login error:", err);
      setError("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  if (!partnerInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="animate-pulse text-white">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <Card className="w-full max-w-md border-0 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
            <Lock className="h-10 w-10 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">CloserStill Media</CardTitle>
            <CardDescription className="mt-2">
              Área privada de miembros
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Usuario</Label>
              <Input
                id="username"
                type="text"
                value={partnerInfo.username}
                disabled
                className="bg-muted"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Introduce la contraseña"
                required
              />
            </div>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Verificando..." : "Acceder"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <Link
              to="/partners"
              className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1"
            >
              <ArrowLeft className="h-3 w-3" />
              Volver al directorio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CloserStillLogin;
