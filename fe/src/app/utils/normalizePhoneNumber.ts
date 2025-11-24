export function normalizePhoneNumber(phone: string): string {
  // Remove tudo exceto números e o símbolo +
  const cleaned = phone.replace(/[^\d+]/g, '');

  if (!cleaned.startsWith('+')) {
    return `+55${cleaned}`;
  }

  return cleaned;
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = normalizePhoneNumber(phone);

  const withoutCountryCode = cleaned.replace('+55', '');

  if (withoutCountryCode.length <= 2) return `+55 (${withoutCountryCode}`;
  if (withoutCountryCode.length <= 7) return `+55 (${withoutCountryCode.slice(0, 2)}) ${withoutCountryCode.slice(2)}`;

  return `+55 (${withoutCountryCode.slice(0, 2)}) ${withoutCountryCode.slice(2, 7)}-${withoutCountryCode.slice(7, 11)}`;
}
