let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let container = document.querySelector(".container");
let btnTwo = document.querySelector(".btnTwo");

btnTwo.addEventListener('click', function(){location.reload()});

//This block of code generates a random color creates a div,
//and appends the color to the div along with the RGB color
button.addEventListener("click", ()=> {
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add("divBox-" + Math.floor(Math.random() * 9999999));
    const newColor = randomColor();
    newDiv.style.backgroundColor = newColor;
    newDiv.innerText = newColor; 
    newDiv.style.color = "white";
});

const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}



