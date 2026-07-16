/**
 * Agritech - Intelligent Agriculture System
 * Main JavaScript Module
 * Author: Krushna Nawale
 * Email: krushnanawale4142@gmail.com
 */

// Main Application Module
const AgritechApp = {
    // Initialize the application
    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.loadAIFeatures();
        console.log('Agritech App initialized successfully');
    },

    // Setup event listeners
    setupEventListeners() {
        // Navigation smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Contact form handling
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleContactForm);
        }

        // AI recommendation form
        const aiForm = document.getElementById('aiRecommendationForm');
        if (aiForm) {
            aiForm.addEventListener('submit', this.handleAIRecommendation);
        }

        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    },

    // Initialize animations on scroll
    initializeAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        document.querySelectorAll('.card, .feature-card, .ai-features').forEach(el => {
            observer.observe(el);
        });
    },

    // Handle contact form submission
    handleContactForm(e) {
        // Allow form to submit normally to FormSubmit
        setTimeout(() => {
            AgritechApp.showNotification('Thank you! Your message has been sent successfully.', 'success');
        }, 100);
    },

    // Handle AI recommendation form
    handleAIRecommendation(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const cropType = formData.get('cropType');
        const soilType = formData.get('soilType');
        const season = formData.get('season');
        const farmSize = formData.get('farmSize');

        // Get AI recommendation
        const recommendation = AgritechApp.AIEngine.getFertilizerRecommendation({
            cropType,
            soilType,
            season,
            farmSize: parseFloat(farmSize)
        });

        // Display recommendation
        AgritechApp.displayRecommendation(recommendation);
    },

    // Display AI recommendation results
    displayRecommendation(recommendation) {
        const resultsContainer = document.getElementById('aiResults');
        if (!resultsContainer) return;

        resultsContainer.innerHTML = `
            <div class="recommendation-card">
                <h3>🌱 AI Fertilizer Recommendation</h3>
                <div class="recommendation-details">
                    <div class="detail-item">
                        <strong>Primary Fertilizer:</strong> ${recommendation.primaryFertilizer}
                    </div>
                    <div class="detail-item">
                        <strong>Secondary Fertilizer:</strong> ${recommendation.secondaryFertilizer}
                    </div>
                    <div class="detail-item">
                        <strong>Application Rate:</strong> ${recommendation.applicationRate}
                    </div>
                    <div class="detail-item">
                        <strong>Best Application Time:</strong> ${recommendation.applicationTime}
                    </div>
                    <div class="detail-item">
                        <strong>Expected Yield Increase:</strong> ${recommendation.yieldIncrease}
                    </div>
                    <div class="detail-item">
                        <strong>Cost Estimate:</strong> ₹${recommendation.costEstimate}
                    </div>
                </div>
                <div class="recommendation-notes">
                    <h4>📋 Additional Notes:</h4>
                    <ul>
                        ${recommendation.notes.map(note => `<li>${note}</li>`).join('')}
                    </ul>
                </div>
                <div class="confidence-score">
                    <span>Confidence Score: ${recommendation.confidence}%</span>
                    <div class="confidence-bar">
                        <div class="confidence-fill" style="width: ${recommendation.confidence}%"></div>
                    </div>
                </div>
            </div>
        `;

        resultsContainer.scrollIntoView({ behavior: 'smooth' });
        this.showNotification('AI recommendation generated successfully!', 'success');
    },

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);

        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    },

    // Load AI features
    loadAIFeatures() {
        // Initialize AI recommendation system
        if (typeof AIEngine !== 'undefined') {
            console.log('AI Engine loaded successfully');
        }
    }
};

// Utility functions
const Utils = {
    // Format currency
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(amount);
    },

    // Validate email
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
};

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Fade-In Animation for Sections on Scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Footer Fade-In on Scroll
window.addEventListener('scroll', () => {
    const footer = document.querySelector('.footer-note');
    if (footer && window.scrollY + window.innerHeight > footer.offsetTop + 50) {
        footer.classList.add('visible');
    }
});

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    AgritechApp.init();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AgritechApp, Utils };
}
