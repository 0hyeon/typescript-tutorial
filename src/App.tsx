import React, { FormEvent, useState } from 'react';
import Circle from './Circle';
import styled from 'styled-components'

function App() {
  const [value, setValue] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget : {value}} = event;
    setValue(value);
  }
  const onSubmit = (event :React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello",value);
    
  } 

  const Container = styled.div`
    background-color: ${props => props.theme.bgColor}
  `;
  const H1 = styled.h1`
    color: ${props => props.theme.textColor}
  `;
  interface DummyProps {
    text:string;
    active?:boolean;
  }

  function Dummy ({text,active = false} : DummyProps){
    return <H1>{text}</H1>
  }
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) =>{
    console.log(event);
  }
  return( 
    <div>
      {/* <Circle bgColor="teal" borderColor="yellow"/>
      <Circle text="im here" bgColor="tomato"/> */}
      {/* <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder='username' / >
        <button>Log in</button>
      </form> */}
      <Container>
        <H1>protected</H1>
        <Dummy active text="hello"></Dummy>
        <button onClick={onClick}>Click me</button>
      </Container>
    </div>
  )
}

export default App;
