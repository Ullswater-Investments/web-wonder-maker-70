import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailPayload {
  role: 'buyer' | 'supplier';
  recipientEmail: string;
  recipientName: string;
  companyName: string;
  requestId: string;
  language?: string;
}

// Email templates
const getSupplierTemplate = (name: string, companyName: string, baseUrl: string, lang: string) => {
  const translations: Record<string, {
    subject: string;
    preheader: string;
    greeting: string;
    intro: string;
    trustStatement: string;
    statusLabel: string;
    statusBasic: string;
    toVerify: string;
    step1: string;
    step2: string;
    benefit: string;
    ctaButton: string;
    helpLink: string;
    signature: string;
  }> = {
    es: {
      subject: "⏳ Acción Requerida: Activa tu visibilidad en ProcureData",
      preheader: "Solo te falta un paso para ser visible ante los compradores corporativos.",
      greeting: `Hola, ${name}:`,
      intro: "Bienvenido a ProcureData. Tu cuenta ha sido creada correctamente, pero tu perfil aún no es visible para la red de compradores.",
      trustStatement: "En este Espacio de Datos, la confianza es la moneda de cambio. Para que las grandes empresas puedan enviarte solicitudes de oferta (RFI/RFQ), necesitamos validar tu solvencia técnica.",
      statusLabel: "Tu estado actual:",
      statusBasic: "🔴 Registro Básico (Invisible)",
      toVerify: "Para pasar a estado 🟢 Verificado, necesitas:",
      step1: "✓ Completar los datos fiscales de tu empresa.",
      step2: "✓ Subir tus certificaciones vigentes (ISO, Huella de Carbono, etc.).",
      benefit: "Recuerda: Solo tendrás que hacerlo una vez para homologarte con múltiples clientes.",
      ctaButton: "COMPLETAR MI PERFIL AHORA",
      helpLink: "¿Tienes dudas sobre qué documentos necesitas?",
      signature: "El equipo de Onboarding de ProcureData"
    },
    en: {
      subject: "⏳ Action Required: Activate your visibility on ProcureData",
      preheader: "You're just one step away from being visible to corporate buyers.",
      greeting: `Hello, ${name}:`,
      intro: "Welcome to ProcureData. Your account has been created successfully, but your profile is not yet visible to the buyer network.",
      trustStatement: "In this Data Space, trust is the currency. For large companies to send you RFI/RFQ requests, we need to validate your technical solvency.",
      statusLabel: "Your current status:",
      statusBasic: "🔴 Basic Registration (Invisible)",
      toVerify: "To reach 🟢 Verified status, you need to:",
      step1: "✓ Complete your company's tax information.",
      step2: "✓ Upload your current certifications (ISO, Carbon Footprint, etc.).",
      benefit: "Remember: You only need to do this once to be approved by multiple clients.",
      ctaButton: "COMPLETE MY PROFILE NOW",
      helpLink: "Have questions about which documents you need?",
      signature: "The ProcureData Onboarding Team"
    },
    fr: {
      subject: "⏳ Action Requise: Activez votre visibilité sur ProcureData",
      preheader: "Vous n'êtes qu'à un pas d'être visible par les acheteurs corporatifs.",
      greeting: `Bonjour, ${name}:`,
      intro: "Bienvenue sur ProcureData. Votre compte a été créé avec succès, mais votre profil n'est pas encore visible par le réseau d'acheteurs.",
      trustStatement: "Dans cet Espace de Données, la confiance est la monnaie d'échange. Pour que les grandes entreprises puissent vous envoyer des demandes (RFI/RFQ), nous devons valider votre solvabilité technique.",
      statusLabel: "Votre statut actuel:",
      statusBasic: "🔴 Inscription Basique (Invisible)",
      toVerify: "Pour passer au statut 🟢 Vérifié, vous devez:",
      step1: "✓ Compléter les données fiscales de votre entreprise.",
      step2: "✓ Télécharger vos certifications actuelles (ISO, Empreinte Carbone, etc.).",
      benefit: "Rappel: Vous n'aurez à le faire qu'une seule fois pour être approuvé par plusieurs clients.",
      ctaButton: "COMPLÉTER MON PROFIL MAINTENANT",
      helpLink: "Des questions sur les documents nécessaires?",
      signature: "L'équipe d'Onboarding de ProcureData"
    },
    pt: {
      subject: "⏳ Ação Necessária: Ative sua visibilidade no ProcureData",
      preheader: "Você está a apenas um passo de ser visível para compradores corporativos.",
      greeting: `Olá, ${name}:`,
      intro: "Bem-vindo ao ProcureData. Sua conta foi criada com sucesso, mas seu perfil ainda não está visível para a rede de compradores.",
      trustStatement: "Neste Espaço de Dados, a confiança é a moeda de troca. Para que grandes empresas possam enviar solicitações (RFI/RFQ), precisamos validar sua solvência técnica.",
      statusLabel: "Seu status atual:",
      statusBasic: "🔴 Cadastro Básico (Invisível)",
      toVerify: "Para atingir o status 🟢 Verificado, você precisa:",
      step1: "✓ Completar os dados fiscais da sua empresa.",
      step2: "✓ Enviar suas certificações atuais (ISO, Pegada de Carbono, etc.).",
      benefit: "Lembre-se: Você só precisa fazer isso uma vez para ser aprovado por múltiplos clientes.",
      ctaButton: "COMPLETAR MEU PERFIL AGORA",
      helpLink: "Dúvidas sobre quais documentos são necessários?",
      signature: "A equipe de Onboarding do ProcureData"
    },
    de: {
      subject: "⏳ Aktion Erforderlich: Aktivieren Sie Ihre Sichtbarkeit auf ProcureData",
      preheader: "Sie sind nur einen Schritt davon entfernt, für Unternehmenskäufer sichtbar zu sein.",
      greeting: `Hallo, ${name}:`,
      intro: "Willkommen bei ProcureData. Ihr Konto wurde erfolgreich erstellt, aber Ihr Profil ist noch nicht für das Käufernetzwerk sichtbar.",
      trustStatement: "In diesem Datenraum ist Vertrauen die Währung. Damit große Unternehmen Ihnen RFI/RFQ-Anfragen senden können, müssen wir Ihre technische Solvenz validieren.",
      statusLabel: "Ihr aktueller Status:",
      statusBasic: "🔴 Basisregistrierung (Unsichtbar)",
      toVerify: "Um den Status 🟢 Verifiziert zu erreichen, müssen Sie:",
      step1: "✓ Die Steuerdaten Ihres Unternehmens vervollständigen.",
      step2: "✓ Ihre aktuellen Zertifizierungen hochladen (ISO, CO2-Fußabdruck, etc.).",
      benefit: "Denken Sie daran: Sie müssen dies nur einmal tun, um von mehreren Kunden genehmigt zu werden.",
      ctaButton: "MEIN PROFIL JETZT VERVOLLSTÄNDIGEN",
      helpLink: "Fragen zu den benötigten Dokumenten?",
      signature: "Das ProcureData Onboarding-Team"
    },
    it: {
      subject: "⏳ Azione Richiesta: Attiva la tua visibilità su ProcureData",
      preheader: "Sei a solo un passo dall'essere visibile ai buyer aziendali.",
      greeting: `Ciao, ${name}:`,
      intro: "Benvenuto su ProcureData. Il tuo account è stato creato con successo, ma il tuo profilo non è ancora visibile alla rete di acquirenti.",
      trustStatement: "In questo Spazio Dati, la fiducia è la valuta di scambio. Affinché le grandi aziende possano inviarti richieste (RFI/RFQ), dobbiamo validare la tua solvibilità tecnica.",
      statusLabel: "Il tuo stato attuale:",
      statusBasic: "🔴 Registrazione Base (Invisibile)",
      toVerify: "Per raggiungere lo stato 🟢 Verificato, devi:",
      step1: "✓ Completare i dati fiscali della tua azienda.",
      step2: "✓ Caricare le tue certificazioni attuali (ISO, Impronta di Carbonio, ecc.).",
      benefit: "Ricorda: Devi farlo solo una volta per essere approvato da più clienti.",
      ctaButton: "COMPLETA IL MIO PROFILO ORA",
      helpLink: "Hai domande sui documenti necessari?",
      signature: "Il team di Onboarding di ProcureData"
    },
    nl: {
      subject: "⏳ Actie Vereist: Activeer je zichtbaarheid op ProcureData",
      preheader: "Je bent slechts één stap verwijderd van zichtbaarheid voor zakelijke kopers.",
      greeting: `Hallo, ${name}:`,
      intro: "Welkom bij ProcureData. Je account is succesvol aangemaakt, maar je profiel is nog niet zichtbaar voor het kopersnetwerk.",
      trustStatement: "In deze Data Space is vertrouwen de valuta. Opdat grote bedrijven je RFI/RFQ-verzoeken kunnen sturen, moeten we je technische solvabiliteit valideren.",
      statusLabel: "Je huidige status:",
      statusBasic: "🔴 Basisregistratie (Onzichtbaar)",
      toVerify: "Om de status 🟢 Geverifieerd te bereiken, moet je:",
      step1: "✓ De belastinggegevens van je bedrijf invullen.",
      step2: "✓ Je huidige certificeringen uploaden (ISO, CO2-voetafdruk, etc.).",
      benefit: "Onthoud: Je hoeft dit slechts één keer te doen om door meerdere klanten goedgekeurd te worden.",
      ctaButton: "VOLTOOI MIJN PROFIEL NU",
      helpLink: "Vragen over welke documenten je nodig hebt?",
      signature: "Het ProcureData Onboarding Team"
    }
  };

  const t = translations[lang] || translations.en;
  const profileUrl = `${baseUrl}/dashboard/profile`;

  return {
    subject: t.subject,
    html: `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.subject}</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; background-color: #f8fafc; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td style="padding: 32px 40px; text-align: center; border-bottom: 1px solid #e2e8f0;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; background: linear-gradient(135deg, #0ea5e9, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">PROCUREDATA</h1>
            </td>
          </tr>
          
          <!-- Hero Icon -->
          <tr>
            <td style="padding: 32px 40px 16px; text-align: center;">
              <div style="display: inline-block; width: 64px; height: 64px; background: linear-gradient(135deg, #fef3c7, #fcd34d); border-radius: 50%; line-height: 64px; font-size: 32px;">
                ⏳
              </div>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <p style="font-size: 16px; color: #1e293b; margin: 0 0 16px;">${t.greeting}</p>
              <p style="font-size: 16px; color: #475569; margin: 0 0 16px;">${t.intro}</p>
              <p style="font-size: 16px; color: #475569; margin: 0 0 24px;">${t.trustStatement}</p>
              
              <!-- Status Box -->
              <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 16px 20px; margin: 0 0 24px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0 0 8px; font-weight: 600; color: #1e293b;">${t.statusLabel}</p>
                <p style="margin: 0; font-size: 18px; font-weight: 700; color: #dc2626;">${t.statusBasic}</p>
              </div>
              
              <p style="font-size: 16px; color: #1e293b; font-weight: 600; margin: 0 0 16px;">${t.toVerify}</p>
              <ul style="padding-left: 0; list-style: none; margin: 0 0 16px;">
                <li style="font-size: 15px; color: #475569; padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${t.step1}</li>
                <li style="font-size: 15px; color: #475569; padding: 8px 0;">${t.step2}</li>
              </ul>
              <p style="font-size: 14px; color: #64748b; font-style: italic; margin: 0 0 32px;">${t.benefit}</p>
            </td>
          </tr>
          
          <!-- CTA Button -->
          <tr>
            <td style="padding: 0 40px 32px; text-align: center;">
              <a href="${profileUrl}" style="display: inline-block; background: #0f172a; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; letter-spacing: 0.5px;">${t.ctaButton}</a>
            </td>
          </tr>
          
          <!-- Help Link -->
          <tr>
            <td style="padding: 0 40px 32px; text-align: center;">
              <a href="${baseUrl}/help" style="font-size: 14px; color: #3b82f6; text-decoration: underline;">${t.helpLink}</a>
            </td>
          </tr>
          
          <!-- Signature -->
          <tr>
            <td style="padding: 24px 40px; background: #f8fafc; border-radius: 0 0 12px 12px;">
              <p style="font-size: 14px; color: #64748b; margin: 0;">${t.signature}</p>
            </td>
          </tr>
        </table>
        
        <!-- Footer -->
        <table role="presentation" style="max-width: 600px; width: 100%; margin-top: 24px;">
          <tr>
            <td style="text-align: center; padding: 0 20px;">
              <p style="font-size: 12px; color: #94a3b8; margin: 0;">ProcureData © ${new Date().getFullYear()} | European Data Space for Procurement</p>
              <p style="font-size: 12px; color: #94a3b8; margin: 8px 0 0;">Calle Ejemplo 123, 28001 Madrid, España</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `
  };
};

