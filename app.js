const popup = document.querySelector(".popup");
const show = document.querySelector(".show__popup");
const hide = document.querySelector(".hide__popup");

show.addEventListener("click", () => {
  popup.classList.toggle("hidden");
});

hide.addEventListener("click", () => {
  popup.classList.add("hidden");
});
