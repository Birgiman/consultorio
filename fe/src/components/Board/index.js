import {
  Calendar, CalendarContent, Container, Title,
} from './styles';

export default function Board() {
  return (
    <Container>
      <Title>Gerenciar pacientes</Title>
      <Calendar>
        <CalendarContent>
          <strong className="data">16/05/2000</strong>
          <div className="cabecalho">
            <div className="hora">Hora</div>
            <div className="nome">Nome</div>
            <div className="tipo">Tipo</div>
          </div>
          <div className="pacientes">
            <p>14:00H - Nome do paciente - Acupuntura</p>
            <p>14:30H - Nome do paciente - Acupuntura</p>
            <p>15:00H - Nome do paciente - Acupuntura</p>
            <p>15:30H - Nome do paciente - Acupuntura</p>
            <p>16:00H - Nome do paciente - Acupuntura</p>
            <p>16:30H - Nome do paciente - Acupuntura</p>
            <p>17:00H - Nome do paciente - Acupuntura</p>
            <p>17:30H - Nome do paciente - Acupuntura</p>
            <p>18:00H - Nome do paciente - Acupuntura</p>
            <p>18:30H - Nome do paciente - Acupuntura</p>
            <p>19:00H - Nome do paciente - Acupuntura</p>
            <p>19:30H - Nome do paciente - Acupuntura</p>
          </div>
        </CalendarContent>
      </Calendar>
    </Container>
  );
}
