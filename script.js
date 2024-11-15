document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const closeButton = document.getElementById('close-button');

    // Toggle sidebar menu visibility
    menuToggle.addEventListener('click', function (event) {
        event.preventDefault();
        sidebarMenu.classList.toggle('show');
    });

    closeButton.addEventListener('click', function (event) {
        event.preventDefault();
        sidebarMenu.classList.remove('show');
    });

    const backButton = document.getElementById('backBtn');
    const nextButton = document.getElementById('nextBtn');
    const gallery = document.querySelector('.gallery');
    
    // Function to determine the scroll amount based on screen size
    function getScrollAmount() {
        const screenWidth = window.innerWidth;
    
        // For smaller screens (e.g., mobile), scroll by the width of one image + 10px extra
        if (screenWidth <= 768) {  // Adjust this width threshold if necessary
            const firstItem = gallery.querySelector('span');  // Select the first image container <span>
            const itemWidth = firstItem ? firstItem.offsetWidth : 0;
            return itemWidth + 10;  // Add 10px to the width of one image
        } else {
            // For larger screens, scroll 420px as per your original code
            return 420;
        }
    }
    
    // Event listener for the back button
    backButton.addEventListener('click', () => {
        gallery.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });
    
    // Event listener for the next button
    nextButton.addEventListener('click', () => {
        gallery.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });
    

    // Gallery hover effect
    document.querySelectorAll('.gallery span').forEach(span => {
        span.addEventListener('mouseenter', function () {
            document.querySelectorAll('.gallery span').forEach(sibling => {
                if (sibling !== this) {
                    sibling.classList.add('blur');
                }
            });
        });

        span.addEventListener('mouseleave', function () {
            document.querySelectorAll('.gallery span').forEach(sibling => {
                sibling.classList.remove('blur');
            });
        });
    });

    const shoeCollection = [
        {   name: "Γόβα με άσπρες λεπτομέρειες ~1001~", 
            category: ["Γυναικεία: Γόβες" , "Νέες Παραλαβές"], 
            price: "50€", 
            imageUrl1: "images/shoe collection img/11304.jpg.webp", 
            imageUrl2: "images/shoe collection img/11305.jpg.webp", 
            imageUrl3: "images/shoe collection img/11306.jpg.webp", 
            description: "Αυτή η γόβα είναι ο ορισμός της κομψότητας και της άνεσης. Κατασκευασμένη από υψηλής ποιότητας δέρμα, προσφέρει άψογη εφαρμογή και στήριξη σε κάθε βήμα. Η λεπτή και κομψή γραμμή της, μαζί με την αριστοκρατική τακούνι, την καθιστούν την ιδανική επιλογή για κάθε περίσταση, από επαγγελματικές συναντήσεις μέχρι βραδινές εξόδους. Αυτή η γόβα είναι ο ορισμός της κομψότητας και της άνεσης.<br><br> Κατασκευασμένη από υψηλής ποιότητας δέρμα, προσφέρει άψογη εφαρμογή και στήριξη σε κάθε βήμα. Η λεπτή και κομψή γραμμή της, μαζί με την αριστοκρατική τακούνι, την καθιστούν την ιδανική επιλογή για κάθε περίσταση, από επαγγελματικές συναντήσεις μέχρι βραδινές εξόδους." },

        {   name: "Gabriela Valeri Handmade Γυναικείο Μποτάκι με Τοκάδες ~1101~", 
            category: ["Γυναικεία: Μποτάκια", "Νέες Παραλαβές"], 
            price: "55€", 
            imageUrl1: "images/shoe collection img/Handmade-Γυναικείο-Μποτάκι-Gabriela-Valeri-με-Τοκάδες-600-1b.jpg", 
            imageUrl2: "images/shoe collection img/Handmade-Γυναικείο-Μποτάκι-Gabriela-Valeri-με-Τοκάδες-600-2c.jpg", 
            imageUrl3: "images/shoe collection img/Handmade-Γυναικείο-Μποτάκι-Gabriela-Valeri-με-Τοκάδες-600a.jpg", 
            description: "Elegant high heel shoes." },

        {   name: "Gabriela Valeri Handmade Γόβα Με Μαύρο Glitter και Μαύρη Διαφάνεια ~1002~", 
            category: ["Γυναικεία: Γόβες", "Νέες Παραλαβές"], 
            price: "70€", 
            imageUrl1: "images/shoe collection img/TZS_7996a.jpg", 
            imageUrl2: "images/shoe collection img/TZS_7997b.jpg", 
            imageUrl3: "images/shoe collection img/TZS_7998c.jpg", 
            description: "Comfortable ankle boots." },

        {   name: "Gabriela Valeri Handmade Γόβα με ιδιαίτερο Φιόγκο ~1003~", 
            category: ["Γυναικεία: Γόβες", "Νέες Παραλαβές"], 
            price: "80€", 
            imageUrl1: "images/shoe collection img/157666515674197496-19b.jpg", 
            imageUrl2: "images/shoe collection img/157666515674197496-1-15c.jpg", 
            imageUrl3: "images/shoe collection img/157666515674197496-2-9a.jpg", 
            description: "Stylish sneakers for men." },

        {   name: "Gabriela Valeri Χρυσή Γόβα με Κόσμημα ~1023~", 
            category: ["Γυναικεία: Γόβες", "Νέες Παραλαβές"], 
            price: "90€", 
            imageUrl1: "images/shoe collection img/11293a.jpg", 
            imageUrl2: "images/shoe collection img/11294b.jpg", 
            imageUrl3: "images/shoe collection img/11296c.jpg", 
            description: "Elegant men's shoes." },

        {   name: "Loafers ~1601~", 
            category: ["Γυναικεία: Loafers", "Νέες Παραλαβές"], 
            price: "65€", 
            imageUrl1: "images/shoe collection img/5566a.jpg", 
            imageUrl2: "images/shoe collection img/5567b.jpg", 
            imageUrl3: "images/shoe collection img/5568c.jpg", 
            description: "Comfortable women's sneakers." },

        {   name: "Gabriela Valeri Χρυσή-Ρόζ Γόβα με Κόσμημα ~1024~ ", 
            category: ["Γυναικεία: Γόβες", "Νέες Παραλαβές"], 
            price: "65€", 
            imageUrl1: "images/shoe collection img/11297a.jpg", 
            imageUrl2: "images/shoe collection img/11298b.jpg", 
            imageUrl3: "images/shoe collection img/11300c.jpg", 
            description: "Comfortable women's sneakers." },

        {   name: "Γυναικεία Μαύρα Μποτάκια ~1401~", 
            category: ["Γυναικεία: Μποτάκια", "Νέες Παραλαβές"], 
            price: "65€", 
            imageUrl1: "images/shoe collection img/Gabriela-Valeri-Χειροποίητα-Μοντέρνα-Μποτάκια-INF-1b.jpg", 
            imageUrl2: "images/shoe collection img/Gabriela-Valeri-Χειροποίητα-Μοντέρνα-Μποτάκια-INF-2c.jpg", 
            imageUrl3: "images/shoe collection img/Gabriela-Valeri-Χειροποίητα-Μοντέρνα-Μποτάκια-INFa.jpg", 
            description: "Comfortable women's sneakers." }
    ];
    
    

    // Utility function to create and display a shoe item
    function createShoeItem(shoe) {
        const shoeItem = document.createElement('div');
        shoeItem.className = 'shoe-item';

        shoeItem.innerHTML = `
            <img src="${shoe.imageUrl1}" alt="${shoe.name}">
            <h3>${shoe.name}</h3>
            <p>${shoe.category.map(cat => trimCategoryName(cat)).join(', ')}</p>
            <p>Τιμή: ${shoe.price}</p>
        `;

        shoeItem.addEventListener('click', () => openShoeDetails(shoe));
        return shoeItem;
    }

    let displayedCount = 0;

    // Display initial set of shoes on the index page
    function displayShoes() {
        const collectionContainer = document.querySelector('.shoe-collection');
        if (collectionContainer) {
            const incrementCount = 12; // Number of items to show initially
            const initialShoes = shoeCollection.slice(0, incrementCount);
            initialShoes.forEach(shoe => collectionContainer.appendChild(createShoeItem(shoe)));
            displayedCount = incrementCount;

            if (displayedCount >= shoeCollection.length) {
                document.getElementById('show-more').style.display = 'none';
            }
        }
    }

    // Show more shoes on index page
    function showMoreShoes() {
        const collectionContainer = document.querySelector('.shoe-collection');
        const incrementCount = 4;
        const shoesToShow = shoeCollection.slice(displayedCount, displayedCount + incrementCount);

        if (shoesToShow.length > 0) {
            shoesToShow.forEach(shoe => collectionContainer.appendChild(createShoeItem(shoe)));
            displayedCount += incrementCount;
        }

        if (displayedCount >= shoeCollection.length) {
            document.getElementById('show-more').style.display = 'none';
        }
    }

    function filterShoesByCategory(category) {
        const categoryUrl = `categories.html?category=${encodeURIComponent(category)}`;
        window.history.pushState({ path: categoryUrl }, '', categoryUrl);
        displayShoesByCategory(); // Trigger category filtering without page reload
    }

    // Display shoes by category on category page
    

    function getCategoryFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        console.log('Category from URL:', category); // Add this line to debug
        return category;
    }
    

    // Trim "Γυναικεία" or "Ανδρικά" prefix from category
    function trimCategoryName(category) {
        if (category.startsWith('Γυναικεία: ')) return category.replace('Γυναικεία: ', '');
        if (category.startsWith('Ανδρικά: ')) return category.replace('Ανδρικά: ', '');
        return category;
    }

    // Initialize based on page
    if (document.body.id === 'index') {
        displayShoes();
        document.getElementById('show-more').addEventListener('click', showMoreShoes);
    } else if (document.body.id === 'categories') {
        displayShoesByCategory();
    }

    // Show more shoes when clicking the button
