//never는 return에 사용
function error(message: string): never {
  throw new Error(message); //throw 외 아무것도 리턴하지 않는다.
}
function fail(message: string) {
  return error("failed");
}

//무한반복일때도 아무것도 반환하지 않는 never를 사용
//any조차 never에 사용할수없다.
//잘못된 타입을 넣는 실수를 막고자할때 사용
function infinite(): never {
  while (true) {}
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

//const b: Indexable<{}> = "";
