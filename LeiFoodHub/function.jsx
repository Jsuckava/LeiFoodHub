//NOTE - Functions for Dropdown list
window.onclick = function(event) {
  if (!event.target.closest('.cdo')) {
    const content = document.getElementById("dropdownContentC");
    if (content) content.style.display = "none";
  }

  if (!event.target.closest('.pureF')) {
    const contentF = document.getElementById("dropdownContentF");
    if (contentF) contentF.style.display = "none";
  }

  if (!event.target.closest('.MomL')) {
    const contentM = document.getElementById("dropdownContentM");
    if (contentM) contentM.style.display = "none";
  }


  if (!event.target.closest('.Frab')) {
    const contentR = document.getElementById("dropdownContentR");
    if (contentR) contentR.style.display = "none";
  }

  if (!event.target.closest('.searchCl') && !event.target.closest('#dropdownContent')) {
    const searchDropdown = document.getElementById("dropdownContent");
    if (searchDropdown) searchDropdown.style.display = "none";
  }
};

function toggleDropdownC() {
  const content = document.getElementById("dropdownContentC");
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function toggleDropdownF() {
  const content = document.getElementById("dropdownContentF");
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function toggleDropdownM() {
  const content = document.getElementById("dropdownContentM");
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function toggleDropdownR() {
  const content = document.getElementById("dropdownContentR");
  content.style.display = content.style.display === "block" ? "none" : "block";
}


//NOTE - Function for Quantity Increment and Decrement

document.addEventListener("DOMContentLoaded", function () {
  const buttonPlus = document.querySelector(".bAdd");
  const buttonMinus = document.querySelector(".aDec");
  const inputField = document.querySelector(".input");

  buttonPlus.addEventListener("click", function () {
    let currentValue = parseInt(inputField.value) || 0;
    inputField.value = currentValue + 1;
  });

  buttonMinus.addEventListener("click", function () {
    let currentValue = parseInt(inputField.value) || 0;
    if (currentValue > 0) {
      inputField.value = currentValue - 1;
    }
  });

  inputField.addEventListener("input", function () {
    let currentValue = parseInt(inputField.value);
    if (isNaN(currentValue) || currentValue < 0) {
      inputField.value = 0;
    }
  });
});
