import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Home, Database, Shield, Server, Lock, Code, Layers, Wallet,
  GitBranch, ExternalLink, CheckCircle2, XCircle, Users, FileText,
  CreditCard, Settings, Zap, Globe, Box, Cpu, Link2, BookOpen, UserPlus
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FundingFooter } from "@/components/FundingFooter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import DataLineageBlockchain from "@/components/DataLineageBlockchain";
import { ProcuredataLogo } from "@/components/ProcuredataLogo";
import {
  getOverviewDiagram,
  getErDiagram,
  getRlsDiagram,
  getWeb3Diagram,
  getStatesDiagram,
  getSequenceDiagram,
  getRegistrationDiagram
} from "@/utils/architectureDiagrams";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Architecture() {
  const { t } = useTranslation('architecture');
  const [activeTab, setActiveTab] = useState("overview");

  // Tab definitions - localized
  const TABS = useMemo(() => [
    { id: "overview", label: t('tabs.overview'), icon: Layers },
    { id: "database", label: t('tabs.database'), icon: Database },
    { id: "security", label: t('tabs.security'), icon: Shield },
    { id: "web3", label: t('tabs.web3'), icon: Wallet },
    { id: "flows", label: t('tabs.flows'), icon: GitBranch },
    { id: "stack", label: t('tabs.stack'), icon: Code }
  ], [t]);

  // Database table categories - localized
  const DB_CATEGORIES = useMemo(() => [
    {
      name: t('dbCategories.orgsUsers'),
      icon: Users,
      color: "text-blue-500",
      tables: [
        { name: "organizations", description: t('dbTables.organizations.description'), fields: t('dbTables.organizations.fields') },
        { name: "user_profiles", description: t('dbTables.user_profiles.description'), fields: t('dbTables.user_profiles.fields') },
        { name: "user_roles", description: t('dbTables.user_roles.description'), fields: t('dbTables.user_roles.fields') },
        { name: "privacy_preferences", description: t('dbTables.privacy_preferences.description'), fields: t('dbTables.privacy_preferences.fields') }
      ]
    },
    {
      name: t('dbCategories.dataCatalog'),
      icon: Box,
      color: "text-green-500",
      tables: [
        { name: "data_products", description: t('dbTables.data_products.description'), fields: t('dbTables.data_products.fields') },
        { name: "data_assets", description: t('dbTables.data_assets.description'), fields: t('dbTables.data_assets.fields') },
        { name: "catalog_metadata", description: t('dbTables.catalog_metadata.description'), fields: t('dbTables.catalog_metadata.fields') }
      ]
    },
    {
      name: t('dbCategories.transactions'),
      icon: GitBranch,
      color: "text-purple-500",
      tables: [
        { name: "data_transactions", description: t('dbTables.data_transactions.description'), fields: t('dbTables.data_transactions.fields') },
        { name: "approval_history", description: t('dbTables.approval_history.description'), fields: t('dbTables.approval_history.fields') },
        { name: "data_payloads", description: t('dbTables.data_payloads.description'), fields: t('dbTables.data_payloads.fields') },
        { name: "data_policies", description: t('dbTables.data_policies.description'), fields: t('dbTables.data_policies.fields') },
        { name: "transaction_messages", description: t('dbTables.transaction_messages.description'), fields: t('dbTables.transaction_messages.fields') }
      ]
    },
    {
      name: t('dbCategories.payments'),
      icon: CreditCard,
      color: "text-yellow-500",
      tables: [
        { name: "wallets", description: t('dbTables.wallets.description'), fields: t('dbTables.wallets.fields') },
        { name: "wallet_transactions", description: t('dbTables.wallet_transactions.description'), fields: t('dbTables.wallet_transactions.fields') }
      ]
    },
    {
      name: t('dbCategories.security'),
      icon: Settings,
      color: "text-red-500",
      tables: [
        { name: "audit_logs", description: t('dbTables.audit_logs.description'), fields: t('dbTables.audit_logs.fields') },
        { name: "login_attempts", description: t('dbTables.login_attempts.description'), fields: t('dbTables.login_attempts.fields') },
        { name: "erp_configurations", description: t('dbTables.erp_configurations.description'), fields: t('dbTables.erp_configurations.fields') },
        { name: "notifications", description: t('dbTables.notifications.description'), fields: t('dbTables.notifications.fields') }
      ]
    }
  ], [t]);

  // RLS Policies - localized
  const RLS_POLICIES = useMemo(() => [
    { role: t('rlsPolicies.consumer.role'), access: t('rlsPolicies.consumer.access'), color: "bg-blue-500" },
    { role: t('rlsPolicies.provider.role'), access: t('rlsPolicies.provider.access'), color: "bg-green-500" },
    { role: t('rlsPolicies.holder.role'), access: t('rlsPolicies.holder.access'), color: "bg-purple-500" },
    { role: t('rlsPolicies.admin.role'), access: t('rlsPolicies.admin.access'), color: "bg-red-500" }
  ], [t]);

  // Tech stack categories - localized
  const TECH_STACK = useMemo(() => [
    {
      category: t('techStack.frontend'),
      items: [
        { name: "React 18.3", description: t('techItems.react'), url: "https://react.dev" },
        { name: "Vite 5.4", description: t('techItems.vite'), url: "https://vitejs.dev" },
        { name: "TypeScript 5.6", description: t('techItems.typescript'), url: "https://www.typescriptlang.org" },
        { name: "React Router 6", description: t('techItems.reactRouter'), url: "https://reactrouter.com" }
      ]
    },
    {
      category: t('techStack.uiux'),
      items: [
        { name: "Tailwind CSS 3.4", description: t('techItems.tailwind'), url: "https://tailwindcss.com" },
        { name: "shadcn/ui", description: t('techItems.shadcn'), url: "https://ui.shadcn.com" },
        { name: "Framer Motion", description: t('techItems.framer'), url: "https://www.framer.com/motion" },
        { name: "Lucide Icons", description: t('techItems.lucide'), url: "https://lucide.dev" }
      ]
    },
    {
      category: t('techStack.stateData'),
      items: [
        { name: "TanStack Query 5", description: t('techItems.tanstack'), url: "https://tanstack.com/query" },
        { name: "React Hook Form", description: t('techItems.hookForm'), url: "https://react-hook-form.com" },
        { name: "Zod", description: t('techItems.zod'), url: "https://zod.dev" },
        { name: "Recharts", description: t('techItems.recharts'), url: "https://recharts.org" }
      ]
    },
    {
      category: t('techStack.backend'),
      items: [
        { name: "PostgreSQL 15", description: t('techItems.postgresql'), url: "https://www.postgresql.org" },
        { name: "Edge Functions", description: t('techItems.edgeFunctions'), url: "https://deno.land" },
        { name: "Realtime", description: t('techItems.realtime'), url: "#" },
        { name: "Auth", description: t('techItems.auth'), url: "#" }
      ]
    },
    {
      category: t('techStack.web3'),
      items: [
        { name: "Ethers.js 6", description: t('techItems.ethers'), url: "https://docs.ethers.org" },
        { name: "Pontus-X", description: t('techItems.pontusX'), url: "https://pontus-x.eu" },
        { name: "EUROe", description: t('techItems.euroe'), url: "https://www.euroe.com" },
        { name: "DID:ethr", description: t('techItems.didEthr'), url: "https://github.com/decentralized-identity/ethr-did-resolver" }
      ]
    },
    {
      category: t('techStack.utilities'),
      items: [
        { name: "date-fns", description: t('techItems.dateFns'), url: "https://date-fns.org" },
        { name: "jsPDF", description: t('techItems.jspdf'), url: "https://github.com/parallax/jsPDF" },
        { name: "Mermaid", description: t('techItems.mermaid'), url: "https://mermaid.js.org" },
        { name: "React Markdown", description: t('techItems.reactMarkdown'), url: "https://github.com/remarkjs/react-markdown" }
      ]
    }
  ], [t]);

  // Flow timeline steps - localized
  const FLOW_TIMELINE = useMemo(() => [
    { step: 1, title: t('flows.step1Title'), status: t('flows.step1Status'), desc: t('flows.step1Desc'), color: "bg-blue-500" },
    { step: 2, title: t('flows.step2Title'), status: t('flows.step2Status'), desc: t('flows.step2Desc'), color: "bg-green-500" },
    { step: 3, title: t('flows.step3Title'), status: t('flows.step3Status'), desc: t('flows.step3Desc'), color: "bg-purple-500" },
    { step: 4, title: t('flows.step4Title'), status: t('flows.step4Status'), desc: t('flows.step4Desc'), color: "bg-primary" }
  ], [t]);

  // Count total tables
  const totalTables = DB_CATEGORIES.reduce((acc, cat) => acc + cat.tables.length, 0);

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ProcuredataLogo size="md" />
            </Link>
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-xl hidden sm:inline">| {t('headerTitle')}</h1>
              <Badge variant="outline" className="hidden sm:flex gap-1">
                <Zap className="h-3 w-3" />
                {t('version')}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild className="hidden md:flex">
              <Link to="/docs/tecnico"><BookOpen className="h-4 w-4 mr-2" />{t('docs')}</Link>
            </Button>
            <Button asChild><Link to="/auth">{t('tryDemo')}</Link></Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-2">{t('heroTitle')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('heroDescription')}
          </p>
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            <Link to="/use-cases"><Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">{t('viewUseCases')}</Badge></Link>
            <Link to="/models"><Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">{t('businessModels')}</Badge></Link>
            <Link to="/whitepaper"><Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">{t('whitepaper')}</Badge></Link>
          </div>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto gap-1 bg-muted/50 p-1">
            {TABS.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex items-center gap-2 py-2.5 data-[state=active]:bg-background"
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {/* TAB 1: OVERVIEW */}
            <TabsContent value="overview" className="space-y-6">
              <motion.div {...fadeInUp} key="overview">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary" />
                      {t('overview.highLevelArch')}
                    </CardTitle>
                    <CardDescription>
                      {t('overview.highLevelDesc')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MermaidDiagram chart={getOverviewDiagram(t)} scale={0.9} mobileScale={0.55} />
                  </CardContent>
                </Card>

                {/* Data Space Components */}
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      {t('overview.dataSpaceComponents')}
                    </CardTitle>
                    <CardDescription>
                      {t('overview.dataSpaceDesc')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        variants={fadeInUp}
                        className="flex items-center gap-3 p-4 bg-background rounded-lg border"
                      >
                        <div className="h-10 w-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Link2 className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{t('overview.edc')}</p>
                          <p className="text-xs text-muted-foreground">{t('overview.edcDesc')}</p>
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-300 flex-shrink-0">{t('overview.active')}</Badge>
                      </motion.div>

                      <motion.div
                        variants={fadeInUp}
                        className="flex items-center gap-3 p-4 bg-background rounded-lg border"
                      >
                        <div className="h-10 w-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Shield className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{t('overview.idsProtocol')}</p>
                          <p className="text-xs text-muted-foreground">{t('overview.idsDesc')}</p>
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-300 flex-shrink-0">{t('overview.active')}</Badge>
                      </motion.div>

                      <motion.div
                        variants={fadeInUp}
                        className="flex items-center gap-3 p-4 bg-background rounded-lg border"
                      >
                        <div className="h-10 w-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Lock className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{t('overview.keycloak')}</p>
                          <p className="text-xs text-muted-foreground">{t('overview.keycloakDesc')}</p>
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-300 flex-shrink-0">{t('overview.active')}</Badge>
                      </motion.div>

                      <motion.div
                        variants={fadeInUp}
                        className="flex items-center gap-3 p-4 bg-background rounded-lg border"
                      >
                        <div className="h-10 w-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{t('overview.gaiaX')}</p>
                          <p className="text-xs text-muted-foreground">{t('overview.gaiaXDesc')}</p>
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-300 flex-shrink-0">{t('overview.active')}</Badge>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-4">
                  <motion.div variants={fadeInUp}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2">
                          <Globe className="h-5 w-5 text-blue-500" />
                        </div>
                        <CardTitle className="text-lg">{t('overview.frontendSpa')}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        <ul className="space-y-1">
                          <li>• React 18 + TypeScript</li>
                          <li>• 49 shadcn/ui components</li>
                          <li>• Framer Motion animations</li>
                          <li>• i18n: 7 languages</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-2">
                          <Server className="h-5 w-5 text-green-500" />
                        </div>
                        <CardTitle className="text-lg">{t('overview.backendCloud')}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        <ul className="space-y-1">
                          <li>• PostgreSQL 15 + RLS</li>
                          <li>• {totalTables} tables v3.2</li>
                          <li>• Edge Functions (Deno)</li>
                          <li>• Resend emails</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                          <Link2 className="h-5 w-5 text-purple-500" />
                        </div>
                        <CardTitle className="text-lg">{t('overview.web3Layer')}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        <ul className="space-y-1">
                          <li>• Pontus-X Testnet</li>
                          <li>• DID:ethr Identity</li>
                          <li>• EUROe Payments</li>
                          <li>• On-chain notarization</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            {/* TAB 2: DATABASE */}
            <TabsContent value="database" className="space-y-6">
              <motion.div {...fadeInUp} key="database">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-blue-500" />
                      {t('database.erDiagram')}
                    </CardTitle>
                    <CardDescription>
                      {t('database.erDesc')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MermaidDiagram chart={getErDiagram(t)} scale={0.85} mobileScale={0.5} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t('database.tablesByCategory')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="multiple" className="w-full">
                      {DB_CATEGORIES.map((category) => (
                        <AccordionItem key={category.name} value={category.name}>
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center gap-3">
                              <category.icon className={`h-5 w-5 ${category.color}`} />
                              <span>{category.name}</span>
                              <Badge variant="secondary" className="ml-2">{category.tables.length}</Badge>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3 pt-2">
                              {category.tables.map((table) => (
                                <div key={table.name} className="p-3 bg-muted/50 rounded-lg">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <code className="font-mono text-sm font-bold text-primary">{table.name}</code>
                                      <p className="text-sm text-muted-foreground mt-1">{table.description}</p>
                                    </div>
                                  </div>
                                  <code className="text-xs bg-background p-2 rounded block mt-2 overflow-x-auto">
                                    {table.fields}
                                  </code>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* TAB 3: SECURITY */}
            <TabsContent value="security" className="space-y-6">
              <motion.div {...fadeInUp} key="security">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-red-500" />
                      {t('security.rlsFlow')}
                    </CardTitle>
                    <CardDescription>
                      {t('security.rlsDesc')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MermaidDiagram chart={getRlsDiagram(t)} scale={0.9} mobileScale={0.55} />
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        {t('security.policiesByRole')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {RLS_POLICIES.map((policy) => (
                        <div key={policy.role} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                          <div className={`w-3 h-3 rounded-full ${policy.color} mt-1`} />
                          <div>
                            <p className="font-medium">{policy.role}</p>
                            <p className="text-sm text-muted-foreground">{policy.access}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        {t('security.policyExample')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">
                        {`-- Policy for data_transactions
CREATE POLICY "Users view own org transactions"
ON data_transactions FOR SELECT
USING (
  consumer_org_id = get_user_organization(auth.uid())
  OR subject_org_id = get_user_organization(auth.uid())
  OR holder_org_id = get_user_organization(auth.uid())
);`}
                      </pre>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>{t('security.rlsActive')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>{t('security.securityDefiner')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>{t('security.auditAuto')}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            {/* TAB 4: WEB3 */}
            <TabsContent value="web3" className="space-y-6">
              <motion.div {...fadeInUp} key="web3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-purple-500" />
                      {t('web3.pontusIntegration')}
                    </CardTitle>
                    <CardDescription>
                      {t('web3.pontusDesc')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MermaidDiagram chart={getWeb3Diagram(t)} scale={0.9} mobileScale={0.55} />
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{t('web3.networkConfig')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-muted-foreground">{t('web3.network')}</span>
                          <span className="font-mono">Pontus-X Testnet</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-muted-foreground">{t('web3.chainId')}</span>
                          <span className="font-mono">32457</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-muted-foreground">{t('web3.rpcUrl')}</span>
                          <span className="font-mono text-xs">rpc.test.pontus-x.eu</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-muted-foreground">{t('web3.currency')}</span>
                          <span className="font-mono">EUROe (ERC-20)</span>
                        </div>
                        <Button variant="outline" className="w-full mt-2" asChild>
                          <a href="https://explorer.pontus-x.eu" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {t('web3.viewExplorer')}
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{t('web3.web3Features')}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline">DID:ethr</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {t('web3.didDesc')}
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline">EUROe</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {t('web3.euroeDesc')}
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline">Notarization</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {t('web3.notarizationDesc')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t('web3.dataLineage')}</CardTitle>
                    <CardDescription>
                      {t('web3.dataLineageDesc')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DataLineageBlockchain />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* TAB 5: FLOWS */}
            <TabsContent value="flows" className="space-y-6">
              <motion.div {...fadeInUp} key="flows">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GitBranch className="h-5 w-5 text-orange-500" />
                      {t('flows.stateMachine')}
                    </CardTitle>
                    <CardDescription>
                      {t('flows.stateDesc')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MermaidDiagram chart={getStatesDiagram(t)} scale={0.85} mobileScale={0.5} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Server className="h-5 w-5 text-blue-500" />
                      {t('flows.fullFlow')}
                    </CardTitle>
                    <CardDescription>
                      {t('flows.flowDesc')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MermaidDiagram chart={getSequenceDiagram(t)} scale={0.9} mobileScale={0.55} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t('flows.timeline')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative border-l-2 border-primary/20 ml-4 space-y-8 pl-8 py-4">
                      {FLOW_TIMELINE.map((item) => (
                        <div key={item.step} className="relative">
                          <span className={`absolute -left-[41px] ${item.color} text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold`}>
                            {item.step}
                          </span>
                          <h4 className="font-bold">{item.title}</h4>
                          <Badge variant="outline" className="my-1 font-mono text-xs">{item.status}</Badge>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* TAB 6: TECH STACK */}
            <TabsContent value="stack" className="space-y-6">
              <motion.div {...fadeInUp} key="stack" variants={stagger}>
                {TECH_STACK.map((category) => (
                  <Card key={category.category}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {category.items.map((item) => (
                          <a
                            key={item.name}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-sm">{item.name}</h4>
                              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <h3 className="font-bold">{t('cta.exploreCode')}</h3>
                        <p className="text-sm text-muted-foreground">
                          {t('cta.ctaDesc')}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" asChild>
                          <Link to="/docs/tecnico">{t('cta.viewDocs')}</Link>
                        </Button>
                        <Button asChild>
                          <Link to="/auth">{t('tryDemo')}</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </main>
      <FundingFooter variant="light" showTransparency={false} />
    </div>
  );
}
