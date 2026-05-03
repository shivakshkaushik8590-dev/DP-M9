window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Reveal animations on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, observerOptions);

document.querySelectorAll('.concept-text, .menu-item, .experience-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// Custom reveal logic
const style = document.createElement('style');
style.innerHTML = `
    .reveal-active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Function to set custom images if they exist
// Note: In a production environment, these would be relative paths.
const setGeneratedImages = () => {
    const hero = document.querySelector('.hero');
    const interior = document.getElementById('img-interior');
    
    // We can't directly access the local brain paths via web browser in standard dev servers
    // but we can try to use standard placeholders or instructions for the user.
    // However, I will set them here just in case the environment allows it.
    
    /* 
    hero.style.backgroundImage = 'url("C:/Users/shiva/.gemini/antigravity/brain/83557db7-7b03-461f-abf4-21751d7b89fa/cafe_hero_shot_1776350892500.png")';
    interior.style.backgroundImage = 'url("C:/Users/shiva/.gemini/antigravity/brain/83557db7-7b03-461f-abf4-21751d7b89fa/cafe_interior_lux_1776350936088.png")';
    */
};

// Chatbot Toggle Logic
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChatbot = document.getElementById('close-chatbot');

if (chatbotToggle && chatbotContainer && closeChatbot) {
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.add('active');
        chatbotToggle.style.opacity = '0';
        chatbotToggle.style.pointerEvents = 'none';
    });

    closeChatbot.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
        chatbotToggle.style.opacity = '1';
        chatbotToggle.style.pointerEvents = 'all';
    });
}
