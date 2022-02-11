const getInnerHtmlValue = (id) => {
  return document.getElementById(id).innerHTML;
};

console.log(getInnerHtmlValue("div-id"));
