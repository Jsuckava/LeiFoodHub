document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("search");
    const dropdown = document.getElementById("dropdownContent");
    const listItems = document.querySelectorAll("li");
  
    input.addEventListener("input", function () {
      const filter = input.value.trim().toLowerCase();
      let hasMatch = false;
  
      listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        const match = text.startsWith(filter);
        item.style.display = match ? "" : "none";
        if (match) hasMatch = true;
      });
  
      dropdown.style.display = (filter && hasMatch) ? "block" : "none";
    });
  
    window.addEventListener("click", function (event) {
      if (!input.contains(event.target) || !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
      }
    });
  }); 