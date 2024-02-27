const nameEl = document.getElementById("name");
const buttonEl = document.getElementById("button");

function alphabets(str) {
  for (const char in str) {
    if (!(char >= "a" && char <= "z") && !(char >= "A" && char <= "Z")) {
      return false;
    }
  }
  return true;
}
console.log(nameEl);
console.log("hello");
buttonEl.addEventListener(onsubmit, (e) => {
  e.preventDefault();
  var alphaCheck = alphabets(nameEl.innerHTML);
  console.log(nameEl.innerHTML);
  if (!nameEl.innerHTML.length() > 6 && !alphaCheck) {
    alert("name error");
  }
});
