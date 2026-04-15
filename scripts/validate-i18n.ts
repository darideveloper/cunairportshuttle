import fs from "node:fs";
import path from "node:path";

// Define messages directory
const messagesDir = path.resolve("src/messages");

const readMessages = (lang: string) => {
  const filePath = path.join(messagesDir, `${lang}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Message file not found: ${filePath}`);
    process.exit(1);
  }
  const content = fs.readFileSync(filePath, "utf-8");
  try {
    return JSON.parse(content);
  } catch (e) {
    console.error(`❌ Invalid JSON in ${filePath}`);
    process.exit(1);
  }
};

const flattenKeys = (obj: any, prefix = ""): string[] => {
  return Object.keys(obj).reduce((acc: string[], key: string) => {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      return [...acc, ...flattenKeys(value, newKey)];
    }
    return [...acc, newKey];
  }, []);
};

/**
 * Required keys that MUST exist in all translation files.
 * Add critical UI keys here to prevent production regressions.
 */
const REQUIRED_KEYS = [
  "pages.home.destinations.cards.tulum.imageAlt",
  "pages.home.destinations.cards.tulum.imageTitle",
  "pages.home.destinations.cards.playa.imageAlt",
  "pages.home.destinations.cards.playa.imageTitle",
  "pages.home.destinations.cards.cancun.imageAlt",
  "pages.home.destinations.cards.cancun.imageTitle",
];

const en = readMessages("en");
const es = readMessages("es");

const enKeys = new Set(flattenKeys(en));
const esKeys = new Set(flattenKeys(es));

let hasErrors = false;

// 1. Sync Check (English vs Spanish)
const missingInEs = [...enKeys].filter((k) => !esKeys.has(k));
const missingInEn = [...esKeys].filter((k) => !enKeys.has(k));

if (missingInEs.length > 0) {
  console.error("\n❌ Missing in es.json (present in en.json):");
  missingInEs.forEach((k) => console.error(`  - ${k}`));
  hasErrors = true;
}

if (missingInEn.length > 0) {
  console.error("\n❌ Missing in en.json (present in es.json):");
  missingInEn.forEach((k) => console.error(`  - ${k}`));
  hasErrors = true;
}

// 2. Mandatory Keys Check
const missingRequiredInEn = REQUIRED_KEYS.filter((k) => !enKeys.has(k));
const missingRequiredInEs = REQUIRED_KEYS.filter((k) => !esKeys.has(k));

if (missingRequiredInEn.length > 0) {
  console.error("\n❌ Missing REQUIRED keys in en.json:");
  missingRequiredInEn.forEach((k) => console.error(`  - ${k}`));
  hasErrors = true;
}

if (missingRequiredInEs.length > 0) {
  console.error("\n❌ Missing REQUIRED keys in es.json:");
  missingRequiredInEs.forEach((k) => console.error(`  - ${k}`));
  hasErrors = true;
}

if (hasErrors) {
  console.error("\n❌ i18n validation failed! Please fix the errors above.");
  process.exit(1);
}

console.log("✅ i18n validation passed!");
