import { StyledSection } from './style';

export function TodayInfo() {
  return (
    <StyledSection>
      <img
        src="../../assets/icons/1.svg"
        alt="Ícone representando clima do dia."
      />
      <div id="infoSection">
        <p>Hoje</p>
        <div id="tempSection">
            <div id="temperature">
            <p>Agora</p>
            <p>30°C</p>
            </div>
            <div id="temperature">
            <p>Min.</p>
            <p>30°C</p>
            </div>
            <div id="temperature">
            <p>Máx.</p>
            <p>30°C</p>
            </div>
        </div>
        <p>Ensolarado</p>
        <p>Vento: NO 6.4km/h</p>
        <p>Humidade: 78%</p>
        <p>Pressão: 1003hPa</p>
      </div>
    </StyledSection>
  );
}
