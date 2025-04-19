  
  //NOTE - THIS PART IF FOR THE DROPDOWNLIST OF THE PRODUCTS IN THE PROT1.1
window.onclick = function(event) {
    if (!event.target.closest('.cdo')) {
      var content = document.getElementById("dropdownContentC");
      if (content) content.style.display = "none";
    }
    if (!event.target.closest('.pureF')) {
      var contentF = document.getElementById("dropdownContentF");
      if (contentF) contentF.style.display = "none";
    }
    if (!event.target.closest('.MomL')) {
      var contentM = document.getElementById("dropdownContentM");
      if (contentM) contentM.style.display = "none";
    }
    if (!event.target.closest('.Frab')) {
      var contentR = document.getElementById("dropdownContentR");
      if (contentR) contentR.style.display = "none";
    }
    
  };  
  function toggleDropdownC() {
    var content = document.getElementById("dropdownContentC");
    content.style.display = content.style.display === "block" ? "none" : "block";
  }
  
  function toggleDropdownF() {
    var content = document.getElementById("dropdownContentF");
    content.style.display = content.style.display === "block" ? "none" : "block";
  }
  
  function toggleDropdownM() {
    var content = document.getElementById("dropdownContentM");
    content.style.display = content.style.display === "block" ? "none" : "block";
  }
  function toggleDropdownR() {
    var content = document.getElementById("dropdownContentR");
    content.style.display = content.style.display === "block" ? "none" : "block";
  }

  if (!event.target.closest('.searchCl') && !event.target.closest('#dropdownContent')) {
    const searchDropdown = document.getElementById("dropdownContent");
    if (searchDropdown) searchDropdown.style.display = "none";
  }


//NOTE - Function of the Quantity Increment and Decrement in prot1 file
  document.addEventListener("DOMContentLoaded", function() {
    const buttonPlus = document.querySelector(".bAdd");
    const buttonMinus = document.querySelector(".aDec");
    const inputField = document.querySelector(".input");
  
    buttonPlus.addEventListener("click", function() {
      let currentValue = parseInt(inputField.value);
      inputField.value = currentValue + 1;
    });
  
    buttonMinus.addEventListener("click", function() {
      let currentValue = parseInt(inputField.value);
      if (currentValue > 0) {
        inputField.value = currentValue - 1;
      }
    });
  
    inputField.addEventListener("input", function() {
      let currentValue = parseInt(inputField.value);
      if (isNaN(currentValue) || currentValue < 0) {
        inputField.value = 0;
      }
    });
  });
  