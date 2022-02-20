/******************** Desktop Variation One ********************/

const desktopOneDemoBtn = document.querySelector("#desktop-one-demo-btn");
const desktopOneContainer = document.querySelector("#desktop-one-container");

if (desktopOneDemoBtn) {
  desktopOneDemoBtn.addEventListener("click", () => {
    // d-none ---> display: none;
    desktopOneContainer.classList.remove("d-none");
  });
}

if (desktopOneContainer) {
  desktopOneContainer.addEventListener("click", (event) => {
    if (event.currentTarget === event.target)
      desktopOneContainer.classList.add("d-none");
  });
}

/******************** Mobile Variation One ********************/

const mobileOneDemoBtn = document.querySelector("#mobile-one-demo-btn");
const mobileOneContainer = document.querySelector("#mobile-one-container");

if (mobileOneDemoBtn) {
  mobileOneDemoBtn.addEventListener("click", () => {
    // d-none ---> display: none;
    mobileOneContainer.classList.remove("d-none");
  });
}

if (mobileOneContainer) {
  mobileOneContainer.addEventListener("click", (event) => {
    if (event.currentTarget === event.target)
      mobileOneContainer.classList.add("d-none");
  });
}
