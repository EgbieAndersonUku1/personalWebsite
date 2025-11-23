import isElementValid from "./utils/validator.js";


const projectsCount   = document.getElementById("projects-counter");
const languagesCount = document.getElementById("languages-counter");
const frameworksCount = document.getElementById("frameworks-counter");
const toolsCount = document.getElementById("tools-counter");
const databaseCount = document.getElementById("database-counter");
const openSourceCount = document.getElementById("open-source-counter");



validateElements();


/**
 * Animates a numeric counter in the UI for projects count.
 *
 * @function runProjectsDisplayCount
 * @see runDisplayCount
 * @returns {void} Does not return a value.
 */
function runProjectsDisplayCount() {
    runDisplayCount(projectsCount);
}

/**
 * Animates a numeric counter in the UI for programming languages count.
 *
 * @function runLanguagesDisplayCount
 * @see runDisplayCount
 * @returns {void} Does not return a value.
 */
function runLanguagesDisplayCount() {
    runDisplayCount(languagesCount);
}

/**
 * Animates a numeric counter in the UI for frameworks count.
 *
 * @function runFrameworksDisplayCount
 * @see runDisplayCount
 * @returns {void} Does not return a value.
 */
function runFrameworksDisplayCount() {
    runDisplayCount(frameworksCount);
}

/**
 * Animates a numeric counter in the UI for tools count.
 *
 * @function runToolsDisplayCount
 * @see runDisplayCount
 * @returns {void} Does not return a value.
 */
function runToolsDisplayCount() {
    runDisplayCount(toolsCount);
}

/**
 * Animates a numeric counter in the UI for database count.
 *
 * @function runDatabaseDisplayCount
 * @see runDisplayCount
 * @returns {void} Does not return a value.
 */
function runDatabaseDisplayCount() {
    runDisplayCount(databaseCount);
}


/**
 * Animates a numeric counter in the UI for database count.
 *
 * @function runDatabaseDisplayCount
 * @see runDisplayCount
 * @returns {void} Does not return a value.
 */
function runOpenSourceCountDisplayCount() {
    runDisplayCount(openSourceCount);
}







/**
 * Continuously animates a numeric counter for a given HTML element.
 * The counter starts at 0, increments to the target number, and then restarts.
 *
 * @function runDisplayCount
 * @param {HTMLElement} element - The DOM element whose text content contains the target count.
 * @param {number} [interval=200] - The interval in milliseconds between each count animation start.
 * @returns {void} Does not return a value.
 */
function runDisplayCount(element, interval = 200, endCount = null) {
    
    let count = getNumberFromStringHelper(element);

    if (endCount === null && count !== null) {
        count = count;
    } else if (!isNaN(endCount)){
        count = endCount
    }
    setInterval(() => {
        startCount({endCount: count, element: element})
    }, interval);
}




function startCount({endCount = 0, element}) {
    const count = getNumberFromStringHelper(element);

    if (count < endCount) {
         element.textContent = String(count + 1);
    } else {
        element.textContent = "0"
    }
  
}


function getNumberFromStringHelper(element) {
    if (!element) {
        return null;
    }

    const text = element.textContent?.trim();

    if (!text) {
        console.warn("Element has no text content.");
        return null;
    }

    const numberPart = text.split("+")[0].replace(/[^\d.-]/g, "");
    
    const value = Number(numberPart);

    if (Number.isNaN(value)) {
        console.warn("Text does not contain a valid number.");
        return null;
    }
   return value;
}


/**
 * One time check when the page first loads to verify that the elements are valid.
 */
function validateElements() {
    [projectsCount, languagesCount, frameworksCount, toolsCount, databaseCount, openSourceCount].forEach((element) => {
        isElementValid(element)
    })
}

runProjectsDisplayCount();
runLanguagesDisplayCount();
runFrameworksDisplayCount();
runToolsDisplayCount();
runDatabaseDisplayCount();
runOpenSourceCountDisplayCount();

