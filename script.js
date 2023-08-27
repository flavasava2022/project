const popUp = document.querySelector(".overlay");

const checkBox = document.getElementById("terms");

checkBox.addEventListener("change", (e) => {
  if (checkBox.checked) {
    popUp.style.display = "block";
    document.body.style.overflow = "hidden";
    let hieght = window.scrollY + 80;
    document.querySelector(".terms").style.top = `${hieght}px`;
  }
});

document.querySelector(".hide").addEventListener("click", (e) => {
  popUp.style.display = "none";
  document.body.style.overflow = "unset";
});
