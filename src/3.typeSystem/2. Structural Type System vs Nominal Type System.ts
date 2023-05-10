//Structural Type System => 타입스크립트

import { type } from "os";
import { Interface } from "readline";

//타입스크립트 에서는 구조가 같으면 같은타입이다.
interface IPerson {
  name: string;
  age: number;
  speak(): string;
}
type PersonType = {
  name: string;
  age: number;
  speak(): string;
};
let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;

//Nominal Type System - 구조 같아도 이름이 다르면, 다른 타입이다. (c++)
type PersonID = string & { readonly brand: unique symbol };
function PersonID(id: string): PersonID {
  return id as PersonID;
}
function getPersonById(id: PersonID) {}
getPersonById(PersonID("id-aaaaa"));
getPersonById("id-aaaaa"); //error
