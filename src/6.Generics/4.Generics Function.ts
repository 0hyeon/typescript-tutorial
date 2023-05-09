type HelloFunctionGeneric1 = <T>(mesagge: T) => T;
const helloFunction1: HelloFunctionGeneric1 = <T>(mesagge: T): T => {
  return mesagge;
};

helloFunction1("hello");
interface HelloFunctionGeneric2 {
  <T>(message: T): T;
}

const helloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
  return message;
};

function helloTuple2<T, U>(message: [T, U]): T {
  return message[0];
}
helloTuple2(["hello", "hello"]);
