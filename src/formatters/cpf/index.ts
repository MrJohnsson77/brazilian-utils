import { isLastChar, onlyNumbers } from '../../helpers';

/**
 * Length of a valid CPF
 */
export const LENGTH = 11;

/**
 * Dot positions in a formatted CPF
 */
export const DOT_INDEXES = [2, 5];

/**
 * Hyphen position in a formatted CPF
 */
export const HYPHEN_INDEXES = [8];

/**
 * Formats the given string with a CPF mask
 *
 * @param {string} str
 * @returns {string}
 */
export default function format(str: string): string {
  if (!str) return '';

  const numeric = onlyNumbers(str);

  return numeric
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, numeric)) {
        if (DOT_INDEXES.includes(index)) return `${result}.`;
        if (HYPHEN_INDEXES.includes(index)) return `${result}-`;
      }

      return result;
    }, '');
}
