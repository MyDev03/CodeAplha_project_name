document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.querySelectorAll(".filter-buttonshere button");
    const images = document.querySelectorAll(".image");

    filterButton.forEach((button) => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("datafilters");
            filterImages(filterValue);
        });
    });

    function filterImages(category) {
        images.forEach((image) => {
            const imageCategories = image.classList;
            if (category === "all" || imageCategories.contains(category)) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }
});
