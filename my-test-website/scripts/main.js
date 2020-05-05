let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/good-pic-1.jpg') {
        myImage.setAttribute ('src','images/lib-pic-1.jpg');
    } else {
        myImage.setAttribute ('src','images/good-pic-1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'You are cool, ' + myName;  
    }  
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'You are cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}