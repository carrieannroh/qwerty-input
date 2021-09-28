import { hasAVowel } from "../utils/hasAVowel"
import { hasSpecial } from "../utils/hasSpecial";

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({ wordToDescribe }: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match('q');
  const hasSpecialCharacter = hasSpecial(wordToDescribe)

  return (
    <ul>
      {/* if the condition to the left of && is true, the li element is displayed. we check if its true based on what the function with param passed in does */}
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {hasSpecialCharacter && <li>Contains a special character</li>}

    </ul>
  )
}

export default WordDescription