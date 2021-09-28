export function isSpecial(character: string): boolean {
  const special = ['!', '?'];
  return special.includes(character);
}