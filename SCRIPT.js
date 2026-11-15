const categoryButtons = document.querySelectorAll(".menu-buttons button");
const products = document.querySelectorAll(".product-card");

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        products.forEach(product => {

            if (category === "all" || product.dataset.category === category) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });
    });
});