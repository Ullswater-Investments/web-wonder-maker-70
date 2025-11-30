import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserPlus, MoreHorizontal } from "lucide-react";

export function TeamManagement() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Miembros del Equipo</h3>
          <p className="text-sm text-muted-foreground">Gestiona los usuarios que tienen acceso a esta organización.</p>
        </div>
        <Button size="sm" variant="outline" className="gap-2">
          <UserPlus className="h-4 w-4"/> Invitar
        </Button>
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usuario</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">YO</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Tú</p>
                    <p className="text-xs text-muted-foreground">demo@procuredata.app</p>
                  </div>
                </div>
              </TableCell>
              <TableCell><Badge>Administrador</Badge></TableCell>
              <TableCell><Badge className="bg-green-100 text-green-700 hover:bg-green-100">Activo</Badge></TableCell>
              <TableCell><MoreHorizontal className="h-4 w-4 text-muted-foreground cursor-pointer"/></TableCell>
            </TableRow>
            {/* Mock Rows */}
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">AG</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Ana García</p>
                    <p className="text-xs text-muted-foreground">ana.garcia@empresa.com</p>
                  </div>
                </div>
              </TableCell>
              <TableCell><Badge variant="outline">Analista</Badge></TableCell>
              <TableCell><Badge variant="outline">Invitado</Badge></TableCell>
              <TableCell><MoreHorizontal className="h-4 w-4 text-muted-foreground cursor-pointer"/></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">JM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Jorge Martínez</p>
                    <p className="text-xs text-muted-foreground">jorge.m@empresa.com</p>
                  </div>
                </div>
              </TableCell>
              <TableCell><Badge variant="outline">Editor</Badge></TableCell>
              <TableCell><Badge className="bg-green-100 text-green-700 hover:bg-green-100">Activo</Badge></TableCell>
              <TableCell><MoreHorizontal className="h-4 w-4 text-muted-foreground cursor-pointer"/></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
