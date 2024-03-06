const xhttp = new XMLHttpRequest();
xhttp.open("GET", "ajax-text.txt");
xhttp.send();

xhttp.onload = function () {
  document.querySelector("#text").innerHTML = this.responseText;
};
const xhttp_1 = new XMLHttpRequest();
xhttp_1.open("GET", "table-data.json");
xhttp_1.send();
xhttp_1.onload = function () {
  const data = JSON.parse(this.responseText);

  const { model_no, name, price } = data[0];
  var addText =
    "<tr><td>" +
    model_no +
    "</td><td>" +
    name +
    "</td><td>" +
    price +
    "</td></tr>";
  console.log(addText);
  document.querySelector("table").append(addText);
};
