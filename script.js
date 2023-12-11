var practiceModeContainer = document.getElementById("practice-mode-container");
var countdownModeContainer = document.getElementById("countdown-mode-container")
var countdownButton = document.getElementById("countdown-mode-button")
var practiceButton = document.getElementById("practice-mode-button")
practiceModeContainer.classList.add("hidden");
countdownButton.classList.add("clicked")


// I THINK THE COUNTDOWN AND PRACTICE SECTIONS ARE LINKED BECUASE THEY SHARE THE SAME CLASS NAME
// CREATE DIFFERENT CLASS NAMES AND DUPE JS CODE

countdownButton.addEventListener("click", () => {
    console.log("Clicked countdown button")
    practiceModeContainer.classList.add("hidden");
    countdownModeContainer.classList.remove("hidden");
});

practiceButton.addEventListener("click", () => {
    console.log("Clicked practice button")
    practiceModeContainer.classList.remove("hidden");
    countdownModeContainer.classList.add("hidden");
});

function logFilterSelection() {
    const selectedCategory = document.querySelector('.category-button.clicked');
    const selectedLength = document.querySelector('.length-button.clicked');
    const selectedAll = document.querySelector('.length-button:last-child.clicked');

    if (selectedCategory && selectedLength) {
        console.log(`Selected ${selectedCategory.textContent} and ${selectedLength.textContent}`);
    } else if (selectedCategory) {
        console.log(`Selected ${selectedCategory.textContent}`);
    } else if (selectedLength) {
        console.log(`Selected ${selectedLength.textContent}`);
    } else if (selectedAll) {
        console.log('Selected All');
    } else {
        console.log('No selection');
    }
}



function selectCategory(category) {
    const categoryButtons = document.querySelectorAll('.category-button');
    const allButton = document.querySelector('.length-button:last-child');

    categoryButtons.forEach(button => {
        if (button.textContent !== category) {
            button.classList.remove('clicked');
        } else {
            button.classList.toggle('clicked');
            allButton.classList.remove('clicked');
        }
    });

    logFilterSelection();
}

function selectLength(length) {
    const lengthButtons = document.querySelectorAll('.length-button');
    const allButton = document.querySelector('.length-button:last-child');

    lengthButtons.forEach(button => {
        if (button.textContent !== length) {
            button.classList.remove('clicked');
        } else {
            button.classList.toggle('clicked');
            allButton.classList.remove('clicked');
        }
    });

    logFilterSelection();
}

function selectAll() {
    const lengthButtons = document.querySelectorAll('.length-button');
    const categoryButtons = document.querySelectorAll('.category-button');
    const allButton = document.querySelector('.length-button:last-child');

    lengthButtons.forEach(button => {
        button.classList.remove('clicked');
    });

    categoryButtons.forEach(button => {
        button.classList.remove('clicked');
    });

    allButton.classList.add('clicked');

    logFilterSelection();
}


function logTimeSelection() {
    const firstOptionButtons = document.querySelectorAll('.first-option-button.clicked');
    const secondOptionButtons = document.querySelectorAll('.second-option-button.clicked');

    if (firstOptionButtons.length > 0) {
        console.log(`Selected ${firstOptionButtons[0].textContent}`);
    } else if (secondOptionButtons.length > 0) {
        console.log(`Selected ${secondOptionButtons[0].textContent}`);
    } else {
        console.log('No selection');
    }
}

function selectTime(time) {
    const firstOptionButtons = document.querySelectorAll('.first-option-button');
    const secondOptionButtons = document.querySelectorAll('.second-option-button');

    firstOptionButtons.forEach(button => {
        if (button.textContent !== time) {
            button.classList.remove('clicked');
        } else {
            button.classList.toggle('clicked');
            logTimeSelection();
        }
    });

    secondOptionButtons.forEach(button => {
        if (button.textContent !== time) {
            button.classList.remove('clicked');
        } else {
            button.classList.toggle('clicked');
            logTimeSelection();
        }
    });
}

function logModeSelection() {
    const modeOptionButtons = document.querySelectorAll('.mode-option-button.clicked');

    if (modeOptionButtons.length > 0) {
        console.log(`Selected ${modeOptionButtons[0].textContent} mode`);
    } else {
        console.log('No mode selection');
    }
}

function selectMode(mode) {
    console.log("hit select mode method")
    const modeOptionButtons = document.querySelectorAll('.mode-option-button');

    modeOptionButtons.forEach(button => {
        if (button.textContent !== mode) {
            button.classList.remove('clicked');
        } else {
            button.classList.toggle('clicked');
            logModeSelection();
        }
    });
}

function validateAndStart() {
    const selectedMode = document.querySelector('.mode-option-button.clicked');
    const selectedTime = document.querySelector('.first-option-button.clicked, .second-option-button.clicked');
    const selectedCategory = document.querySelector('.category-button.clicked');
    const selectedLength = document.querySelector('.length-button.clicked');

    if (!selectedMode || !selectedTime || !(selectedCategory || selectedLength)) {
        alert('Please ensure all options are selected.');
    } else {
        // Perform the start action here
        console.log('Starting quiz...');
    }
}
