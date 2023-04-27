//어떤 타입도 있지않은 undifined return 타입
function returnVoid(message: string): void {
  console.log(message);
  //return ; 아무것도 안쓰거나 undefined만이 void에 할당가능
  return undefined;
}

const r = returnVoid("아무타입도없다");
console.log(typeof r);
