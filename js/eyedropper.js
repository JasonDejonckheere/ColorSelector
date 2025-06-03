"use strict";

//GLOBAL VARS
let btnGetColor, btnReset

window.addEventListener('load', initialise);
function initialise(){
    loadDOMElements();
    loadEventListeners();

};

function loadDOMElements(){
    btnGetColor = document.getElementById("btnEyeDropper");
    btnReset = document.getElementById("btnReset");
};

function loadEventListeners(){
    btnGetColor.addEventListener("click", getColor)
    btnReset.addEventListener("click", resetColor)
};

function getColor(){
    
  const colorCode = document.getElementById("colorResult");
  const colorVisualised = document.getElementById("colorVisualised");

  if (!window.EyeDropper) {
    colorResult.textContent =
      "Your browser does not support the EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();

  eyeDropper
    .open()
    .then((result) => {
      colorResult.textContent = result.sRGBHex;
      hdgTitle.style.color = result.sRGBHex;
      hdgTitle.textContent = "You selected the color:"
    })
    .catch((e) => {
      colorResult.textContent = "You cancelled.";
    });


};

function resetColor(){
    const hdgColor = document.getElementById("hdgTitle");
    const parColor = document.getElementById("colorResult");
    
    hdgColor.style.color = "black";
    hdgColor.textContent = "Color Selector"
    parColor.textContent = "";
}