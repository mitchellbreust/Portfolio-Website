function screenHeightPixels() {
    // Get the current viewport height
    const vh = window.innerHeight;
    return vh;
  }



//returns the users current position on the weboage
function getViewportPosition() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return scrollTop;
  }

//This function will scroll the user to the next section of the webpage.
//It calculates where the user currently is on the webpage by calling the getViewportPosition function.
//Then we can determine what is the next section under it if there is one and take the user there.
function scroll_down(displacment_from_top_page) {
    screenHeight = screenHeightPixels();
    if (displacment_from_top_page >=0 && displacment_from_top_page < screenHeight *1.05) {
        window.scrollTo({
            left: 0,
            top: screenHeight * 1.1 ,
            behavior: 'smooth'
        });
        console.log("(scrolled to about)");
    }
    else if (displacment_from_top_page >=  screenHeight * 1.05 && displacment_from_top_page < screenHeight * 2.1) {
        window.scrollTo({
            left: 0,
            top: screenHeight * 2.1,
            behavior: 'smooth'
        });
        console.log("(scrolled to portfolio)");  
    }
    else if (displacment_from_top_page >= screenHeight * 2.1) {
        window.scrollTo({
            left: 0,
            top: screenHeight * 3.3,
            behavior: 'smooth'
        });
        console.log("(scrolled to contact)");
    }
}

//This function will scroll the user to the next section of the webpage.
//It calculates where the user currently is on the webpage by calling the getViewportPosition function.
//Then we can determine what is the next section abovie it if there is one and take the user there.
function scroll_up(displacment_from_top_page) {
    screenHeight = screenHeightPixels();
    if (displacment_from_top_page >= screenHeight * 1.3 && displacment_from_top_page < screenHeight * 2.3) {
        window.scrollTo({
            left: 0,
            top: screenHeight * 1.1,
            behavior: 'smooth'
        });
        console.log("(scrolled to about)");
    }
    else if (displacment_from_top_page >= screenHeight * 2.3) {
        window.scrollTo({
            left: 0,
            top: screenHeight * 2.1,
            behavior: 'smooth'
        });
        console.log("(scrolled to portfolio)");
    }
    else if (displacment_from_top_page < screenHeight * 1.3) {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
        console.log("(scrolled to Home)");
    }
}

//this function will run either scroll_up or scroll_down depending on if 
//it is true that the user wants to go up or true if the user wants to go down
function go_up_down(up, down) {
    displacment_from_top_page = getViewportPosition();
    if (up == true) {
        scroll_up(displacment_from_top_page);
    }
    else if (down == true) {
        scroll_down(displacment_from_top_page);
    }
}

//this function takes the user to the section desired.
function scroll_to_section(to_about, to_portfolio, to_contact) {
    screenHeight = screenHeightPixels();
    if (to_about == true) {
        window.scrollTo({
            left: 0,
            top: screenHeight * 1.1,
            behavior: 'smooth'
        });
        console.log("(scrolled to about)");
    }
    else if (to_portfolio == true) {
        window.scrollTo({
            left: 0,
            top: screenHeight *2.1,
            behavior: 'smooth'
        });
        console.log("(scrolled to portfolio)");
    }
    else if (to_contact == true) {
        window.scrollTo({
            left: 0,
            top: screenHeight * 3.3,
            behavior: 'smooth'
        });
        console.log("(scrolled to contact)");
    }
 }

 function animateOnClick(element) {
    var start = performance.now();
  
    function step(timestamp) {
      var progress = (timestamp - start) / 250;
  
      if (progress < 1) {
        element.style.transform = 'scale(' + progress + ')';
        window.requestAnimationFrame(step);
      } else {
        element.style.transform = 'scale(1)';
      }
    }
  
    window.requestAnimationFrame(step);
  }

 function show(element) {
     element.style.display = "block";
     document.body.style.overflow = "hidden";
     //I SHOULD ADD SOME ANIMATION
  
 }

 function hide(element) {
     element.style.display = "none";
     document.body.style.overflow = "auto";
 }





 






