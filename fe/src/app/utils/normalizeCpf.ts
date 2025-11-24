export function normalizeCpf(cpf: string): string {
  return cpf.replace(/[.\-\s]/g, '');
}

export function formatCpf(cpf: string): string {
  const cleaned = normalizeCpf(cpf);

  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}.${cleaned.slice(3)}`;
  if (cleaned.length <= 9) return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6)}`;

  return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6, 9)}-${cleaned.slice(9, 11)}`;
}

export function isValidCpf(cpf: string): boolean {
  const cleaned = normalizeCpf(cpf);

  // CPF deve ter exatamente 11 dígitos
  if (cleaned.length !== 11 || /^\d+$/.test(cleaned) === false) return false;

  // Não aceita CPF com todos os dígitos iguais
  if (/^(\d)\1{10}$/.test(cleaned)) return false;

  // Calcula primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleaned[i]) * (10 - i);
  }

  let remainder = sum % 11;
  const firstDigit = remainder < 2 ? 0 : 11 - remainder;

  if (parseInt(cleaned[9]) !== firstDigit) return false;

  // Calcula segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleaned[i]) * (11 - i);
  }

  remainder = sum % 11;
  const secondDigit = remainder < 2 ? 0 : 11 - remainder;

  return parseInt(cleaned[10]) === secondDigit;
}
