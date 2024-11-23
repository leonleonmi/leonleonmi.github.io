var textbox_visible = false;
var blurred = false;

      document.addEventListener("DOMContentLoaded", function () {
        // const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

        // function handleMobileView(e) {
        //   if (e.matches) {
        //     // Add event listeners for mobile view
        //     document.getElementById("about-link").addEventListener("click", handleLinkClick);
        //     document.getElementById("education-link").addEventListener("click", handleLinkClick);
        //     document.getElementById("experience-link").addEventListener("click", handleLinkClick);
        //     document.getElementById("skills-link").addEventListener("click", handleLinkClick);
        //     document.querySelectorAll(".backbutton").forEach((element) => {
        //       element.addEventListener("click", handleLinkClick);
        //     });
        //   } else {
        //     // Remove event listeners for mobile view if necessary
        //     document.getElementById("about-link").removeEventListener("click", handleLinkClick);
        //     document.getElementById("education-link").removeEventListener("click", handleLinkClick);
        //     document.getElementById("experience-link").removeEventListener("click", handleLinkClick);
        //     document.getElementById("skills-link").removeEventListener("click", handleLinkClick);
        //     document.querySelectorAll(".backbutton").forEach((element) => {
        //       element.removeEventListener("click", handleLinkClick);
        //     });
        //   }
        // }
            
        // function handleLinkClick() {
        //   const nav = document.getElementById("nav");
          
        //   if (nav.classList.contains("is-visible")) {
        //     nav.classList.remove("fade-in-nav-animation");
        //     nav.classList.add("fade-out-nav-animation");
        //   setTimeout(() => {
        //     nav.classList.add("hidden");
        //     nav.classList.add("is-hidden");
        //     nav.classList.remove("is-visible");
        //   }, 1200);
        //   }

        //   if (nav.classList.contains("is-hidden")) {
        //     //nav.classList.remove("fade-out-nav-animation");
        //     nav.classList.add("fade-in-nav-animation");
        //     nav.classList.remove("fade-out-nav-animation");
        //     const fade_out_element = document.querySelectorAll(
        //       ".text-box:not(.invisible)"
        //     )[0].id;
        //     fade_out(fade_out_element);
        //     textbox_visible = false;
        //     bg_unblur();
        //     setTimeout(() => {
        //       nav.classList.remove("hidden");
        //       nav.classList.remove("is-hidden");
        //       nav.classList.add("is-visible");

        //     }, 200);
          
        // }
        // }
            
        // Initial check
        // handleMobileView(mobileMediaQuery);
            
        // Listen for changes in the viewport size
        // mobileMediaQuery.addEventListener("change", handleMobileView);

        // Bounce animations for the arrows
        bounce("#arrow-1");
        bounce("#arrow-2");
        bounce("#arrow-3");
        bounce("#arrow-4");

        // Event listeners for the links
        var aboutLink = document.getElementById("about-link");
        aboutLink.addEventListener("click", function () {
            if (textbox_visible) {
              text_switch("about-box");
            } else {
              bg_blur();
              fade_in("about-box");
              fade_in("arrow-back");
              textbox_visible = true;
            }
          });

        document
          .getElementById("education-link")
          .addEventListener("click", function () {
            if (textbox_visible) {
              text_switch("education-box");
            } else {
              bg_blur();
              fade_in("education-box");
              fade_in("arrow-back");
              textbox_visible = true;
            }
          });

        document
          .getElementById("experience-link")
          .addEventListener("click", function () {
            if (textbox_visible) {
              text_switch("experience-box");
            } else {
              bg_blur();
              fade_in("experience-box");
              fade_in("arrow-back");
              textbox_visible = true;
            }
          });

        document
          .getElementById("skills-link")
          .addEventListener("click", function () {
            if (textbox_visible) {
              text_switch("skills-box");
            } else {
              bg_blur();
              fade_in("skills-box");
              fade_in("arrow-back");
              textbox_visible = true;
            }
          });

        document
          .getElementById("bg-text")
          .addEventListener("click", function () {
            if (blurred) {
              bg_unblur();
              const fade_out_element = document.querySelectorAll(
                ".text-box:not(.invisible)"
              )[0].id;
              fade_out(fade_out_element);
              fade_out("arrow-back");
              textbox_visible = false;
            }
          });

        const returnButton = document.getElementById("arrow-back");
        returnButton.addEventListener("click", function () {
          const fade_out_element = document.querySelectorAll(
            ".text-box:not(.invisible)"
          )[0].id;
          fade_out(fade_out_element);
          fade_out("arrow-back");
          textbox_visible = false;
          bg_unblur();
        });
      

        
        // Functions

        function bg_blur() {
          if (!blurred) {
            const bgText = document.getElementById("bg-text");
            bgText.classList.add("blur-in-animation");
            bgText.classList.remove("blur-out-animation");
            blurred = true;
          }
        }

        function bg_unblur() {
          if (blurred) {
            const bgText = document.getElementById("bg-text");
            bgText.classList.add("blur-out-animation");
            bgText.classList.remove("blur-in-animation");
            blurred = !blurred;
          }
        }

        function fade_in(element) {
          const textBox = document.getElementById(element);
          textBox.classList.remove("fade-out-animation");
          textBox.classList.remove("invisible");
          textBox.classList.add("fade-in-animation");
        }

        function fade_out(element) {
          const textBox = document.getElementById(element);
          textBox.classList.add("fade-out-animation");
          textBox.classList.remove("fade-in-animation");
          textBox.classList.add("invisible");
        }

        function text_switch(element) {
          const in_element = element;
          const out_element = document.querySelectorAll(
            ".text-box:not(.invisible)"
          )[0].id;

          if (out_element === in_element) {
            return;
          } else {
            fade_out(out_element);
            fade_in(in_element);
          }
        }

        

      //anime.js
      
      function bounce(element) {
        anime({
          targets: element,
          translateX: [
            { value: 10, duration: 500, easing: "easeInOutQuad" },
            { value: 0, duration: 500, easing: "easeInOutQuad" }
          ],
          loop: true // Ensures the animation repeats indefinitely
        });
      }

    });