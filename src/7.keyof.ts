interface IPerson {
  name: string;
  age: number;
}
const person: IPerson = {
  name: "Mark",
  age: 29,
};

//key의 타입과 return 타입의 관계를 가져야 한다.
type Keys = keyof IPerson;
const keys: Keys = "name";

function getProp(obj: IPerson, key: "name" | "age"): string | number {
  return obj[key];
}
//IPerson[keyof IPerson]
//=> IPerson["name"|"age"]
//=> IPerson["name"] | IPerson["age"]
//=> string | name
function getProp2(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
  return obj[key];
}
//extends => name,age로 제한
function getProp3<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
//두번째인자는 무조건 person의 키값 = K extends keyof T
getProp3(person, "age");

function setProp(
  obj: IPerson,
  key: "name" | "age",
  value: string | number
): void {
  obj[key] = value; //name 이면 타입이 string | number 둘다가능 그래서 에러
}
function setProp2(
  obj: IPerson,
  key: keyof IPerson,
  value: string | number //TypeScript에서 유니온 타입(Union Type)은 둘 이상의 타입을 합쳐서 사용하는 방법
): void {
  obj[key] = value; //name 이면 타입이 string | number 둘다가능 그래서 에러 유니온타입은 안됨
}
function setProp3<T, K extends keyof T>(
  obj: T,
  key: keyof T,
  value: T[keyof T]
): void {
  obj[key] = value; //유니온 타입이 아니기 때문에 에러가안남
}
function setProp4<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value; //name 이면 타입이 string | number 둘다가능 그래서 에러
}
//setProp4(person, "name", 39); //error
setProp4(person, "name", "Anna");
setProp4(person, "age", 27);
