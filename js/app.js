// Get the container element
var btnContainer = document.getElementById("power__btns");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("select-power");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active2");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active2", "");
        }
        this.className += " active2";
    });
}

// Get the container element
var btnContainer = document.getElementById("color__btns");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("select-color");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active1");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active1", "");
        }
        this.className += " active1";
    });
}




const button = document.querySelector('#downbtn');
const element = document.querySelector('#info');


button.addEventListener('click', () => {

    element.scrollIntoView({ behavior: 'smooth' });
});


const button2 = document.querySelector('#downbtn2');
const element2 = document.querySelector('#order');

button2.addEventListener('click', () => {

    element2.scrollIntoView({ behavior: 'smooth' });
});



const button3 = document.querySelector('#videobtn');
const element3 = document.querySelector('#video');

button3.addEventListener('click', () => {

    element3.scrollIntoView({ behavior: 'smooth' });
});



function scrollDown() {
    const button4 = document.querySelector('#video-btn2');
    const element4 = document.querySelector('#video');

    button4.addEventListener('click', () => {

        element4.scrollIntoView({ behavior: 'smooth' });
    });
}