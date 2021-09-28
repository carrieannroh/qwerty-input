import { isSpecial } from "./isSpecial";

export function hasSpecial(word: string): boolean {
  for (const character of word) {
    if (isSpecial(character)) {
      return true
    }
  }
  return false
}