const getBuyerTemplate = (name: string, companyName: string, baseUrl: string, lang: string) => {
  const translations: Record<string, {
    subject: string;
    preheader: string;
    greeting: string;
    intro: string;
    securityNote: string;
    nextSteps: string;
    step1: string;
    step2: string;
    ctaButton: string;
    erpNote: string;
    securityWarning: string;
    signature: string;
  }> = {
    es: {
      subject: "Bienvenido a ProcureData - Verificación de Seguridad en curso",
      preheader: "Confirme su entidad legal para acceder al mercado de proveedores.",
      greeting: `Estimado/a ${name}:`,
      intro: `Gracias por unirse a ProcureData. Hemos registrado su solicitud de acceso como Comprador Corporativo para ${companyName}.`,
      securityNote: "Para garantizar la soberanía y seguridad del dato en nuestro ecosistema, el acceso a la búsqueda de proveedores y datos de riesgo está restringido hasta completar la verificación KYB (Know Your Business).",
      nextSteps: "Siguientes pasos:",
      step1: `Validación de Identidad: Confirme que representa legalmente a ${companyName}.`,
      step2: "Conexión de Datos: Configure su conector IDS o invite a su equipo técnico.",
      ctaButton: "INICIAR VERIFICACIÓN DE ENTIDAD",
      erpNote: "Una vez verificado, podrá conectar su ERP (SAP, Oracle, Microsoft) directamente a nuestro espacio de datos para automatizar sus compras.",
      securityWarning: "Si usted no ha realizado este registro, por favor contacte inmediatamente con seguridad@procuredata.com.",
      signature: "El equipo de Seguridad y Compliance de ProcureData"
    },
    en: {
      subject: "Welcome to ProcureData - Security Verification in Progress",
      preheader: "Confirm your legal entity to access the supplier market.",
      greeting: `Dear ${name}:`,
      intro: `Thank you for joining ProcureData. We have registered your access request as a Corporate Buyer for ${companyName}.`,
      securityNote: "To ensure data sovereignty and security in our ecosystem, access to supplier search and risk data is restricted until you complete the KYB (Know Your Business) verification.",
      nextSteps: "Next steps:",
      step1: `Identity Validation: Confirm that you legally represent ${companyName}.`,
      step2: "Data Connection: Configure your IDS connector or invite your technical team.",
      ctaButton: "START ENTITY VERIFICATION",
      erpNote: "Once verified, you will be able to connect your ERP (SAP, Oracle, Microsoft) directly to our data space to automate your purchases.",
      securityWarning: "If you did not register, please contact security@procuredata.com immediately.",
      signature: "The ProcureData Security and Compliance Team"
    },
    fr: {
      subject: "Bienvenue sur ProcureData - Vérification de Sécurité en cours",
      preheader: "Confirmez votre entité légale pour accéder au marché des fournisseurs.",
      greeting: `Cher/Chère ${name}:`,
      intro: `Merci d'avoir rejoint ProcureData. Nous avons enregistré votre demande d'accès en tant qu'Acheteur Corporatif pour ${companyName}.`,
      securityNote: "Pour garantir la souveraineté et la sécurité des données dans notre écosystème, l'accès à la recherche de fournisseurs et aux données de risque est restreint jusqu'à la vérification KYB (Know Your Business).",
      nextSteps: "Prochaines étapes:",
      step1: `Validation d'Identité: Confirmez que vous représentez légalement ${companyName}.`,
      step2: "Connexion de Données: Configurez votre connecteur IDS ou invitez votre équipe technique.",
      ctaButton: "DÉMARRER LA VÉRIFICATION D'ENTITÉ",
      erpNote: "Une fois vérifié, vous pourrez connecter votre ERP (SAP, Oracle, Microsoft) directement à notre espace de données pour automatiser vos achats.",
      securityWarning: "Si vous n'avez pas effectué cette inscription, veuillez contacter immédiatement security@procuredata.com.",
      signature: "L'équipe Sécurité et Compliance de ProcureData"
    },
    pt: {
      subject: "Bem-vindo ao ProcureData - Verificação de Segurança em andamento",
      preheader: "Confirme sua entidade legal para acessar o mercado de fornecedores.",
      greeting: `Prezado/a ${name}:`,
      intro: `Obrigado por se juntar ao ProcureData. Registramos sua solicitação de acesso como Comprador Corporativo para ${companyName}.`,
      securityNote: "Para garantir a soberania e segurança dos dados em nosso ecossistema, o acesso à busca de fornecedores e dados de risco está restrito até completar a verificação KYB (Know Your Business).",
      nextSteps: "Próximos passos:",
      step1: `Validação de Identidade: Confirme que você representa legalmente ${companyName}.`,
      step2: "Conexão de Dados: Configure seu conector IDS ou convide sua equipe técnica.",
      ctaButton: "INICIAR VERIFICAÇÃO DE ENTIDADE",
      erpNote: "Uma vez verificado, você poderá conectar seu ERP (SAP, Oracle, Microsoft) diretamente ao nosso espaço de dados para automatizar suas compras.",
      securityWarning: "Se você não realizou este cadastro, por favor contate imediatamente security@procuredata.com.",
      signature: "A equipe de Segurança e Compliance do ProcureData"
    },
    de: {
      subject: "Willkommen bei ProcureData - Sicherheitsüberprüfung läuft",
      preheader: "Bestätigen Sie Ihre Rechtspersönlichkeit, um auf den Lieferantenmarkt zuzugreifen.",
      greeting: `Sehr geehrte/r ${name}:`,
      intro: `Vielen Dank, dass Sie ProcureData beigetreten sind. Wir haben Ihre Zugriffsanfrage als Unternehmenskäufer für ${companyName} registriert.`,
      securityNote: "Um die Datensouveränität und Sicherheit in unserem Ökosystem zu gewährleisten, ist der Zugriff auf die Lieferantensuche und Risikodaten bis zum Abschluss der KYB-Verifizierung (Know Your Business) eingeschränkt.",
      nextSteps: "Nächste Schritte:",
      step1: `Identitätsvalidierung: Bestätigen Sie, dass Sie ${companyName} rechtlich vertreten.`,
      step2: "Datenverbindung: Konfigurieren Sie Ihren IDS-Connector oder laden Sie Ihr technisches Team ein.",
      ctaButton: "ENTITÄTSVERIFIZIERUNG STARTEN",
      erpNote: "Nach der Verifizierung können Sie Ihr ERP (SAP, Oracle, Microsoft) direkt mit unserem Datenraum verbinden, um Ihre Einkäufe zu automatisieren.",
      securityWarning: "Wenn Sie diese Registrierung nicht durchgeführt haben, kontaktieren Sie bitte sofort security@procuredata.com.",
      signature: "Das ProcureData Sicherheits- und Compliance-Team"
    },
    it: {
      subject: "Benvenuto su ProcureData - Verifica di Sicurezza in corso",
      preheader: "Conferma la tua entità legale per accedere al mercato dei fornitori.",
      greeting: `Gentile ${name}:`,
      intro: `Grazie per esserti unito a ProcureData. Abbiamo registrato la tua richiesta di accesso come Acquirente Aziendale per ${companyName}.`,
      securityNote: "Per garantire la sovranità e la sicurezza dei dati nel nostro ecosistema, l'accesso alla ricerca fornitori e ai dati di rischio è limitato fino al completamento della verifica KYB (Know Your Business).",
      nextSteps: "Prossimi passi:",
      step1: `Validazione Identità: Conferma di rappresentare legalmente ${companyName}.`,
      step2: "Connessione Dati: Configura il tuo connettore IDS o invita il tuo team tecnico.",
      ctaButton: "AVVIA VERIFICA ENTITÀ",
      erpNote: "Una volta verificato, potrai connettere il tuo ERP (SAP, Oracle, Microsoft) direttamente al nostro spazio dati per automatizzare i tuoi acquisti.",
      securityWarning: "Se non hai effettuato questa registrazione, contatta immediatamente security@procuredata.com.",
      signature: "Il team Sicurezza e Compliance di ProcureData"
    },
    nl: {
      subject: "Welkom bij ProcureData - Beveiligingsverificatie in uitvoering",
      preheader: "Bevestig je rechtspersoon om toegang te krijgen tot de leveranciersmarkt.",
      greeting: `Beste ${name}:`,
      intro: `Bedankt voor je deelname aan ProcureData. We hebben je toegangsverzoek als Zakelijke Koper voor ${companyName} geregistreerd.`,
      securityNote: "Om de datasoevereiniteit en beveiliging in ons ecosysteem te garanderen, is de toegang tot leverancierszoekopdrachten en risicogegevens beperkt totdat je de KYB-verificatie (Know Your Business) hebt voltooid.",
      nextSteps: "Volgende stappen:",
      step1: `Identiteitsvalidatie: Bevestig dat je ${companyName} wettelijk vertegenwoordigt.`,
      step2: "Dataverbinding: Configureer je IDS-connector of nodig je technische team uit.",
      ctaButton: "START ENTITEITSVERIFICATIE",
      erpNote: "Na verificatie kun je je ERP (SAP, Oracle, Microsoft) rechtstreeks verbinden met onze dataruimte om je aankopen te automatiseren.",
      securityWarning: "Als je deze registratie niet hebt uitgevoerd, neem dan onmiddellijk contact op met security@procuredata.com.",
      signature: "Het ProcureData Security en Compliance Team"
    }
  };

  const t = translations[lang] || translations.en;
  const verificationUrl = `${baseUrl}/dashboard/kyb`;

  return {
    subject: t.subject,
    html: `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.subject}</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; background-color: #f8fafc; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td style="padding: 32px 40px; text-align: center; border-bottom: 1px solid #e2e8f0;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; background: linear-gradient(135deg, #0ea5e9, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">PROCUREDATA</h1>
            </td>
          </tr>
          
          <!-- Hero Icon -->
          <tr>
            <td style="padding: 32px 40px 16px; text-align: center;">
              <div style="display: inline-block; width: 64px; height: 64px; background: linear-gradient(135deg, #dbeafe, #3b82f6); border-radius: 50%; line-height: 64px; font-size: 32px;">
                🛡️
              </div>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <p style="font-size: 16px; color: #1e293b; margin: 0 0 16px;">${t.greeting}</p>
              <p style="font-size: 16px; color: #475569; margin: 0 0 16px;">${t.intro}</p>
              
              <!-- Security Note Box -->
              <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 16px 20px; margin: 0 0 24px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; font-size: 15px; color: #1e40af;">${t.securityNote}</p>
              </div>
              
              <p style="font-size: 16px; color: #1e293b; font-weight: 600; margin: 0 0 16px;">${t.nextSteps}</p>
              <ol style="padding-left: 20px; margin: 0 0 24px; color: #475569;">
                <li style="font-size: 15px; padding: 8px 0;"><strong>1.</strong> ${t.step1}</li>
                <li style="font-size: 15px; padding: 8px 0;"><strong>2.</strong> ${t.step2}</li>
              </ol>
            </td>
          </tr>
          
          <!-- CTA Button -->
          <tr>
            <td style="padding: 0 40px 24px; text-align: center;">
              <a href="${verificationUrl}" style="display: inline-block; background: #0f172a; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; letter-spacing: 0.5px;">${t.ctaButton}</a>
            </td>
          </tr>
          
          <!-- ERP Note -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <p style="font-size: 14px; color: #64748b; margin: 0; text-align: center;">${t.erpNote}</p>
            </td>
          </tr>
          
          <!-- Security Warning -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 12px 16px; border-radius: 8px;">
                <p style="margin: 0; font-size: 13px; color: #991b1b;">⚠️ ${t.securityWarning}</p>
              </div>
            </td>
          </tr>
          
          <!-- Signature -->
          <tr>
            <td style="padding: 24px 40px; background: #f8fafc; border-radius: 0 0 12px 12px;">
              <p style="font-size: 14px; color: #64748b; margin: 0;">${t.signature}</p>
            </td>
          </tr>
        </table>
        
        <!-- Footer -->
        <table role="presentation" style="max-width: 600px; width: 100%; margin-top: 24px;">
          <tr>
            <td style="text-align: center; padding: 0 20px;">
              <p style="font-size: 12px; color: #94a3b8; margin: 0;">ProcureData © ${new Date().getFullYear()} | European Data Space for Procurement</p>
              <p style="font-size: 12px; color: #94a3b8; margin: 8px 0 0;">Calle Ejemplo 123, 28001 Madrid, España</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `
  };
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: WelcomeEmailPayload = await req.json();
    const { role, recipientEmail, recipientName, companyName, requestId, language = 'es' } = payload;

    console.log(`Sending welcome email to ${recipientEmail} as ${role} in ${language}`);

    const baseUrl = Deno.env.get("SUPABASE_URL")?.replace('.supabase.co', '.lovable.app') || 'https://procuredata.app';
    
    // Get the appropriate template based on role
    const template = role === 'supplier' 
      ? getSupplierTemplate(recipientName, companyName, baseUrl, language)
      : getBuyerTemplate(recipientName, companyName, baseUrl, language);

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "ProcureData <onboarding@resend.dev>",
        to: [recipientEmail],
        subject: template.subject,
        html: template.html,
      }),
    });

    const emailData = await emailResponse.json();
    console.log("Welcome email sent successfully:", emailData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        emailId: emailData.id || 'sent',
        role,
        requestId 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-welcome-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
