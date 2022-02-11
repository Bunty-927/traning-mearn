const write = (value) => {
  return document.write(`<p>${value}</p>`);
};

const getElementById = (value) => {
  return document.getElementById(value);
};

const getElementsByName = (value) => {
  return document.getElementsByName(value);
};

const getElementsByTagName = (value) => {
  return document.getElementsByTagName(value);
};

const getElementsByClassName = (value) => {
  return document.getElementsByClassName(value);
};

console.log(getElementById("div-id"));
console.log(getElementsByName("div-name")[0]);
console.log(getElementsByTagName("section")[0]);
console.log(getElementsByClassName("div-class")[0]);
