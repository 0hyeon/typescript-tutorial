class PersonExtends<T extends string | number> {
  //제약을 걸어주는게 좋다.
  private _name: T;
  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("Mark");
new PersonExtends(30);
//new PersonExtends(true);
