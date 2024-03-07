//exp-1
document.getElementById("submit-1").addEventListener("click", function (e) {
  e.preventDefault();
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "ajax-text.txt", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("text").innerHTML = this.responseText;
    }
  };
});

//exp-2
document.getElementById("submit-2").addEventListener("click", function (e) {
  e.preventDefault();
  var tableData_1 = "<tr><th>Model Number</th><th>Name</th><th>Price</th></tr>";
  const xhttp_1 = new XMLHttpRequest();
  xhttp_1.open("GET", "table-data.json");
  xhttp_1.send();
  xhttp_1.onload = function () {
    data = JSON.parse(this.responseText);
    for (let i = 0; i < data.length; i++) {
      const { model_no, name, price } = data[i];
      tableData_1 +=
        "<tr><td>" +
        model_no +
        "</td><td>" +
        name +
        "</td><td>" +
        price +
        "</td></tr>";
    }
    document.getElementById("table--1").innerHTML = tableData_1;
  };
});

//exp-3
document.getElementById("submit-3").addEventListener("click", function (e) {
  e.preventDefault();
  var tableData = "<tr><th>Model Car</th><th>Mobile</th><th>book</th></tr>";

  const xhttp_2 = new XMLHttpRequest();
  xhttp_2.open("GET", "ajax-text.xml", true);
  xhttp_2.send();
  xhttp_2.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = this.responseXML.getElementsByTagName("item");
      for (let i = 0; i < data.length; i++) {
        tableData +=
          "<tr><td>" +
          data[i].getElementsByTagName("car")[0].childNodes[0].nodeValue +
          "</td><td>" +
          data[i].getElementsByTagName("mobile")[0].childNodes[0].nodeValue +
          "</td><td>" +
          data[i].getElementsByTagName("book")[0].childNodes[0].nodeValue +
          "</td></tr>";
      }
      document.getElementById("table--2").innerHTML = tableData;
    }
  };
});
