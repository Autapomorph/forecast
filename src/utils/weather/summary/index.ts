import sentenceCase from 'utils/common/sentenceCase';
import removeLastPeriod from 'utils/common/removeLastPeriod';

export default function normalize(str: string): string {
  let normalized = str.trim();
  normalized = sentenceCase(normalized);
  normalized = removeLastPeriod(normalized);
  normalized = normalized.trim();
  return normalized;
}
