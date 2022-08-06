import React, { useState } from 'react'
import styled from 'styled-components'


//받은걸 보냄

//Containier bgColor속성의 타입을 알려줘야함
const Containier = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${props=>props.bgColor};
  border-radius: 100px;
  border:1px solid ${props=>props.borderColor}
`;
const H1 = styled.h1`
    color: ${props => props.theme.textColor}
`;

//Circle받음 그리고 Containier에 보냄
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?:string;
}

function Circle( {bgColor, borderColor,text="default text"}: CircleProps) {
  const [value,setValue] = useState<number | string>(1);//1을 추론으로 typescript가 counter, setCounter가 number인껄 앎.
  setValue(2);
  setValue("2");
  return (
    <Containier bgColor={bgColor} borderColor={borderColor ?? bgColor}> 
    {text}
    </Containier>
  )
}

export default Circle