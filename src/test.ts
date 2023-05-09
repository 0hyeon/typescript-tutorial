function emailFn(string: string) {
  return string;
}
function emailNumber(Number: number) {
  return Number;
}
function anywat(result: any) {
  return result;
}
function genericFn<T>(result: T): T {
  return result;
}
genericFn("hello");
genericFn(1);
