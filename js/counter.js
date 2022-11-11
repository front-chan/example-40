const decreaseBtn = document.querySelector(".decrease-btn");
const resetBtn = document.querySelector(".reset-btn");
const increaseBtn = document.querySelector(".increase-btn");
const counterText = document.querySelector(".counter-text");

// let counter = 0;

decreaseBtn.addEventListener("click", () => {
  let counter = parseInt(counterText.innerText);
  counter -= 1;
  counterText.innerText = counter;
  if (counter < 0) {
    counterText.classList.add("counter-red");
    counterText.classList.remove("counter-green");
  } else if (counter === 0) {
    counterText.classList.remove("counter-red");
    counterText.classList.remove("counter-green");
  }
});

resetBtn.addEventListener("click", () => {
  let counter = parseInt(counterText.innerText);
  counter = 0;
  counterText.innerText = counter;
  if (counter === 0) {
    counterText.classList.remove("counter-red");
    counterText.classList.remove("counter-green");
  }
});

increaseBtn.addEventListener("click", () => {
  let counter = parseInt(counterText.innerText);
  counter += 1;
  counterText.innerText = counter;
  if (counter > 0) {
    counterText.classList.add("counter-green");
    counterText.classList.remove("counter-red");
  } else if (counter === 0) {
    counterText.classList.remove("counter-red");
    counterText.classList.remove("counter-green");
  }
});

/*
decreaseBtn.addEventListener("click", () => {
  //   console.log("descrease");
  //   let counterMinus = --counter;
  //   counterText.textContent = counterMinus;
  //   let counter = counterText.innerText;
  counterText.innerText = parseInt(counter--);
  if (counter <= 0) {
    counterText.classList.add("counter-red");
    counterText.classList.remove("counter-green");
  } else if (counter === 0) {
    counterText.classList.remove("counter-red");
  }

  //   if (counter === 0) {
  //     counterText.classList.remove("counter-red");
  //   }
});
resetBtn.addEventListener("click", () => {
  //   console.log("reset");
  counterText.innerText = parseInt(counter);
  if (counter === 0) {
    counterText.classList.remove("counter-red");
    counterText.classList.remove("counter-green");
  }
});

increaseBtn.addEventListener("click", () => {
  //   console.log("inscrease");
  //   let counterPlus = counter++;
  //   counterText.textContent = counterPlus;
  //   counterText.innerText = parseInt(counter + 1);
  //   let counter = counterText.innerText;
  counterText.innerText = parseInt(counter++);
  if (counter >= 0) {
    counterText.classList.remove("counter-red");
    counterText.classList.add("counter-green");
  } else if (counter < 0) {
    counterText.classList.remove("counter-green");
  }
  //   counterText.classList.add("counter-green");
  //   if (counter > 0) {
  //     counterText.classList.add("counter-green");
  //     counterText.classList.remove("counter-red");
  //   } else if (counter === 0) {
  //     counterText.classList.remove("counter-green");
  //     counterText.classList.remove("counter-red");
  //   } else {
  //     counterText.classList.remove("counter-green");
  //   }
});

*/
