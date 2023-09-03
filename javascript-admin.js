const aside = document.querySelector("aside");

aside.addEventListener("click", (e) => {
  //   console.log("gggg");
  //   console.log(e.target.closest());
  console.log(e.target.closest(".choice"));
  if (e.target.closest(".choice")) {
    document.querySelectorAll(".choice").forEach((item) => {
      item.classList.remove("choosed");
    });
    e.target.closest(".choice").classList.add("choosed");
  }
  if (e.target.closest(".sub")) {
    document.querySelector(".sub-nav").classList.toggle("opened");
  }
});
