//function to open a new window
const openWindow = () => {
  window.open(
    document.URL,
    "_blank",
    "location=yes,height=570,width=520,scrollbars=yes,status=yes"
  );
};

//function to close a windows
const closeWindow = () => {
  window.close();
};

//function to resize window
const resizeWindow = () => {
  window.resizeTo(300, 300);
};

//function to show innerHeight, innerWidth, outerHeight, outerWidth
const getHeightAndWidth = () => {
  let getResult = `The innerHeight -> ${window.innerWidth}. \n The innerHeight -> ${window.innerHeight}. \n The outerHeight is ${window.outerHeight}. \n The outerWidth is ${window.outerWidth}.`;
  // alert(getResult);
  document.getElementById("dimentions").innerHTML = getResult;
};
