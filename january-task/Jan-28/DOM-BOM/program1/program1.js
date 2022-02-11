//The table with id="age-table".
document.getElementById("age-table");

// All label elements inside that table (there should be 3 of them).
document.getElementsByTagName("label");

// The first td in that table (with the word “Age”).
let tdElements = document.getElementsByTagName("td");
let tdElementsLength = document.getElementsByTagName("td").length;
let resultElement;
for (let i = 0; i < tdElementsLength; i++) {
    if (tdElements[i].innerHTML === "Age") {
        resultElement = tdElements[i];
    }
}
resultElement; //return ->  <td>Age</td>

// The form with name="search".
document.getElementsByName('search')[0]

// The first input in that form.
document.getElementsByTagName("input")[0]

// The last input in that form.
let inputElementLength = document.getElementsByTagName("input").length;
document.getElementsByTagName("input")[inputElementLength - 1]
