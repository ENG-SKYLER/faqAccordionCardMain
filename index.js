const boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach((bo) => {
  const queBoxes = bo.querySelector(".que");
  queBoxes.addEventListener("click", () => {
    bo.classList.toggle("click");
  });
});
