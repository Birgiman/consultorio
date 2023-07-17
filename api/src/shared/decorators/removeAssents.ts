export function removeAccents(...data: string[]): string[] {
  return data.map((str) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
  );
}
