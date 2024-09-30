document.addEventListener("DOMContentLoaded", () => {
  const wishlistForm = document.getElementById("wishlist-form");
  const wishlistItems = document.getElementById("wishlist-items");

  // Event listener to add an item
  wishlistForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the value of the input
    const itemInput = document.getElementById("item-input");
    const itemName = itemInput.value.trim();

    if (itemName !== "") {
      // Create the new list item
      const li = document.createElement("li");
      li.classList.add("list-group-item", "wishlist-item");
      li.innerHTML = `
          ${itemName}
          <button class="btn btn-danger btn-sm float-right remove-btn">Remove</button>
        `;

      // Append the item to the list
      wishlistItems.appendChild(li);

      // Clear the input
      itemInput.value = "";
    }
  });

  // Event listener to remove an item
  wishlistItems.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
      const itemToRemove = e.target.parentElement;
      wishlistItems.removeChild(itemToRemove);
    }
  });
});
