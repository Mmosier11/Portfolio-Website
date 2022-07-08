// Get the element with id="defaultOpen" and click on it
//Get the button:

// When the user scrolls down 20px from the top of the document, show the button

function active(element) {
    event.preventDefault();
    const allTabs = document.getElementsByClassName("tab");

    for (const tab of allTabs) {
        if (tab.text == element.text) {
            if (element.classList.contains("not-active-tab")) {
                element.classList.remove("not-active-tab");
                element.classList.add("active-tab");
            }
        } else {
            if (tab.classList.contains("active-tab")) {
                tab.classList.remove("active-tab");
                tab.classList.add("not-active-tab");
            }
        }
    }
}

function openVersion(versionName) {
    event.preventDefault();
    // Declare all variables
    var i, tabContent; //, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabContent = document.getElementsByClassName("tab-content");

    for (const tab of tabContent) {
        tab.style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    //tablinks = document.getElementsByClassName("tablinks");
    //for (i = 0; i < tablinks.length; i++) {
    //    tablinks[i].className = tablinks[i].className.replace(" active", "");
    //}

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(versionName).style.display = "block";
}

function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
