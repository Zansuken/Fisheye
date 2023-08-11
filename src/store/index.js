var obj = {
  value: "",
  letMeKnow() {
    console.log(`The variable has changed to ${this.testVar}`);
  },
  get testVar() {
    return this.value;
  },
  set testVar(value) {
    this.value = value;
    this.letMeKnow();
  },
};

console.log(obj.testVar);

obj.testVar = 5;
console.log(obj.testVar);

obj.testVar = 15;
console.log(obj.testVar);
