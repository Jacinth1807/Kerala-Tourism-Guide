document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const classificationSection = document.getElementById('classification-section');
    const classificationButtonsContainer = document.getElementById('classification-buttons');
    const resultsTitle = document.getElementById('results-title');

    if (!categoryButtons.length) {
        return;
    }

    const classifications = {
        Hotels: `
            <button class="px-5 py-2 text-base font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center gap-1">1 Star ★</button>
            <button class="px-5 py-2 text-base font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center gap-1">2 Star ★★</button>
            <button class="px-5 py-2 text-base font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center gap-1">3 Star ★★★</button>
            <button class="px-5 py-2 text-base font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center gap-1">4 Star ★★★★</button>
            <button class="px-5 py-2 text-base font-medium text-yellow-600 bg-yellow-100 rounded-full hover:bg-yellow-200 transition flex items-center gap-1">5 Star ★★★★★</button>
            <button class="px-5 py-2 text-base font-medium text-purple-600 bg-purple-100 rounded-full hover:bg-purple-200 transition">5 Star Deluxe</button>
            <button class="px-5 py-2 text-base font-medium text-amber-700 bg-amber-100 rounded-full hover:bg-amber-200 transition">Heritage</button>
            <button class="px-5 py-2 text-base font-medium text-amber-700 bg-amber-100 rounded-full hover:bg-amber-200 transition">Heritage Classic</button>
            <button class="px-5 py-2 text-base font-medium text-amber-700 bg-amber-100 rounded-full hover:bg-amber-200 transition">Heritage Grand</button>
        `,
        Restaurants: `
            <button class="px-5 py-2 text-base font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center gap-1">1 Star ★</button>
            <button class="px-5 py-2 text-base font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center gap-1">2 Star ★★</button>
            <button class="px-5 py-2 text-base font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center gap-1">3 Star ★★★</button>
            <button class="px-5 py-2 text-base font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center gap-1">4 Star ★★★★</button>
            <button class="px-5 py-2 text-base font-medium text-yellow-600 bg-yellow-100 rounded-full hover:bg-yellow-200 transition flex items-center gap-1">5 Star ★★★★★</button>
        `,
        Resorts: 'self:Restaurants', 
        Homestays: `
            <button class="px-5 py-2 text-base font-medium text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 transition">Silver</button>
            <button class="px-5 py-2 text-base font-medium text-yellow-500 bg-yellow-100 rounded-full hover:bg-yellow-200 transition">Gold</button>
            <button class="px-5 py-2 text-base font-medium text-blue-400 bg-blue-100 rounded-full hover:bg-blue-200 transition">Diamond</button>
        `,
        Houseboats: `
            <button class="px-5 py-2 text-base font-medium text-blue-400 bg-blue-100 rounded-full hover:bg-blue-200 transition">Diamond Vessel</button>
            <button class="px-5 py-2 text-base font-medium text-yellow-500 bg-yellow-100 rounded-full hover:bg-yellow-200 transition">Gold Star</button>
            <button class="px-5 py-2 text-base font-medium text-yellow-500 bg-yellow-100 rounded-full hover:bg-yellow-200 transition">Gold Vessel</button>
            <button class="px-5 py-2 text-base font-medium text-green-500 bg-green-100 rounded-full hover:bg-green-200 transition">Green Palm</button>
            <button class="px-5 py-2 text-base font-medium text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 transition">Silver Star</button>
            <button class="px-5 py-2 text-base font-medium text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 transition">Silver Vessel</button>
        `,
        Ayurveda: `
            <button class="px-5 py-2 text-base font-medium text-blue-400 bg-blue-100 rounded-full hover:bg-blue-200 transition">Ayur Diamond</button>
            <button class="px-5 py-2 text-base font-medium text-yellow-500 bg-yellow-100 rounded-full hover:bg-yellow-200 transition">Ayur Gold</button>
            <button class="px-5 py-2 text-base font-medium text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 transition">Ayur Silver</button>
            <button class="px-5 py-2 text-base font-medium text-green-500 bg-green-100 rounded-full hover:bg-green-200 transition">Green Leaf</button>
            <button class="px-5 py-2 text-base font-medium text-lime-600 bg-lime-100 rounded-full hover:bg-lime-200 transition">Olive Leaf</button>
        `
    };

    function updateClassifications(category) {
        let classificationHTML = classifications[category];
        
        if (classificationHTML && classificationHTML.startsWith('self:')) {
            const refCategory = classificationHTML.split(':')[1];
            classificationHTML = classifications[refCategory];
        }

        if (classificationHTML) {
            classificationButtonsContainer.innerHTML = classificationHTML;
            classificationSection.style.display = 'block';
        } else {
            classificationSection.style.display = 'none';
        }
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            categoryButtons.forEach(btn => {
                btn.classList.remove('bg-green-100', 'text-green-700');
                btn.classList.add('bg-gray-100', 'text-gray-700');
            });
            this.classList.add('bg-green-100', 'text-green-700');
            this.classList.remove('bg-gray-100', 'text-gray-700');
            
            const category = this.dataset.category;
            resultsTitle.textContent = `Showing Results for "${category}"`;
            updateClassifications(category);
        });
    });

    updateClassifications('Hotels');
});

