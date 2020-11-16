import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';

//themes
import light from './styles/themes/light'
import dark from './styles/themes/dark'

//Importando o estilo global
import GlobalStyle from './styles/globals'

import { Container } from './style'

function App() {
  //Controla qual tema está sendo utilizado dinâmicamente
  const [theme, setTheme] = useState(light)

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Menu onChange={
          checked => {
            //Se o switch for marcado aplica o tema dark caso contrário light
            setTheme(checked ? dark : light)
          }
        } />
        <h1>Home</h1>
      </Container>
    </ThemeProvider>


  )
}

export default App;
