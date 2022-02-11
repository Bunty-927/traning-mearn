function add() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;
  let res = parseInt(n1) + parseInt(n2);
  console.log(res);
  alert(`The result is ${res}`);
}
