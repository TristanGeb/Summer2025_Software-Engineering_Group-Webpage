/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 */
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    // Toggle between showing and hiding the bio section
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
    } else {
        bio.style.display = "none";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");

    // Display the bios section and hide the vision section
    if (sectionId === "bios") {
        biosSection.style.display = "flex";
        visionSection.style.display = "none";
    }
    // Display the vision section and hide the bios section
    else if (sectionId === "vision") {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
    }
}


    /*Simple carousel for mood board*/
    const leftBtn = document.querySelector('.panLeft');
    const rightBtn = document.querySelector('.panRight');
    //selects all items , returns a nodeList by default
    const slideItems = Array.from(document.querySelectorAll('.slide-item'));
    const slide_size = slideItems.length;
    
    
    leftBtn.addEventListener('click', swipeLeft);
    rightBtn.addEventListener('click', swipeRight)
    
    function swipeLeft(e){
        const currentSlideItem = document.querySelector('.slide-item.active');
        const currIndex = slideItems.indexOf(currentSlideItem);
    
        let nextIndex;
        
        if(currIndex === 0){
            nextIndex = slide_size - 1;
        }
        else{
            nextIndex = currIndex - 1;
        }
    
        slideItems[nextIndex].classList.add('active');
        currentSlideItem.classList.remove('active');
    
    }
    
    function swipeRight(e){
        const currentSlideItem = document.querySelector('.slide-item.active');
        const currIndex = slideItems.indexOf(currentSlideItem);
    
        let nextIndex;
        
        if(currIndex === slide_size - 1){
            nextIndex = 0;
        }
        else{
            nextIndex = currIndex + 1;
        }
    
        slideItems[nextIndex].classList.add('active');
        currentSlideItem.classList.remove('active');
    
    }