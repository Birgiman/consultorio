import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary.light};

  width: 800px;
  height: 600px;
  padding: 24px;
`;

export const Title = styled.div`
  margin-bottom: 36px;
  font-size: 32px;
  padding: 8px 16px;
`;

export const Calendar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary.lighter};

  width: 100%;
  height: 100%;
`;

export const CalendarContent = styled.div`

  display: flex;
  flex-direction: column;

  padding: 4px 16px;

  width: 100%;
  height: 100%;

  strong {
    margin: 8px 0;
    font-size: 24px;
  }

  .cabecalho {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 8px;
  }

  .pacientes {
    margin-top: 8px;
  }
`;
