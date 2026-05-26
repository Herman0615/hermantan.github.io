// Language Toggle Logic
function setLanguage(lang) {
    document.body.setAttribute('data-lang', lang);
    
    // Update button styles
    const btnEn = document.getElementById('btn-en');
    const btnCn = document.getElementById('btn-cn');
    
    if(lang === 'en') {
        btnEn.className = "px-3 py-1 rounded-md text-sm font-medium bg-white dark:bg-slate-600 shadow-sm transition-all";
        btnCn.className = "px-3 py-1 rounded-md text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 transition-all";
    } else {
        btnCn.className = "px-3 py-1 rounded-md text-sm font-medium bg-white dark:bg-slate-600 shadow-sm transition-all";
        btnEn.className = "px-3 py-1 rounded-md text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 transition-all";
    }
}

// Dark Mode Logic
const themeToggleBtn = document.getElementById('theme-toggle');

// Check for saved theme preference. Default to dark mode if none is saved.
if (localStorage.getItem('color-theme') === 'light') {
    document.documentElement.classList.remove('dark');
} else {
    document.documentElement.classList.add('dark');
}

themeToggleBtn.addEventListener('click', function() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});

// PDF Popup Logic
const popup = document.getElementById("pdfPopup");
const pdfViewer = document.getElementById("pdfViewer");
const pdfPlaceholder = document.getElementById("pdfPlaceholder");

function openPopup() {
    popup.classList.remove("hidden");
    popup.classList.add("flex");
}

function closePopup() {
    popup.classList.add("hidden");
    popup.classList.remove("flex");
    pdfViewer.src = "";
    pdfViewer.classList.add("hidden");
}

function showPDF(url) {
    pdfViewer.src = url;
    pdfViewer.classList.remove("hidden");
}

// Close popup if clicking outside of the content box
popup.addEventListener('click', function(e) {
    if (e.target === popup) {
        closePopup();
    }
});

// Game Popup Logic
const gamePopup = document.getElementById("gamePopup");

function openGamePopup() {
    gamePopup.classList.remove("hidden");
    gamePopup.classList.add("flex");
}

function closeGamePopup() {
    gamePopup.classList.add("hidden");
    gamePopup.classList.remove("flex");
}

// Update the outside-click listener to handle BOTH popups
window.addEventListener('click', function(e) {
    if (e.target === popup) {
        closePopup(); // Closes PDF popup
    }
    if (e.target === gamePopup) {
        closeGamePopup(); // Closes Game popup
    }
});