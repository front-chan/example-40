const allBtn = document.querySelector(".all-btn");
const shoesBtn = document.querySelector(".shoes-btn");
const dietBtn = document.querySelector(".diet-btn");
const productsBoxShoes = document.getElementById("products-box-shoes");
const productsBoxDiet = document.getElementById("products-box-diet");

allBtn.addEventListener("click", () => {
  productsBoxShoes.style.display = "flex";
  productsBoxDiet.style.display = "flex";
});
shoesBtn.addEventListener("click", () => {
  productsBoxShoes.style.display = "flex";
  productsBoxDiet.style.display = "none";
});
dietBtn.addEventListener("click", () => {
  productsBoxShoes.style.display = "none";
  productsBoxDiet.style.display = "flex";
});
