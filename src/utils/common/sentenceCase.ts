/**
 * Matches any single letter:
 * 1. at the beginning of the string
 * 2. after period followed by 0 or more whitespace characters
 * using Unicode property escapes
 */
const rg = /(^\p{L}{1}|\.\s*\p{L}{1})/giu;

export default function sentenceCase(str: string): string {
  return str.toLowerCase().replace(rg, newSubStr => newSubStr.toUpperCase());
}
