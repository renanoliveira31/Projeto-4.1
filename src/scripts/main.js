document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    var dropdownLists = document.querySelectorAll(".dropdown-list");

    dropdownToggles.forEach(function(dropdownToggle, index) {
        dropdownToggle.addEventListener("click", function() {
            dropdownLists.forEach(function(dropdown) {
                dropdown.style.display = "none";
            });
            dropdownLists[index].style.display = "block";
        });
    });

    document.addEventListener("click", function(event) {
        if (!event.target.classList.contains("dropdown-toggle")) {
            dropdownLists.forEach(function(dropdown) {
                dropdown.style.display = "none";
            });
        }
    });
});

function toggleDropdown(index) {
    var dropdownList = document.getElementById(`dropdown-list-${index}`);
    dropdownList.style.display = dropdownList.style.display === "block" ? "none" : "block";
}
