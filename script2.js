document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const closeButton = document.getElementById('close-button');

    menuToggle.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        sidebarMenu.classList.toggle('show'); // Toggle the sidebar menu
    });

    closeButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        sidebarMenu.classList.remove('show'); // Hide the sidebar menu
    });
});


// List of all shoes with their categories
const shoes = [
    { name: "Γόβα 1", category: "Γυναικεία: Γόβες", price: "50€", imageUrl1: "images/shoes/gova1.jpg", imageUrl2: "images/shoes/gova2.jpg", imageUrl3: "images/shoes/gova3.jpg", description: "Elegant high heel shoes." },
    { name: "Γόβα 2", category: "Γυναικεία: Γόβες", price: "55€", imageUrl1: "images/shoes/gova1.jpg", imageUrl2: "images/shoes/gova2.jpg", imageUrl3: "images/shoes/gova3.jpg", description: "Elegant high heel shoes." },
    { name: "Μποτάκι 1", category: "Γυναικεία: Μποτάκια", price: "70€", imageUrl1: "images/shoes/botaki1.jpg", imageUrl2: "images/shoes/botaki2.jpg", imageUrl3: "images/shoes/botaki3.jpg", description: "Comfortable ankle boots." },
    { name: "Μποτάκι 2", category: "Γυναικεία: Μποτάκια", price: "75€", imageUrl1: "images/shoes/botaki1.jpg", imageUrl2: "images/shoes/botaki2.jpg", imageUrl3: "images/shoes/botaki3.jpg", description: "Stylish ankle boots." },
    { name: "Ανδρικό Sneakers 1", category: "Ανδρικά: Ανδρικά-Sneakers", price: "80€", imageUrl1: "images/shoes/andrika_sneaker1.jpg", imageUrl2: "images/shoes/andrika_sneaker2.jpg", imageUrl3: "images/shoes/andrika_sneaker3.jpg", description: "Stylish sneakers for men." },
    { name: "Ανδρικό Σκαρπίνι 1", category: "Ανδρικά: Ανδρικά-Σκαρπίνια", price: "90€", imageUrl1: "images/shoes/andrika_skarpinia1.jpg", imageUrl2: "images/shoes/andrika_skarpinia2.jpg", imageUrl3: "images/shoes/andrika_skarpinia3.jpg", description: "Elegant men's shoes." },
    { name: "Γυναικεία Sneakers 1", category: "Γυναικεία: Sneakers", price: "65€", imageUrl1: "images/shoes/sneaker1.jpg", imageUrl2: "images/shoes/sneaker2.jpg", imageUrl3: "images/shoes/sneaker3.jpg", description: "Comfortable women's sneakers." },
    { name: "Νυφικά 1", category: "Νυφικά", price: "65€", imageUrl1: "images/shoes/sneaker1.jpg", imageUrl2: "images/shoes/sneaker2.jpg", imageUrl3: "images/shoes/sneaker3.jpg", description: "Comfortable women's sneakers." }
    // Add other shoes here as needed
];

// Function to display shoes based on category
function loadPage(category) {
    const shoeCollectionDiv = document.getElementById("shoe-collection");
    shoeCollectionDiv.innerHTML = '';  // Clear previous content

    // If the category is 'Γυναικεία' or 'Ανδρικά', show all shoes in that category
    const filteredShoes = shoes.filter(shoe => shoe.category.startsWith(category));

    if (filteredShoes.length > 0) {
        // Create shoe cards for the filtered shoes
        filteredShoes.forEach(shoe => {
            const shoeCard = document.createElement('div');
            shoeCard.classList.add('shoe-card');
            shoeCard.innerHTML = `
                <img src="${shoe.imageUrl1}" alt="${shoe.name}" class="shoe-image">
                <h3 class="shoe-name">${shoe.name}</h3>
                <p class="shoe-price">${shoe.price}</p>
                <p class="shoe-description">${shoe.description}</p>
                <div class="shoe-images">
                    <img src="${shoe.imageUrl2}" alt="${shoe.name} image 2" class="shoe-image-thumbnail">
                    <img src="${shoe.imageUrl3}" alt="${shoe.name} image 3" class="shoe-image-thumbnail">
                </div>
            `;
            shoeCollectionDiv.appendChild(shoeCard);
        });
    } else {
        shoeCollectionDiv.innerHTML = `<p>No shoes available in this category.</p>`;
    }
}

// Optional: Load a default category (e.g., "Γυναικεία") on page load
window.onload = function() {
    loadPage('Γυναικεία');  // Default category: Display all "Γυναικεία" shoes
};