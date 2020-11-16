import React, { useEffect, useState } from 'react';

//Importando o arquivo de estilização
import { Container } from './styles'

//Importando switch
import Switch from 'react-switch'

interface IProps {
  onChange: (checked: boolean) => void //Propriedade de onChange que o componente vai receber
}

const Menu: React.FC<IProps> = ({ onChange }) => {

  //States
  const [check, setCheck] = useState(false);

  const toggleSwitch = () => {
    let newValue = !check;
    setCheck(newValue); //Atualiza o state do Switch
    onChange(newValue); //Manda a informação para a página home
  }

  return (
    <Container>
      <h3>Tutorial de Temas com React</h3>
      <Switch
        onChange={toggleSwitch}
        checked={check}
      />
    </Container>
  );
}

export default Menu;