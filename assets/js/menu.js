
// ==================== MENU SEARCH ====================

document.addEventListener("DOMContentLoaded", function () {

    // Get the search input
    const searchInput = document.getElementById("menu-search");

    // Get all menu items
    const menuItems = document.querySelectorAll(".menu-item");

    // Get the search message
    const searchMessage = document.getElementById("search-message");

    // Check whether the search elements exist
    if (!searchInput || !searchMessage || menuItems.length === 0) {
        return;
    }

    // Search menu items when the customer types
    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.toLowerCase().trim();

        let visibleItems = 0;

        menuItems.forEach(function (item) {

            const itemText = item.textContent.toLowerCase();

            if (itemText.includes(searchText)) {

                item.style.display = "";
                visibleItems++;

            } else {

                item.style.display = "none";

            }

        });

        // Display the search results
        if (searchText === "") {

            searchMessage.textContent = "Explore our delicious menu.";

        } else if (visibleItems > 0) {

            searchMessage.textContent =
                visibleItems + " menu item(s) found.";

        } else {

            searchMessage.textContent =
                "Sorry, no menu items found. Try another search.";

        }

    });

});
