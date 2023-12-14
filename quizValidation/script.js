document.addEventListener("DOMContentLoaded", function () {
    const countdownModeContainer = document.getElementById(
      "countdown-mode-container"
    );
    const practiceModeContainer = document.getElementById(
      "practice-mode-container"
    );
    const countdownButton = document.getElementById("countdown-mode-button");
    const practiceButton = document.getElementById("practice-mode-button");
    const startButton = document.getElementById("start-button");
    //cd variables
    const cdOptionButtons = document.querySelectorAll(".cd-option-button");
    const cdCategoriesButtons = document.querySelectorAll(
      ".cd-categories-button"
    );
    const cdLengthButtons = document.querySelectorAll(".cd-length-button");
    const cdAllButton = document.getElementById("c-all-button");
    //p variables
    const pOptionButtons = document.querySelectorAll(".p-option-button");
    const pCategoriesButtons = document.querySelectorAll(".p-categories-button");
    const pLengthButtons = document.querySelectorAll(".p-length-button");
    const pAllButton = document.getElementById("p-all-button");
    const backButton = document.getElementById("back-page-button");
  
    backButton.addEventListener("click", () => {
      console.log("clicked back button");
      window.location.replace("homePage");
    });
  
    countdownModeContainer.classList.add("hidden");
    practiceModeContainer.classList.add("hidden");
    startButton.classList.add("hidden");

  
    countdownButton.addEventListener("click", () => {
      countdownModeContainer.classList.remove("hidden");
      practiceModeContainer.classList.add("hidden");
      countdownButton.classList.add("clicked");
      practiceButton.classList.remove("clicked");
      startButton.classList.remove("hidden");
    });
  
    practiceButton.addEventListener("click", () => {
      countdownModeContainer.classList.add("hidden");
      practiceModeContainer.classList.remove("hidden");
      countdownButton.classList.remove("clicked");
      practiceButton.classList.add("clicked");
      startButton.classList.remove("hidden");
    });

// Helper function to remove 'clicked' class from a group of buttons
function resetButtonGroup(buttons) {
    buttons.forEach((button) => button.classList.remove("clicked"));
  }

  // Helper function to handle button click events
  function handleButtonClick(button, buttons, allButton) {
    if (allButton.classList.contains("clicked")) {
      allButton.classList.remove("clicked");
    }
    resetButtonGroup(buttons);
    button.classList.add("clicked");
    console.log("Selected:", button.innerText);
  }

  // Countdown mode buttons
  cdOptionButtons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button, cdOptionButtons, cdAllButton));
  });

  cdCategoriesButtons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button, cdCategoriesButtons, cdAllButton));
  });

  cdLengthButtons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button, cdLengthButtons, cdAllButton));
  });

  cdAllButton.addEventListener("click", () => {
    resetButtonGroup(cdCategoriesButtons);
    resetButtonGroup(cdLengthButtons);
    cdAllButton.classList.add("clicked");
    console.log("Selected: All");
  });

  // Practice mode buttons
  pOptionButtons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button, pOptionButtons, pAllButton));
  });

  pCategoriesButtons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button, pCategoriesButtons, pAllButton));
  });

  pLengthButtons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button, pLengthButtons, pAllButton));
  });

  pAllButton.addEventListener("click", () => {
    resetButtonGroup(pCategoriesButtons);
    resetButtonGroup(pLengthButtons);
    pAllButton.classList.add("clicked");
    console.log("Selected: All");
  });
  
  


});
