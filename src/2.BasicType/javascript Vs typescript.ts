//TS => Static type 개발하는 중간에 타입을 체크
//JS => Dynamic type 개발할땐 알수가없고 런타임에 돌입해야만 에러확인

//javascript
function add(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("에러!");
  }
  return n1 + n2;
}
const result = add(39, 20);

//typescript
function add2(n1: number, n2: number) {
  return n1 + n2;
}
const result2 = add2(19, 10);
