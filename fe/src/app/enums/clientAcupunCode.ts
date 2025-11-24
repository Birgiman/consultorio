export enum ClientAcupunCode {
  SESSAO = 'SESSAO',
  ELETRICA = 'ELETRICA',
}

export const ACUPUN_CODE_LABELS: Record<ClientAcupunCode, string> = {
  [ClientAcupunCode.SESSAO]: 'Sessão',
  [ClientAcupunCode.ELETRICA]: 'Elétrica',
};
