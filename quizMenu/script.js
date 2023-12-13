document.addEventListener('DOMContentLoaded', function () {
    const countdownModeContainer = document.getElementById('countdown-mode-container');
    const practiceModeContainer = document.getElementById('practice-mode-container');
    const countdownButton = document.getElementById('countdown-mode-button');
    const practiceButton = document.getElementById('practice-mode-button');
    const startButton = document.getElementById('start-button');
    //cd variables
    const cdOptionButtons = document.querySelectorAll('.cd-option-button');
    const cdCategoriesButtons = document.querySelectorAll('.cd-categories-button');
    const cdLengthButtons = document.querySelectorAll('.cd-length-button');
    const cdAllButton = document.getElementById('c-all-button');
    //p variables
    const pOptionButtons = document.querySelectorAll('.p-option-button');
    const pCategoriesButtons = document.querySelectorAll('.p-categories-button');
    const pLengthButtons = document.querySelectorAll('.p-length-button');
    const pAllButton = document.getElementById('p-all-button');
    const cdErrorPopup = document.getElementById('cd-error-popup');
    const cdErrorMessage = document.getElementById("cd-error-message");
    const pErrorPopup = document.getElementById('p-error-popup');
    const pErrorMessage = document.getElementById("p-error-message");


    countdownModeContainer.classList.add("hidden");
    practiceModeContainer.classList.add("hidden");
    startButton.classList.add("hidden");
    cdErrorPopup.classList.add("hidden");
    pErrorPopup.classList.add("hidden");


    let cdAllSelected = false;
    let pAllSelected = false;


    countdownButton.addEventListener('click', () => {
        countdownModeContainer.classList.remove('hidden');
        practiceModeContainer.classList.add('hidden');
        countdownButton.classList.add('clicked');
        practiceButton.classList.remove('clicked');
        startButton.classList.remove("hidden");
        logSelection();

    });

    practiceButton.addEventListener('click', () => {
        countdownModeContainer.classList.add('hidden');
        practiceModeContainer.classList.remove('hidden');
        countdownButton.classList.remove('clicked');
        practiceButton.classList.add('clicked');
        startButton.classList.remove("hidden");

    });

    cdOptionButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("clicked cdOptionButtons")
            cdOptionButtons.forEach(b => b.classList.remove('clicked'));
            button.classList.add('clicked');
            logSelection();
        });
    });

    pOptionButtons.forEach(button => {
        button.addEventListener('click', () => {
            pOptionButtons.forEach(b => b.classList.remove('clicked'));
            button.classList.add('clicked');
            pLogSelection();
        });
    });

    cdCategoriesButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("Clicked cdCategoriesButtons")
            const isButtonClicked = button.classList.contains('clicked');
            const group = button.getAttribute('data-group');

            if (button === cdAllButton) {
                cdCategoriesButtons.forEach(b => b.classList.remove('clicked'));
            } else {
                cdCategoriesButtons.forEach(b => {
                    if (b.getAttribute('data-group') === group) {
                        b.classList.remove('clicked');
                    }
                });
            }
            button.classList.toggle('clicked', !isButtonClicked);
            logSelection();
        });
    });

    pCategoriesButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isButtonClicked = button.classList.contains('clicked');
            const group = button.getAttribute('data-group');

            if (button === cdAllButton) {
                pCategoriesButtons.forEach(b => b.classList.remove('clicked'));
            } else {
                pCategoriesButtons.forEach(b => {
                    if (b.getAttribute('data-group') === group) {
                        b.classList.remove('clicked');
                    }
                });
            }
            button.classList.toggle('clicked', !isButtonClicked);
            pLogSelection();
        });
    });

    cdLengthButtons.forEach(button => {
        button.addEventListener('click', () => {
            cdLengthButtons.forEach(b => b.classList.remove('clicked'));
            button.classList.add('clicked');
            logSelection();
        });
    });

    pLengthButtons.forEach(button => {
        button.addEventListener('click', () => {
            pLengthButtons.forEach(b => b.classList.remove('clicked'));
            button.classList.add('clicked');
            pLogSelection();
        });
    });

    cdAllButton.addEventListener('click', () => {
        cdCategoriesButtons.forEach(button => button.classList.remove('clicked'));
        cdAllButton.classList.add('clicked');
        cdAllSelected = cdAllButton.classList.contains('clicked');
        logSelection();
    });

    pAllButton.addEventListener('click', () => {
        pCategoriesButtons.forEach(button => button.classList.remove('clicked'));
        pAllButton.classList.add('clicked');
        pAllSelected = pAllButton.classList.contains('clicked');
        pLogSelection();
    });

    startButton.addEventListener('click', () => {
        console.log('Starting quiz...');
    });

    
    function logSelection() {
        console.log("Inside of countdown mode log section method");

        const selectedMode = countdownButton.classList.contains('clicked') ? 'Countdown' : 'Practice';
        const selectedTime = document.querySelector('.cd-option-button.clicked');
        const selectedCCategories = Array.from(document.querySelectorAll('.cd-categories-button.clicked')).map(button => button.textContent);
        const selectedCLength = cdAllSelected ? null : Array.from(document.querySelectorAll('.cd-length-button.clicked')).map(button => button.textContent).pop();

        console.log("Selected mode: " + selectedMode);
        console.log("Selected time: --> " + (selectedTime ? selectedTime.textContent : null));
        console.log("Selected category: " + (selectedCCategories.length > 0 ? selectedCCategories : null));
        console.log("Selected length: " + (selectedCLength ? selectedCLength : null));
        console.log("Selected all: " + cdAllSelected);
        console.log("------------------------------")
    }

    function pLogSelection() {
        console.log("Inside of practice mode log section method");

        const selectedMode = countdownButton.classList.contains('clicked') ? 'Countdown' : 'Practice';
        const selectedTime = document.querySelector('.p-option-button.clicked');
        const selectedCCategories = Array.from(document.querySelectorAll('.p-categories-button.clicked')).map(button => button.textContent);
        const selectedCLength = pAllSelected ? null : Array.from(document.querySelectorAll('.p-length-button.clicked')).map(button => button.textContent).pop();

        console.log("Selected mode: " + selectedMode);
        console.log("Selected questions: --> " + (selectedTime ? selectedTime.textContent : null));
        console.log("Selected category: " + (selectedCCategories.length > 0 ? selectedCCategories : null));
        console.log("Selected length: " + (selectedCLength ? selectedCLength : null));
        console.log("Selected all: " + pAllSelected);
        console.log("------------------------------")
    }

    startButton.addEventListener("click", () => {
        console.log("clicked start button");
        validateAndStart();
    })

    function validateAndStart() {
        const selectedMode = document.querySelector('.mode-option-button.clicked');
        const selectedTimeCD = document.querySelector('.cd-option-button.clicked');
        const selectedCategoriesCD = Array.from(document.querySelectorAll('.cd-categories-button.clicked')).map(button => button.textContent);
        const selectedLengthCD = document.querySelector('.cd-length-button.clicked');
        const selectedAllCD = document.querySelector('.cd-length-button:last-child.clicked');
    
        const selectedTimeP = document.querySelector('.p-option-button.clicked');
        const selectedCategoriesP = Array.from(document.querySelectorAll('.p-categories-button.clicked')).map(button => button.textContent);
        const selectedLengthP = document.querySelector('.p-length-button.clicked');
        const selectedAllP = document.querySelector('.p-length-button:last-child.clicked');
    
        const notSelectedOptions = [];
    
        if (!selectedMode) {
            notSelectedOptions.push('Mode');
        }
    
        if (selectedMode && selectedMode.textContent === 'Countdown') {
            if (!selectedTimeCD) {
                notSelectedOptions.push('Time');
            }
    
            if (
                !(selectedCategoriesCD.length > 0 || selectedAllCD) &&
                !(selectedLengthCD || selectedAllCD)
            ) {
                notSelectedOptions.push('Filter');
            }
        } else if (selectedMode && selectedMode.textContent === 'Practice') {
            if (!selectedTimeP) {
                notSelectedOptions.push('Number of Questions');
            }
    
            if (
                !(selectedCategoriesP.length > 0 || selectedAllP) &&
                !(selectedLengthP || selectedAllP)
            ) {
                notSelectedOptions.push('Filter');
            }
        }
    
        if (selectedAllCD) {
            console.log('Selected All for Countdown');
        } else if (selectedLengthCD) {
            console.log('Selected Length for Countdown: ' + selectedLengthCD.textContent);
        } else if (selectedCategoriesCD.length > 0) {
            console.log('Selected Categories for Countdown: ' + selectedCategoriesCD.join(', '));
        }
    
        if (selectedAllP) {
            console.log('Selected All for Practice');
        } else if (selectedLengthP) {
            console.log('Selected Length for Practice: ' + selectedLengthP.textContent);
        } else if (selectedCategoriesP.length > 0) {
            console.log('Selected Categories for Practice: ' + selectedCategoriesP.join(', '));
        }
    
        if (notSelectedOptions.length > 0) {
            cdErrorMessage.innerHTML = `Please select ${notSelectedOptions.join(', ')} options.`
            cdErrorPopup.classList.remove("hidden")
            pErrorMessage.innerHTML = `Please select ${notSelectedOptions.join(', ')} options.`
            pErrorPopup.classList.remove("hidden")
            console.log(`Please select ${notSelectedOptions.join(', ')} options.`);
        } else {
            console.log('Starting quiz...');
        }
    }
    
    
    
    
    

});
