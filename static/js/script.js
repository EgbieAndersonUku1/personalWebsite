import repositories from "./repositories.js";
import   ProjectPaginator from "./utils/paginator.js";
import   TypeAnimator     from "./utils/animatedText.js";
import { SidebarToggler, showSpinner }            from "./utils/toggler.js";
import { displayResults, handleButtonInteraction} from "./utils/buttonHandler.js";



const TIME_IN_MILLISECONDS     = 3000;
const contactMeLinkElement     = document.querySelector(".contact-me");
const closeSearchButtonElement = document.querySelector(".sidebar-close-btn");
const loadMoreBtnElement       = document.querySelector(".load-more-btn");
const spinner                  = document.querySelector(".spinner");
const searchFormSideBarElement = document.querySelector("#search .container");
const searchFormButtonElement  = document.querySelector(".sidebar-search-btn");
const sideBarElement           = document.querySelector("#project-sidebar");
const viewMoreBtnElement       = document.querySelector(".view-more-btn");


// Initialise the classes
const projectLoader     = new ProjectPaginator();
const searchFormSideBar = new SidebarToggler();  // The search form located in the sidebar
const sideBar           = new SidebarToggler();  // The main sidebar
const typeText          = new TypeAnimator(); 


// Set the paginator attribute
projectLoader.setProjectsRepo(repositories);


// set the attributes for the class for the sidebar elements i.e search form and the sidebar
sideBar.setSideBarElement(sideBarElement);
sideBar.setToggleButtonElement(viewMoreBtnElement);
searchFormSideBar.setSideBarElement(searchFormSideBarElement);
searchFormSideBar.setToggleButtonElement(searchFormButtonElement);

// Assign the eventListeners to their representive targets
closeSearchButtonElement.addEventListener("click", handleSearchCloseBtn);
loadMoreBtnElement.addEventListener("click", handleLoadBtnClick);
searchFormButtonElement.addEventListener("click", handleSearchBtn);
viewMoreBtnElement.addEventListener("click", handleViewMoreBtnClick);


/**
 * Handles the link when the contact link is clicked
 * @param {Event} e - The click event object.
 */
function handleContactMeLink(e) {
    showSpinner(spinner, TIME_IN_MILLISECONDS)
}



/**
 * Handles the click event of the search close button.
 * @param {Event} e - The click event object.
 */
function handleSearchCloseBtn(e) {
    e.preventDefault();

    if (sideBar.isOpen) {
        showSpinner(spinner, TIME_IN_MILLISECONDS);
        sideBarElement.classList.remove("show");
  
        // Close the search container as well because the search shouldn't be open if the 
        // Sidebar is closed
        searchFormSideBarElement.classList.remove("show");

        // Reset the button texts to their default state
        searchFormButtonElement.textContent = "Search";
        viewMoreBtnElement.textContent      = "View more";

        // Reset the toggle state of the sidebar and search form
        searchFormSideBar.reset();
        sideBar.reset();
    }
}


/**
 * Handles the click event of the load more button.
 * @param {Event} e - The click event object.
 */
function handleLoadBtnClick(e) {
    const TIME_IN_MILLISECONDS = 1000;

    e.preventDefault();
    handleButtonInteraction(loadMoreBtnElement, spinner, projectLoader, TIME_IN_MILLISECONDS);
}


/**
 * Handles the click event of the search button.
 * @param {Event} e - The click event object.
 */
function handleSearchBtn(e) {
    e.preventDefault();

    searchFormSideBar.setToggleButtonOpenDisplayMessage("Dismiss");
    searchFormSideBar.setToggleButtonCloseDisplayMessage("Search");
    showSpinner(spinner, TIME_IN_MILLISECONDS);
    
    searchFormSideBar.toggleSidebar();
}



/**
 * Handles the click event of the "View more" button.
 * @param {Event} e - The click event object.
 */
function handleViewMoreBtnClick(e) {
    e.preventDefault();

    projectLoader.showProjects();

    // Display the number of repository loaded e.g showing 1 out of 10
    displayResults(projectLoader);  

    // Update the sidebar toggle button messages
    sideBar.setToggleButtonOpenDisplayMessage("Close");
    sideBar.setToggleButtonCloseDisplayMessage("View more");

    showSpinner(spinner, TIME_IN_MILLISECONDS);

    sideBar.toggleSidebar();
}


/**
 * Displays animated text by typing out phrases in a loop.
 * Uses the TypeText class to manage the animation.
 */
function displayAnimatedText() {

    // Phrases to be displayed in the animation
    const phrases = [
        "I create fast, scalable, and user-focused digital products",
        "I am a Fullstack developer",
        "I am Sofware Developer",
        "I am a Web developer",
        "I am a problem solver",
        "I am proficient in HTML",
        "I am proficient in JS",
        "I am proficient in CSS",
        "I am proficient in Python",
        "I know Node",
        "I know Git",
        "I am constantly learning and improving myself",
        "I am creative and the entire world is my inspiration",
        
    ];

    // Initialize the TypeText instance
    typeText.setPhraseArray(phrases);
    typeText.setTextToTypeCssSelector("#animated-text");
    
    typeText.start();
}


/**
 * Toggles the visibility of the home icon by toggling the text helper class.
 */
function toggleHomeIcon() {
    toggleTextHelper(".home-icon");
}

/**
 * Toggles the visibility of the about me icon by toggling the text helper class.
 */
function toggleAboutMeIcon() {
    toggleTextHelper(".about-me-icon");
}

/**
 * Toggles the visibility of the skills icon by toggling the text helper class.
 */
function toggleSkillsIcon() {
    toggleTextHelper(".skills-icon");
}

/**
 * Toggles the visibility of the projects icon by toggling the text helper class.
 */
function toggleProjectIcon() {
    toggleTextHelper(".projects-icon");
}

/**
 * Toggles the visibility of the contact us icon by toggling the text helper class.
 */
function toggleContactUsIcon() {
    toggleTextHelper(".contact-me-icon");
}



/**
 * Toggles the visibility of text menu items when hovering over icon div elements.
 * @param {string} iconDivElement - The CSS selector for the icon div elements.
 * @param {string} [textMenuItemElement=".menu-item"] - The CSS selector for the text menu item elements.
 */
function toggleTextHelper(iconDivElement, textMenuItemElement = ".menu-item") {
    const divElements      = document.querySelectorAll(iconDivElement);
    const menuItemElements = document.querySelectorAll(`${iconDivElement} ${textMenuItemElement}`);

    divElements.forEach((divElement, index) => {
        divElement.addEventListener("mouseover", () => {
            divElement.classList.add("display-item");
            menuItemElements[index].classList.remove("hide-item");
        });

        divElement.addEventListener("mouseout", () => {
            divElement.classList.remove("display-item");
            menuItemElements[index].classList.add("hide-item");
        });
    });
}






displayAnimatedText();
toggleHomeIcon();
toggleAboutMeIcon();
toggleSkillsIcon();
toggleProjectIcon();
toggleContactUsIcon();


