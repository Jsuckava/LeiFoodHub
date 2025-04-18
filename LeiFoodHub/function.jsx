//NOTE -  THIS PART IS FOR THE SEARCH BAR OF THE PROT1.1
function searchItems() {
  const input = document.getElementById("search");
  const filter = input.value.toLowerCase();
  const ul = document.getElementById("searchList");
  const li = ul.getElementsByTagName("li");
  const dropdown = document.getElementById("dropdownContent");

  let hasMatch = false;

  for (let i = 0; i < li.length; i++) {
    const text = li[i].textContent.toLowerCase();
    const match = text.startsWith(filter);
    li[i].style.display = match ? "" : "none";
    if (match) hasMatch = true;
  }

  dropdown.style.display = (filter && hasMatch) ? "block" : "none";
}

window.addEventListener("click", function (event) {
  const input = document.getElementById("search");
  const dropdown = document.getElementById("dropdownContent");

  if (!input.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});

//NOTE -  END SRCH PART
  
  
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


  function toggleDropdown(id) {
    const content = document.getElementById(id);
    if (content) {
      content.style.display = content.style.display === "block" ? "none" : "block";
    }
  }
  //NOTE -  END DRP PT1.1

  