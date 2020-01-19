export default function removeLastPeriod(str: string): string {
  return str[str.length - 1] === '.' ? str.slice(0, -1) : str;
}
