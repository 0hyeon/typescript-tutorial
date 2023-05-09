function helloArray<T>(message: T[]): T {
  //T[] 배열로받겠다.
  return message[0];
}
helloArray(["hello", "wolrd"]);
helloArray(["hello", 55]); //T가 string | number 으로 유추

function helloTuple<T, U>(message: [T, U]): T {
  return message[0];
}

helloTuple(["hello", "hello"]);
helloTuple(["hello", 5]);
