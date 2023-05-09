console.log("generics1");

function helloString(message: string): string {
  return message;
}
function helloNumber(message: number): number {
  return message;
}
//더많은 반복된 함수들...

//이것을 막고자 any를 사용..
function anyFn(msg: any): any {
  return msg;
}
//any 사용하면 ?
console.log(anyFn("hello").length);
console.log(anyFn(39).length); //undifined 숫자형엔 length를 사용할수없기때문

function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric("Mark").length);
//console.log(helloGeneric(39).length); //helloGeneric 안에 39가 type으로 되어 사용할수없음.
console.log(helloGeneric(true));
