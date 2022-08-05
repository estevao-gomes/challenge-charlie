import { useState } from 'react';
import { StyledApp, StyledContainer } from './style.js'
import { Header, TodayInfo, FutureInfo } from './components'

function App() {
  //Estado que controla qual o tipo de temperatura está sendo exibido (°C ou °F)
  const [tipoTemperatura, setTipoTemperatura] = useState(true);
  const bg_path = "./src/assets/bg.jpg";

  //Função para trocar o tipo de temperatura exibido quando as temperaturas são clicadas.
  function handleAlteraTipoTemp(){
    setTipoTemperatura((tipoTemperatura)=>{
      return !tipoTemperatura
    })
  }

  return (
    <StyledApp bg={bg_path}>
      <StyledContainer>
        <Header/>
        <TodayInfo tipoTemperatura = {tipoTemperatura} alteraTipoTemp = {handleAlteraTipoTemp}/>
        <FutureInfo tipoTemperatura = {tipoTemperatura} alteraTipoTemp = {handleAlteraTipoTemp}/>
      </StyledContainer>
    </StyledApp>
  )
}

export default App
