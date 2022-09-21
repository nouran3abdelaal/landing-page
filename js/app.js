//Creating a fragment object to improve the performance
const myDocFrag = document.createDocumentFragment();

// Getting all the sections
const sections = document.querySelectorAll("section");

// Getting the navbar list
const nav_list = document.querySelector("#navbar__list");

/*
build the nav bar by creating a number of achor tags in li elements
correspond to the number of sections in the html file
*/
for (const section of sections) {
    const a_tag = document.createElement("a");
    a_tag.href = `#${section.getAttribute("id")}`;
    a_tag.innerText = section.getAttribute("data-nav");

    const li = document.createElement("li");
    a_tag.classList.add("menu__link");
    a_tag.addEventListener("click", function scrolling(e) {
        e.preventDefault();
        section.scrollIntoView({
            'behavior': 'smooth'
        });
    })
    li.appendChild(a_tag);
    myDocFrag.appendChild(li);
}
nav_list.appendChild(myDocFrag);


// Add class 'active' to section when near top of viewport
// and for the corresponding a link in the nav bar
const observer = new IntersectionObserver(function (entities) {
    entities.forEach(entity => {
        //console.log("entity"+entity.target);
        entity.target.classList.toggle("active", entity.isIntersecting)
        document.querySelector(`a[href="#${entity.target.id}"]`).classList.toggle("active", entity.isIntersecting)
    })
}, {

    threshold: 0.3
})

// Here we loop over all the sections and make them observed by the observer
sections.forEach(function addToTheObserver(section) {
    observer.observe(section);
})
