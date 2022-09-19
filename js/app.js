/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const myDocFrag = document.createDocumentFragment();

const sections = document.querySelectorAll("section");
const nav_list = document.querySelector("#navbar__list");
for (const section of sections){
const a_tag =document.createElement("a");
a_tag.href = `#${section.getAttribute("id")}`;
a_tag.innerText = section.getAttribute("data-nav");

const li= document.createElement("li");
a_tag.classList.add("menu__link");
a_tag.addEventListener("click", function scrolling(e){
e.preventDefault();
    section.scrollIntoView({'behavior':'smooth'});
})
li.appendChild(a_tag);
myDocFrag.appendChild(li);
}
nav_list.appendChild(myDocFrag)


// Add class 'active' to section when near top of viewport
const observer = new IntersectionObserver(function obs(entities) {
    
entities.forEach(entity=>{
    //console.log("entity"+entity.target);
    entity.target.classList.toggle("active",entity.isIntersecting)
    document.querySelector(`a[href="#${entity.target.id}"]`).classList.toggle("active",entity.isIntersecting)
})
},
{threshold :1})

sections.forEach(function addToTheObserver(section){
observer.observe(section)
}
    

)

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


