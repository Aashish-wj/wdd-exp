searchEl = document.getElementsByClassName("search");
pathaanSectionEl = document.getElementById("pathaan-song");
console.log(searchEl.innerHTML);
if (searchEl.innerHTML === "pathaan") {
  document.classList.toggle("hide");
  document.classList.toggle("visible");
}
