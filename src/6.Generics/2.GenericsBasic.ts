function helloBasic<T>(message: T): T {
  return message;
}
helloBasic<string>("hello");
//helloBasic<string>(13); //error
