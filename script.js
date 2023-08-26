const popUp = document.querySelector(".overlay");

const checkBox = document.getElementById("terms");

checkBox.addEventListener("change", (e) => {
  if (checkBox.checked) {
    popUp.style.display = "block";
  }
});

document.querySelector(".hide").addEventListener("click", (e) => {
  popUp.style.display = "none";
  console.log("true");
});
