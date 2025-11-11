import { useEffect, useState } from "react";
import Joyride, { CallBackProps, Step, STATUS } from "react-joyride";
import { useOrganizationContext } from "@/hooks/useOrganizationContext";
import { useAuth } from "@/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

export const DemoTour = () => {
  const { isDemo } = useOrganizationContext();
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  // Verificar si es la primera vez que el usuario demo inicia sesión
  useEffect(() => {
    if (isDemo && user?.email === 'demo@procuredata.app') {
      const hasSeenTour = localStorage.getItem('demo-tour-completed');
      
      // Solo mostrar el tour si estamos en el dashboard y no se ha visto antes
      if (!hasSeenTour && location.pathname === '/dashboard') {
        // Pequeño delay para que los elementos se rendericen
        const timer = setTimeout(() => {
          setRun(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [isDemo, user, location.pathname]);

  const steps: Step[] = [
    {
      target: 'body',
      content: (
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-primary">
            ¡Bienvenido a <span className="procuredata-gradient">PROCUREDATA</span> Demo! 🎭
          </h2>
          <p>
            Este tour te guiará por las funcionalidades principales del sistema.
            Tienes acceso a <strong>10 organizaciones</strong> en diferentes roles para explorar
            el flujo completo de gobernanza de datos.
          </p>
          <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg text-sm border border-amber-200 dark:border-amber-800">
            <p className="font-semibold text-amber-900 dark:text-amber-100 flex items-center gap-2">
              📊 Datos Sintéticos para Demostración
            </p>
            <p className="text-xs text-amber-700 dark:text-amber-300 mt-1 mb-2">
              Todos los datos que verás son ficticios y creados específicamente para esta demo.
            </p>
            <ul className="mt-2 space-y-1 text-amber-800 dark:text-amber-200 text-sm">
              <li>✅ <strong>15 transacciones</strong> en 7 estados diferentes</li>
              <li>✅ <strong>5 proveedores</strong> con datos fiscales completos</li>
              <li>✅ <strong>14 aprobaciones</strong> registradas en el historial</li>
              <li>✅ <strong>10 organizaciones</strong> (Consumers, Holders, Providers)</li>
              <li>✅ <strong>Flujo completo</strong> de aprobación multi-actor</li>
            </ul>
          </div>
          <p className="text-xs text-muted-foreground">
            En producción, verás solo tus datos reales y organizaciones relacionadas.
          </p>
        </div>
      ),
      placement: 'center',
      disableBeacon: true,
    },
    {
      target: '.demo-banner',
      content: (
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Banner de Modo Demo 🎭</h3>
          <p>
            Este banner amarillo te recordará constantemente que estás en <strong>modo demostración</strong>.
          </p>
          <p className="text-sm text-muted-foreground">
            Los datos que veas no afectan ningún entorno de producción y son completamente sintéticos.
          </p>
        </div>
      ),
      placement: 'bottom',
    },
    {
      target: '[data-sidebar="nav"]',
      content: (
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Navegación Principal 🧭</h3>
          <p>
            El sidebar te permite acceder a todos los módulos del sistema:
          </p>
          <ul className="space-y-1 text-sm mt-2">
            <li>🏠 <strong>Dashboard</strong>: Vista general con métricas clave</li>
            <li>📦 <strong>Catálogo</strong>: Explora productos de datos disponibles</li>
            <li>📋 <strong>Solicitudes</strong>: Gestiona transacciones pendientes</li>
            <li>📊 <strong>Datos</strong>: Visualiza transacciones completadas</li>
            <li>📈 <strong>Reportes</strong>: Analytics y estadísticas del sistema</li>
            <li>🔔 <strong>Notificaciones</strong>: Historial de eventos</li>
            <li>⚙️ <strong>Configuración</strong>: Ajustes y configuración ERP</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-2">
            Puedes colapsar el sidebar para más espacio de trabajo.
          </p>
        </div>
      ),
      placement: 'right',
    },
    {
      target: '[data-tour="org-switcher"]',
      content: (
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Selector de Organización</h3>
          <p>
            Aquí puedes cambiar entre las <strong>10 organizaciones demo</strong> 
            para experimentar con diferentes roles:
          </p>
          <div className="space-y-2 text-sm mt-2">
            <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
              <p className="font-semibold text-blue-900 dark:text-blue-100">🏢 Consumers (solicitan datos):</p>
              <p className="text-blue-800 dark:text-blue-200 text-xs">NovaTech Solutions, Fabricaciones Reunidas, Energías Renovables del Este</p>
            </div>
            <div className="p-2 bg-purple-50 dark:bg-purple-950/30 rounded">
              <p className="font-semibold text-purple-900 dark:text-purple-100">🔒 Holders (aprueban solicitudes):</p>
              <p className="text-purple-800 dark:text-purple-200 text-xs">ACME Industrial, Gestión Logística Global, FarmaGlobal</p>
            </div>
            <div className="p-2 bg-green-50 dark:bg-green-950/30 rounded">
              <p className="font-semibold text-green-900 dark:text-green-100">📋 Providers (pre-aprueban):</p>
              <p className="text-green-800 dark:text-green-200 text-xs">Tornillería TÉCNICA, Soluciones Químicas, Innovatec, Biocen</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Cambia de organización instantáneamente sin necesidad de hacer logout.
          </p>
        </div>
      ),
      placement: 'bottom',
    },
    {
      target: '[data-tour="dashboard-stats"]',
      content: (
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Métricas del Dashboard 📊</h3>
          <p>
            Las estadísticas muestran métricas en tiempo real del sistema demo:
          </p>
          <ul className="space-y-1 text-sm mt-2">
            <li>📦 <strong>Productos en Catálogo</strong>: Total de productos disponibles</li>
            <li>⏳ <strong>Solicitudes Pendientes</strong>: Requieren tu acción</li>
            <li>✅ <strong>Completadas Este Mes</strong>: Transacciones finalizadas</li>
            <li>🏢 <strong>Organizaciones Activas</strong>: Total en el sistema demo</li>
          </ul>
          <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
            💡 En modo demo, las cifras incluyen todas las organizaciones sintéticas.
          </p>
        </div>
      ),
      placement: 'bottom',
    },
    {
      target: '[data-tour="activity-feed"]',
      content: (
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Feed de Actividad 🔄</h3>
          <p>
            Aquí verás las <strong>últimas 10 acciones</strong> realizadas en el sistema:
          </p>
          <ul className="space-y-1 text-sm mt-2">
            <li>✅ Pre-aprobaciones y aprobaciones finales</li>
            <li>❌ Denegaciones con motivos</li>
            <li>📝 Notas de los aprobadores</li>
            <li>⏰ Timestamps relativos (hace X horas/días)</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-2">
            En modo demo, muestra actividad de todas las organizaciones sintéticas.
          </p>
        </div>
      ),
      placement: 'top',
    },
    {
      target: '[data-tour="catalog-link"]',
      content: (
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Catálogo de Datos 📦</h3>
          <p>
            Explora el marketplace de productos de datos disponibles:
          </p>
          <ul className="space-y-1 text-sm mt-2">
            <li>🔍 <strong>Búsqueda y filtros</strong> por categoría y tags</li>
            <li>📊 <strong>Productos disponibles</strong> con descripciones completas</li>
            <li>🏢 <strong>Información del holder</strong> y disponibilidad</li>
            <li>➕ <strong>Iniciar nueva solicitud</strong> directamente desde el producto</li>
          </ul>
          <div className="bg-green-50 dark:bg-green-950/30 p-2 rounded text-xs mt-2">
            <p className="text-green-800 dark:text-green-200">
              💡 En demo hay 4+ productos sintéticos: Datos Proveedor, Datos Laboratorio, etc.
            </p>
          </div>
        </div>
      ),
      placement: 'bottom',
    },
    {
      target: '[data-tour="requests-link"]',
      content: (
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Gestión de Solicitudes 📋</h3>
          <p>
            Administra todas las transacciones de datos según tu rol:
          </p>
          <div className="space-y-2 text-sm mt-2">
            <div className="p-2 bg-yellow-50 dark:bg-yellow-950/30 rounded">
              <p className="font-semibold text-yellow-900 dark:text-yellow-100">⏳ Pendientes de mi Acción</p>
              <p className="text-yellow-800 dark:text-yellow-200 text-xs">
                Solicitudes que requieren tu aprobación/pre-aprobación
              </p>
            </div>
            <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
              <p className="font-semibold text-blue-900 dark:text-blue-100">📝 Mis Solicitudes</p>
              <p className="text-blue-800 dark:text-blue-200 text-xs">
                Transacciones que tu organización ha iniciado
              </p>
            </div>
            <div className="p-2 bg-gray-50 dark:bg-gray-950/30 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100">📊 Todas las Transacciones</p>
              <p className="text-gray-800 dark:text-gray-200 text-xs">
                Vista global de las 15 transacciones demo en todos los estados
              </p>
            </div>
          </div>
          <p className="text-sm font-medium mt-2">
            Haz clic aquí para gestionar solicitudes.
          </p>
        </div>
      ),
      placement: 'bottom',
      spotlightClicks: true,
    },
    {
      target: '[data-tour="data-link"]',
      content: (
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Visualización de Datos 📊</h3>
          <p>
            Accede a los datos de proveedores de <strong>transacciones completadas</strong>:
          </p>
          <ul className="space-y-1 text-sm mt-2">
            <li>✅ <strong>5 transacciones completadas</strong> con datos listos</li>
            <li>🏢 <strong>5 proveedores</strong> con información fiscal completa</li>
            <li>📥 <strong>Exportación a CSV</strong> con un clic</li>
            <li>🔗 <strong>Integración ERP</strong> configurada y lista</li>
          </ul>
          <div className="bg-purple-50 dark:bg-purple-950/30 p-2 rounded text-xs mt-2">
            <p className="text-purple-800 dark:text-purple-200">
              💡 Proveedores demo: Biocen S.A., Tornillería TÉCNICA, Soluciones Químicas, Innovatec
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Cambia a diferentes organizaciones Consumer para ver sus datos completados.
          </p>
        </div>
      ),
      placement: 'bottom',
    },
    {
      target: '[data-tour="reports-link"]',
      content: (
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Reportes y Analytics 📈</h3>
          <p>
            Visualiza estadísticas y tendencias del sistema demo:
          </p>
          <ul className="space-y-1 text-sm mt-2">
            <li>📊 <strong>Gráfico de pie</strong>: Distribución de transacciones por estado</li>
            <li>📉 <strong>Gráfico de barras</strong>: Top 5 productos más solicitados</li>
            <li>📐 <strong>Métricas clave</strong>: Tasa de aprobación, tiempo promedio, cumplimiento</li>
          </ul>
          <div className="bg-indigo-50 dark:bg-indigo-950/30 p-2 rounded text-xs mt-2">
            <p className="text-indigo-800 dark:text-indigo-200">
              💡 Los datos muestran las 15 transacciones sintéticas del sistema demo
            </p>
          </div>
        </div>
      ),
      placement: 'bottom',
    },
    {
      target: '[data-tour="notifications-link"]',
      content: (
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Centro de Notificaciones 🔔</h3>
          <p>
            Mantente al día con todas las acciones del sistema:
          </p>
          <ul className="space-y-1 text-sm mt-2">
            <li>🔔 <strong>14 notificaciones</strong> de aprobaciones y denegaciones</li>
            <li>📝 <strong>Notas detalladas</strong> de cada actor en el flujo</li>
            <li>⏰ <strong>Timestamps relativos</strong> para contexto temporal</li>
            <li>🎯 <strong>Filtros</strong> por estado (todas/no leídas)</li>
          </ul>
          <div className="bg-blue-50 dark:bg-blue-950/30 p-2 rounded text-xs mt-2">
            <p className="text-blue-800 dark:text-blue-200">
              💡 Basado en el historial de aprobaciones (approval_history) del sistema
            </p>
          </div>
        </div>
      ),
      placement: 'bottom',
    },
    {
      target: 'body',
      content: (
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-primary">
            🎉 ¡Listo para explorar <span className="procuredata-gradient">PROCUREDATA</span>!
          </h2>
          
          <div className="p-3 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
            <p className="font-semibold text-amber-900 dark:text-amber-100 flex items-center gap-2 text-sm">
              🎭 Recuerda: Todos los datos son sintéticos
            </p>
            <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
              Las 15 transacciones, 5 proveedores, y 10 organizaciones son datos de demostración. 
              En producción, solo verás tus datos reales.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Escenarios Recomendados para Probar:</h3>
            
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-sm border border-blue-200 dark:border-blue-800">
              <p className="font-semibold text-blue-900 dark:text-blue-100">📋 Escenario 1: Flujo Completo de Aprobación</p>
              <ol className="mt-2 space-y-1 text-blue-800 dark:text-blue-200 list-decimal list-inside text-xs">
                <li>Cambia a "<strong>Tornillería TÉCNICA S.A.</strong>" (Provider)</li>
                <li>Ve a <strong>Solicitudes → Pendientes</strong> y pre-aprueba</li>
                <li>Cambia a "<strong>ACME Industrial</strong>" (Holder)</li>
                <li>Aprueba la solicitud final en <strong>Solicitudes → Pendientes</strong></li>
                <li>Ve a <strong>Notificaciones</strong> para ver el historial completo</li>
              </ol>
            </div>

            <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg text-sm border border-purple-200 dark:border-purple-800">
              <p className="font-semibold text-purple-900 dark:text-purple-100">📊 Escenario 2: Visualizar y Exportar Datos</p>
              <ol className="mt-2 space-y-1 text-purple-800 dark:text-purple-200 list-decimal list-inside text-xs">
                <li>Cambia a "<strong>NovaTech Solutions</strong>" (Consumer)</li>
                <li>Ve a <strong>Datos</strong> para ver transacciones completadas</li>
                <li>Haz clic en <strong>"Visualizar"</strong> en cualquier transacción</li>
                <li>Explora los datos del proveedor y prueba <strong>Exportar CSV</strong></li>
              </ol>
            </div>

            <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg text-sm border border-green-200 dark:border-green-800">
              <p className="font-semibold text-green-900 dark:text-green-100">📈 Escenario 3: Analytics del Sistema</p>
              <ol className="mt-2 space-y-1 text-green-800 dark:text-green-200 list-decimal list-inside text-xs">
                <li>Ve a <strong>Reportes</strong> para ver analytics globales</li>
                <li>Observa la distribución de <strong>15 transacciones</strong> por estado</li>
                <li>Revisa el <strong>Top 5 productos</strong> más solicitados</li>
                <li>Analiza las métricas clave: tasa de aprobación, tiempo promedio, etc.</li>
              </ol>
            </div>

            <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg text-sm border border-indigo-200 dark:border-indigo-800">
              <p className="font-semibold text-indigo-900 dark:text-indigo-100">🔄 Escenario 4: Cambio de Roles</p>
              <ol className="mt-2 space-y-1 text-indigo-800 dark:text-indigo-200 list-decimal list-inside text-xs">
                <li>Usa el <strong>selector de organización</strong> para cambiar roles</li>
                <li>Observa cómo cambian las <strong>solicitudes pendientes</strong> según el rol</li>
                <li>Explora las <strong>10 organizaciones</strong> disponibles</li>
                <li>Compara las vistas de Consumer, Holder y Provider</li>
              </ol>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground text-center pt-2 border-t">
            💡 Puedes reiniciar este tour en cualquier momento desde el botón de ayuda (?)
          </p>
        </div>
      ),
      placement: 'center',
    },
  ];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, action, index, type } = data;

    // Navegar a la página de solicitudes cuando se hace clic en ese paso
    if (type === 'step:after' && index === 2 && action === 'next') {
      navigate('/requests');
    }

    if (([STATUS.FINISHED, STATUS.SKIPPED] as string[]).includes(status)) {
      // Marcar el tour como completado
      localStorage.setItem('demo-tour-completed', 'true');
      setRun(false);
      setStepIndex(0);
    } else if (type === 'step:after') {
      setStepIndex(index + (action === 'prev' ? -1 : 1));
    }
  };

  if (!isDemo || !run) return null;

  return (
    <Joyride
      steps={steps}
      run={run}
      stepIndex={stepIndex}
      continuous
      showProgress
      showSkipButton
      callback={handleJoyrideCallback}
      styles={{
        options: {
          primaryColor: 'hsl(var(--primary))',
          zIndex: 10000,
        },
        tooltip: {
          borderRadius: 8,
          padding: 20,
        },
        tooltipContainer: {
          textAlign: 'left',
        },
        buttonNext: {
          backgroundColor: 'hsl(var(--primary))',
          borderRadius: 6,
          padding: '8px 16px',
        },
        buttonBack: {
          color: 'hsl(var(--muted-foreground))',
          marginRight: 8,
        },
        buttonSkip: {
          color: 'hsl(var(--muted-foreground))',
        },
      }}
      locale={{
        back: 'Atrás',
        close: 'Cerrar',
        last: 'Finalizar',
        next: 'Siguiente',
        skip: 'Saltar tour',
      }}
    />
  );
};
