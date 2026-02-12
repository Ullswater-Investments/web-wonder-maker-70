const STORAGE_KEY = "procuredata_chat_strikes";

interface GuardResult {
  allowed: boolean;
  warning?: string;
  blocked?: boolean;
  strikes: number;
  reason?: "injection" | "extraction" | "spam" | "tooLong" | "offensive" | "blocked";
}

// Multilingual prompt injection patterns
const INJECTION_PATTERNS = [
  // English
  /ignore\s+(all\s+)?previous\s+(instructions|prompts|rules)/i,
  /forget\s+(all\s+)?(your\s+)?(instructions|prompts|rules|previous)/i,
  /you\s+are\s+now\s+/i,
  /act\s+as\s+(a\s+)?/i,
  /pretend\s+(you\s+are|to\s+be)/i,
  /from\s+now\s+on\s+you/i,
  /new\s+instructions?\s*:/i,
  /override\s+(your\s+)?(system|instructions|rules)/i,
  /disregard\s+(all\s+)?(previous|your)/i,
  /jailbreak/i,
  /do\s+anything\s+now/i,
  /\bDAN\b/,
  // Spanish
  /ignora\s+(todas?\s+)?(las\s+)?instrucciones/i,
  /olvida\s+(tu|tus|el)\s+(prompt|instrucciones|reglas)/i,
  /act[uú]a\s+como\s+/i,
  /a\s+partir\s+de\s+ahora\s+(eres|act[uú]a)/i,
  /nuevas?\s+instrucciones?\s*:/i,
  /finge\s+que\s+(eres|ser)/i,
  // French
  /oublie\s+(tes?|les?|toutes?)\s+(instructions|r[eè]gles)/i,
  /ignore\s+(tes?|les?)\s+instructions/i,
  /tu\s+es\s+maintenant\s+/i,
  /agis\s+comme\s+/i,
  // German
  /vergiss\s+(alle\s+)?(deine\s+)?(anweisungen|regeln)/i,
  /ignoriere\s+(alle\s+)?(deine\s+)?anweisungen/i,
  /du\s+bist\s+jetzt\s+/i,
  /handle\s+als\s+/i,
  // Italian
  /dimentica\s+(le\s+)?(tue\s+)?istruzioni/i,
  /ignora\s+(le\s+)?(tue\s+)?istruzioni/i,
  /ora\s+sei\s+/i,
  // Portuguese
  /esque[cç]a\s+(as\s+)?(suas\s+)?instru[çc][oõ]es/i,
  /ignore\s+(as\s+)?(suas\s+)?instru[çc][oõ]es/i,
  /agora\s+voc[eê]\s+[eé]\s+/i,
  // Dutch
  /vergeet\s+(al\s+)?(je\s+)?instructies/i,
  /negeer\s+(al\s+)?(je\s+)?instructies/i,
  /je\s+bent\s+nu\s+/i,
  // Generic markers
  /^system\s*:/im,
  /\[system\]/i,
  /\<\/?system\>/i,
];

// Prompt extraction patterns
const EXTRACTION_PATTERNS = [
  /repite\s+(tus\s+)?instrucciones/i,
  /mu[eé]strame\s+(tu\s+)?prompt/i,
  /cu[aá]l\s+es\s+tu\s+prompt/i,
  /show\s+(me\s+)?(your\s+)?(system\s+)?prompt/i,
  /what\s+are\s+your\s+(instructions|rules)/i,
  /repeat\s+(your\s+)?(system\s+)?instructions/i,
  /print\s+(your\s+)?(system\s+)?prompt/i,
  /dump\s+(your\s+)?(system\s+)?prompt/i,
  /reveal\s+(your\s+)?(system\s+)?prompt/i,
  /montre\s+(moi\s+)?(tes?\s+)?instructions/i,
  /quel(les?)?\s+(sont\s+)?(tes?\s+)?instructions/i,
  /mostra(mi)?\s+(le\s+)?(tue\s+)?istruzioni/i,
  /zeig\s+(mir\s+)?(deine\s+)?anweisungen/i,
  /mostre\s+(suas?\s+)?instru[çc][oõ]es/i,
  /toon\s+(je\s+)?instructies/i,
];

// Spam detection: only special characters/emojis
const SPAM_ONLY_SYMBOLS = /^[\s\p{P}\p{S}\p{Emoji}]+$/u;

const MAX_LENGTH = 2000;

let lastMessage = "";

function getStrikes(): number {
  try {
    return parseInt(sessionStorage.getItem(STORAGE_KEY) || "0", 10);
  } catch {
    return 0;
  }
}

function setStrikes(count: number): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, String(count));
  } catch {
    // sessionStorage unavailable
  }
}

export function checkMessage(message: string): GuardResult {
  const strikes = getStrikes();

  // Already blocked
  if (strikes >= 3) {
    return { allowed: false, blocked: true, strikes, reason: "blocked" };
  }

  const trimmed = message.trim();

  // Too short
  if (trimmed.length < 2) {
    return { allowed: false, strikes, reason: "spam", warning: "tooShort" };
  }

  // Too long
  if (trimmed.length > MAX_LENGTH) {
    return { allowed: false, strikes, reason: "tooLong" };
  }

  // Spam: identical to last message
  if (trimmed === lastMessage && lastMessage.length > 0) {
    const newStrikes = strikes + 1;
    setStrikes(newStrikes);
    return {
      allowed: false,
      strikes: newStrikes,
      reason: "spam",
      blocked: newStrikes >= 3,
    };
  }

  // Spam: only symbols/emojis
  if (SPAM_ONLY_SYMBOLS.test(trimmed) && trimmed.length > 3) {
    const newStrikes = strikes + 1;
    setStrikes(newStrikes);
    return {
      allowed: false,
      strikes: newStrikes,
      reason: "spam",
      blocked: newStrikes >= 3,
    };
  }

  // Prompt injection
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(trimmed)) {
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);
      return {
        allowed: false,
        strikes: newStrikes,
        reason: "injection",
        blocked: newStrikes >= 3,
      };
    }
  }

  // Prompt extraction
  for (const pattern of EXTRACTION_PATTERNS) {
    if (pattern.test(trimmed)) {
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);
      return {
        allowed: false,
        strikes: newStrikes,
        reason: "extraction",
        blocked: newStrikes >= 3,
      };
    }
  }

  // All good
  lastMessage = trimmed;
  return { allowed: true, strikes };
}

export function isBlocked(): boolean {
  return getStrikes() >= 3;
}

export function getWarningKey(result: GuardResult): string | null {
  if (result.blocked) return "guard.blocked";
  if (!result.allowed) {
    if (result.reason === "tooLong") return "guard.tooLong";
    if (result.strikes === 1) return "guard.warning1";
    if (result.strikes === 2) return "guard.warning2";
    if (result.strikes >= 3) return "guard.blocked";
    return "guard.invalidContent";
  }
  return null;
}
