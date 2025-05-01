//NOTE - Dropdown Toggle Logic
window.onclick = function(event) {
  const dropdowns = ['.cdo', '.pureF', '.MomL', '.Frab', '.searchCl'];
  dropdowns.forEach(className => {
    const content = document.getElementById(`dropdownContent${className.slice(-1).toUpperCase()}`);
    if (content && !event.target.closest(className)) {
      content.style.display = "none";
    }
  });

  const searchDropdown = document.getElementById("dropdownContent");
  if (searchDropdown && !event.target.closest('.searchCl') && !event.target.closest('#dropdownContent')) {
    searchDropdown.style.display = "none";
  }
};

const toggleDropdown = (id) => {
  const content = document.getElementById(id);
  content.style.display = content.style.display === "block" ? "none" : "block";
};

['C', 'F', 'M', 'R'].forEach(letter => {
  window[`toggleDropdown${letter}`] = () => toggleDropdown(`dropdownContent${letter}`);
});

//NOTE - Quantity Increment/Decrement Logic
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".DecAdd").forEach(section => {
    const decButton = section.querySelector(".aDec");
    const addButton = section.querySelector(".bAdd");
    const inputField = section.querySelector(".input");

    const priceContainer = section.parentElement.querySelector(".Price span");
    const pricePerItemText = section.parentElement.querySelector(".priceRtext");

    const basePrice = Number(priceContainer.textContent.replace(/[^\d.]/g, "")) || 0;
    const pricePerItem = Number(pricePerItemText.textContent.replace(/[^\d.]/g, "")) || 0;

    const updatePrice = () => {
      const quantity = Math.max(Number(inputField.value) || 0, 0);
      const totalPrice = pricePerItem * quantity;
      priceContainer.textContent = quantity === 0 ? `₱${basePrice.toFixed(2)}` : `₱${totalPrice.toFixed(2)}`;
    };

    const changeQuantity = (delta) => {
      let currentValue = Math.max(Number(inputField.value) || 0, 0);
      currentValue = Math.max(currentValue + delta, 0);
      inputField.value = currentValue;
      updatePrice();
    };

    decButton.addEventListener("click", () => changeQuantity(-1));
    addButton.addEventListener("click", () => changeQuantity(1));
    inputField.addEventListener("input", updatePrice);

    updatePrice();
  });
});

//NOTE - Payment Modal Logic
document.addEventListener("DOMContentLoaded", () => {
  const payBtn = document.querySelector(".payBtn");
  const modal = document.getElementById("modalWrapper");
  const overlay = document.getElementById("modalOverlay");
  const closeModal = document.querySelector(".closeModal");
  const paymentAmount = document.querySelector(".paymentAmount");
  const priceSpan = document.querySelector(".Price span");

  const toggleModal = (show) => {
    modal.style.display = show ? "inline-flex" : "none";
    overlay.style.display = show ? "block" : "none";
  };

  payBtn.addEventListener("click", () => {
    paymentAmount.textContent = `Amount to pay: ${priceSpan.textContent}`;
    toggleModal(true);
  });

  closeModal.addEventListener("click", () => toggleModal(false));
  overlay.addEventListener("click", () => toggleModal(false));
});

function togglePaymentModal() {
  const wrapper = document.getElementById('modalWrapper');
  wrapper.style.display = wrapper.style.display === 'inline-flex' ? 'none' : 'inline-flex';
}
