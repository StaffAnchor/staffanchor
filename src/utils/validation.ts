// A mobile number is accepted when, ignoring spaces, dashes, brackets and a
// leading "+", it has 10 to 13 digits (10-digit Indian numbers, or with a
// 91 / 0 prefix, or another country's number). Deliberately loose on format,
// strict on "this is actually a number someone can call".
export function isValidMobile(value: string): boolean {
  const digits = value.replace(/[\s\-()+.]/g, '');
  return /^\d{10,13}$/.test(digits);
}

export const MOBILE_ERROR = 'Please enter a valid mobile number (at least 10 digits) so we can reach you.';