function showMoreShoes() {
    const collectionContainer = document.querySelector('.shoe-collection');
    const incrementCount = 4;
    const shoesToShow = shoeCollection.slice(displayedCount, displayedCount + incrementCount);

    if (shoesToShow.length > 0) {
        shoesToShow.forEach(shoe => {
            const shoeItem = createShoeItem(shoe);
            collectionContainer.appendChild(shoeItem);
        });
        displayedCount += incrementCount;
    }

    if (displayedCount >= shoeCollection.length) {
        document.getElementById('show-more').style.display = 'none';
    }
}

// Open shoe details in a modal
function openShoeDetails(shoe) {
    const newDiv = document.createElement('div');
    newDiv.className = 'new-shoe-div';

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    newDiv.innerHTML = `
        <button class="close-button">X</button>
        <div class="shoe-content">
            <div class="image-container">
                <img class="shoe-image" src="${shoe.imageUrl1}" alt="${shoe.name}">
                <div class="image-buttons">
                    <label for="image1">
                        <input type="radio" id="image1" name="shoe-image" value="${shoe.imageUrl1}" checked>
                    </label>
                    <label for="image2">
                        <input type="radio" id="image2" name="shoe-image" value="${shoe.imageUrl2}">
                    </label>
                    <label for="image3">
                        <input type="radio" id="image3" name="shoe-image" value="${shoe.imageUrl3}">
                    </label>
                </div>
            </div>
            <div class="shoe-info">
                <h3>${shoe.name}</h3>
                <p class="description">${shoe.description}</p>
                <div class="shoe-footer">
                    <p class="category">
                        ${shoe.category.map(cat => `<span>${trimCategoryName(cat)}</span>`).join(' ')}
                    </p>
                    <p class="price">Τιμή: <span>${shoe.price}</span></p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(newDiv);

    const radioButtons = newDiv.querySelectorAll('.image-buttons input[type="radio"]');
    const mainImage = newDiv.querySelector('.shoe-image');

    function updateActiveState() {
        const labels = newDiv.querySelectorAll('.image-buttons label');
        labels.forEach(label => label.classList.remove('active'));

        const selectedRadio = Array.from(radioButtons).find(radio => radio.checked);
        const selectedImage = selectedRadio.value;
        mainImage.src = selectedImage;

        const selectedLabel = newDiv.querySelector(`label[for="${selectedRadio.id}"]`);
        selectedLabel.classList.add('active');
    }

    radioButtons.forEach(button => button.addEventListener('change', updateActiveState));

    // Close button functionality
    const closeButton = newDiv.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        newDiv.remove();
        overlay.remove();
    });

    overlay.addEventListener('click', () => {
        newDiv.remove();
        overlay.remove();
    });
}

const categoryLinks = document.querySelectorAll('.category-link');
    
    // Add event listeners to each link
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the default anchor behavior
            
            // Get the category from the data attribute
            const category = event.target.dataset.category;
            
            // Call the function to filter by category
            filterShoesByCategory(category);
        });
    });


});
