document.addEventListener('DOMContentLoaded', function() {
    const elements = {
        petBtn: document.querySelectorAll('.btn-full'),
        petAllBtn: document.querySelector('#btn-select-all'),
        unpetAllBtn: document.querySelector('#btn-unselect-all'),
        lastBtn: document.querySelector('#btn-select-last'),
        firstBtn: document.querySelector('#btn-select-first'),
        nextBtn: document.querySelector('#btn-select-next'),
        prevBtn: document.querySelector('#btn-select-previous'),
        barkBanner: document.querySelector('.banner-content'),
        cards: document.querySelectorAll('.card')
    };
    
    let currentHighlightedIndex = 0;
    
    init();
    
    function init() {
        highlightCard(currentHighlightedIndex);
        setupEventListeners();
    }
    
    function setupEventListeners() {
        elements.petBtn.forEach(button => {
            button.addEventListener('click', handlePetButtonClick);
        });
        
        elements.petAllBtn.addEventListener('click', petAll);
        elements.unpetAllBtn.addEventListener('click', unpetAll);
        elements.lastBtn.addEventListener('click', selectLastCard);
        elements.firstBtn.addEventListener('click', selectFirstCard);
        elements.nextBtn.addEventListener('click', selectNextCard);
        elements.prevBtn.addEventListener('click', selectPreviousCard);
        
        elements.barkBanner.addEventListener('click', animateLogo);
    }
    
    function handlePetButtonClick() {
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
    }
    
    function petAll() {
        elements.petBtn.forEach(button => {
            const icon = button.querySelector('i');
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        });
    }
    
    function unpetAll() {
        elements.petBtn.forEach(button => {
            const icon = button.querySelector('i');
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        });
    }
    
    function selectLastCard() {
        currentHighlightedIndex = elements.cards.length - 1;
        highlightCard(currentHighlightedIndex);
    }
    
    function selectFirstCard() {
        currentHighlightedIndex = 0;
        highlightCard(currentHighlightedIndex);
    }
    
    function selectNextCard() {
        currentHighlightedIndex = (currentHighlightedIndex + 1) % elements.cards.length;
        highlightCard(currentHighlightedIndex);
    }
    
    function selectPreviousCard() {
        currentHighlightedIndex = (currentHighlightedIndex - 1 + elements.cards.length) % elements.cards.length;
        highlightCard(currentHighlightedIndex);
    }
    
    function animateLogo() {
        this.classList.add('animate__animated', 'animate__swing');
    this.addEventListener('animationend', function() {
        this.classList.remove('animate__animated', 'animate__swing');
    }, { once: true });
    }
    
    function highlightCard(index) {
        elements.cards.forEach(card => {
            card.classList.remove('card-selected', 'active');
        });
        
        elements.cards[index].classList.add('card-selected', 'active');
        
        currentHighlightedIndex = index;
    }
});