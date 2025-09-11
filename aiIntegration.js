// AI Integration for Agritech - Intelligent Agriculture System
// Developed by Krushna Nawale

function getAIProjectOverview() {
    return `
        Agritech is an intelligent agriculture system designed by Krushna Nawale.
        It helps farmers monitor crops, recommends fertilizers, predicts crop health risks,
        and provides actionable insights using simple AI logic and clean design.
        
        This project demonstrates practical applications of technology in agriculture,
        developed as part of project at KIT.
    `;
}

// Smooth scrolling functions
function scrollToAI() {
    document.getElementById('ai-features').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Agritech AI Navigation
function showAIModal() {
    const modal = document.createElement('div');
    modal.className = 'ai-modal';
    modal.innerHTML = `
        <div class="ai-modal-content">
            <span class="close-modal">&times;</span>
            <h2>🤖 Agritech AI Assistant</h2>
            <div class="ai-features-list">
                <div class="ai-feature-item">
                    <h3>🌱 Smart Fertilizer Recommendations</h3>
                    <p>Get AI-powered fertilizer suggestions based on your crop type, soil conditions, and local climate data.</p>
                </div>
                <div class="ai-feature-item">
                    <h3>📊 Crop Health Monitoring</h3>
                    <p>Monitor your crop health with intelligent analysis and get early warnings about potential issues.</p>
                </div>
                <div class="ai-feature-item">
                    <h3>🌤️ Weather-Based Farming Advice</h3>
                    <p>Receive seasonal recommendations and smart farming tips based on weather patterns and forecasts.</p>
                </div>
            </div>
            <button onclick="scrollToAI(); closeModal()" class="ai-modal-btn">Try AI Features</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('.close-modal').onclick = closeModal;
    modal.onclick = function(e) {
        if (e.target === modal) closeModal();
    };
}

function closeModal() {
    const modal = document.querySelector('.ai-modal');
    if (modal) {
        modal.remove();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const aiOverviewButton = document.getElementById('aiOverviewButton');
    if (aiOverviewButton) {
        aiOverviewButton.addEventListener('click', () => {
            alert(getAIProjectOverview());
        });
    }
    
    const agritechAI = document.getElementById('agritechAI');
    if (agritechAI) {
        agritechAI.addEventListener('click', (e) => {
            e.preventDefault();
            showAIModal();
        });
    }
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Add scroll animation class to elements
    const animateElements = document.querySelectorAll('.ai-feature-card, .product-card');
    animateElements.forEach(el => {
        el.classList.add('scroll-animation');
        observer.observe(el);
    });
});

// Enhanced AI Fertilizer recommendation system with comprehensive database
async function getFertilizerRecommendation(cropType) {
    const recommendations = {
        'wheat': {
            primary: 'NPK 20-20-20 for optimal growth',
            details: 'Apply 120kg/hectare at sowing, 60kg/hectare at tillering stage. Add 20kg Zinc sulphate for better root development.',
            timing: 'Basal dose at sowing, top dressing at 21-25 days after sowing',
            organic: 'Compost 5-10 tons/hectare + Vermicompost 2 tons/hectare',
            micronutrients: 'Zinc, Iron, Manganese essential for grain filling'
        },
        'cotton': {
            primary: 'NPK 17-17-17 with high Potassium',
            details: 'Apply 150kg/hectare NPK + 50kg/hectare Potash. Essential for fiber quality and boll development.',
            timing: 'Basal application + 2 top dressings at 45 and 75 days after sowing',
            organic: 'FYM 10-15 tons/hectare + Neem cake 200kg/hectare',
            micronutrients: 'Boron 10kg/hectare, Zinc 25kg/hectare for better flowering'
        },
        'rice': {
            primary: 'NPK 20-10-10 in split doses',
            details: 'Total 120kg N, 60kg P2O5, 40kg K2O per hectare. Apply in 3 splits for better utilization.',
            timing: 'Basal: 50% N + full P&K, Top dress: 25% N at tillering, 25% N at panicle initiation',
            organic: 'Green manure + Azolla cultivation + Blue-green algae',
            micronutrients: 'Silicon for stem strength, Zinc for tillering'
        },
        'soybean': {
            primary: 'NPK 10-26-26 Phosphorus-rich',
            details: 'Apply 20kg N, 60kg P2O5, 40kg K2O per hectare. Phosphorus crucial for nodulation.',
            timing: 'Full dose as basal application at sowing',
            organic: 'Rhizobium inoculation + PSB culture + Vermicompost 3 tons/hectare',
            micronutrients: 'Molybdenum 1kg/hectare for nitrogen fixation'
        },
        'mustard': {
            primary: 'NPK 20-20-0-13 with Sulphur',
            details: 'Apply 80kg N, 40kg P2O5, 40kg K2O + 30kg Sulphur per hectare. Sulphur critical for oil content.',
            timing: 'Basal: 50% N + full P,K,S. Top dress: 50% N at 30-35 days after sowing',
            organic: 'FYM 8-10 tons/hectare + Mustard cake 300kg/hectare',
            micronutrients: 'Boron 1kg/hectare for seed setting'
        },
        'toor': {
            primary: 'NPK 18-46-0 at planting',
            details: 'Apply 25kg N, 50kg P2O5, 25kg K2O per hectare. Follow with nitrogen top-dressing.',
            timing: 'Basal application + nitrogen top dressing at 45 days after sowing',
            organic: 'Rhizobium + PSB inoculation + FYM 5 tons/hectare',
            micronutrients: 'Zinc 25kg/hectare, Boron 10kg/hectare'
        },
        'millet': {
            primary: 'NPK 14-35-14 with micronutrients',
            details: 'Apply 40kg N, 20kg P2O5, 20kg K2O per hectare. Drought-resistant nutrition program.',
            timing: 'Basal application with organic matter incorporation',
            organic: 'Compost 3-5 tons/hectare + Vermicompost 1 ton/hectare',
            micronutrients: 'Iron, Zinc for drought tolerance'
        },
        'tomato': {
            primary: 'NPK 19-19-19 balanced nutrition',
            details: 'Apply 200kg N, 100kg P2O5, 150kg K2O per hectare in multiple splits.',
            timing: 'Weekly fertigation or bi-weekly soil application',
            organic: 'Vermicompost 5 tons/hectare + Neem cake 500kg/hectare',
            micronutrients: 'Calcium for fruit quality, Boron for flowering'
        },
        'onion': {
            primary: 'NPK 15-15-15 with Sulphur',
            details: 'Apply 100kg N, 50kg P2O5, 100kg K2O + 25kg Sulphur per hectare.',
            timing: '4-5 split applications every 15 days after transplanting',
            organic: 'Well-decomposed FYM 20 tons/hectare',
            micronutrients: 'Sulphur essential for pungency and storage quality'
        },
        'sugarcane': {
            primary: 'NPK 12-6-6 high nitrogen',
            details: 'Apply 280kg N, 90kg P2O5, 90kg K2O per hectare over crop cycle.',
            timing: 'Basal + 4 top dressings at 45, 90, 135, 180 days after planting',
            organic: 'Press mud 10 tons/hectare + Biofertilizers',
            micronutrients: 'Silicon for stem strength, Zinc for internodal development'
        }
    };
    
    const cropKey = cropType.toLowerCase().trim();
    const recommendation = recommendations[cropKey];
    
    if (recommendation) {
        return `🌱 COMPREHENSIVE FERTILIZER GUIDE FOR ${cropType.toUpperCase()}:

📊 PRIMARY FERTILIZER: ${recommendation.primary}

🔬 DETAILED APPLICATION: ${recommendation.details}

⏰ TIMING: ${recommendation.timing}

🌿 ORGANIC OPTIONS: ${recommendation.organic}

🧪 MICRONUTRIENTS: ${recommendation.micronutrients}

💡 PRO TIP: Always conduct soil testing before application and adjust doses based on soil nutrient status.`;
    }
    
    return `🌾 GENERAL FERTILIZER RECOMMENDATION:

Use NPK 19-19-19 balanced fertilizer as base application.
Apply 2-3 tons of organic compost per hectare.
Consider soil testing for precise nutrient management.
Consult local agricultural extension officer for crop-specific guidance.

📞 For detailed recommendations, contact your nearest Krishi Vigyan Kendra (KVK).`;
}

// Enhanced AI Modal Display System
function showEnhancedAIResponse(title, content) {
    const modal = document.createElement('div');
    modal.className = 'enhanced-ai-modal';
    modal.innerHTML = `
        <div class="enhanced-ai-modal-content">
            <div class="ai-modal-header">
                <div class="ai-avatar">🤖</div>
                <h2>${title}</h2>
                <span class="close-enhanced-modal">&times;</span>
            </div>
            <div class="ai-modal-body">
                <div class="ai-response-content">
                    <pre>${content}</pre>
                </div>
                <div class="ai-actions">
                    <button class="ai-action-btn" onclick="copyToClipboard('${content.replace(/'/g, "\\'")}')">📋 Copy</button>
                    <button class="ai-action-btn" onclick="shareRecommendation()">📤 Share</button>
                    <button class="ai-action-btn" onclick="saveRecommendation('${title}', '${content.replace(/'/g, "\\'")}')">💾 Save</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add enhanced modal styles if not already present
    if (!document.getElementById('enhanced-ai-styles')) {
        const styles = document.createElement('style');
        styles.id = 'enhanced-ai-styles';
        styles.textContent = `
            .enhanced-ai-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                opacity: 0;
                animation: fadeInModal 0.3s ease forwards;
            }
            
            @keyframes fadeInModal {
                to { opacity: 1; }
            }
            
            .enhanced-ai-modal-content {
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                border-radius: 20px;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow: hidden;
                border: 2px solid #00ff88;
                box-shadow: 0 20px 60px rgba(0, 255, 136, 0.3);
                transform: scale(0.8);
                animation: scaleInModal 0.3s ease 0.1s forwards;
            }
            
            @keyframes scaleInModal {
                to { transform: scale(1); }
            }
            
            .ai-modal-header {
                background: linear-gradient(135deg, #00ff88, #00cc6a);
                padding: 20px;
                display: flex;
                align-items: center;
                gap: 15px;
                position: relative;
            }
            
            .ai-avatar {
                font-size: 2rem;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .ai-modal-header h2 {
                color: white;
                margin: 0;
                flex: 1;
                font-size: 1.5rem;
                font-weight: 600;
            }
            
            .close-enhanced-modal {
                position: absolute;
                top: 15px;
                right: 20px;
                font-size: 2rem;
                color: white;
                cursor: pointer;
                transition: transform 0.2s ease;
            }
            
            .close-enhanced-modal:hover {
                transform: scale(1.2);
            }
            
            .ai-modal-body {
                padding: 25px;
                max-height: 60vh;
                overflow-y: auto;
            }
            
            .ai-response-content {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                padding: 20px;
                margin-bottom: 20px;
                border-left: 4px solid #00ff88;
            }
            
            .ai-response-content pre {
                color: #ffffff;
                font-family: 'Poppins', sans-serif;
                font-size: 14px;
                line-height: 1.6;
                white-space: pre-wrap;
                margin: 0;
            }
            
            .ai-actions {
                display: flex;
                gap: 10px;
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .ai-action-btn {
                background: linear-gradient(135deg, #00ff88, #00cc6a);
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
                font-size: 14px;
            }
            
            .ai-action-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0, 255, 136, 0.4);
            }
            
            @media (max-width: 768px) {
                .enhanced-ai-modal-content {
                    width: 95%;
                    margin: 10px;
                }
                
                .ai-modal-header {
                    padding: 15px;
                }
                
                .ai-modal-body {
                    padding: 15px;
                }
                
                .ai-actions {
                    flex-direction: column;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Close modal functionality
    modal.querySelector('.close-enhanced-modal').onclick = () => modal.remove();
    modal.onclick = function(e) {
        if (e.target === modal) modal.remove();
    };
    
    // Keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') modal.remove();
    });
}

// Utility functions for AI actions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('✅ Copied to clipboard!');
    });
}

function shareRecommendation() {
    if (navigator.share) {
        navigator.share({
            title: 'Agritech AI Recommendation',
            text: 'Check out this AI-powered farming recommendation from Agritech!'
        });
    } else {
        showNotification('📤 Share feature not supported on this device');
    }
}

function saveRecommendation(title, content) {
    const data = {
        title: title,
        content: content,
        timestamp: new Date().toISOString(),
        source: 'Agritech AI'
    };
    
    localStorage.setItem(`agritech_recommendation_${Date.now()}`, JSON.stringify(data));
    showNotification('💾 Recommendation saved locally!');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00ff88, #00cc6a);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 3000;
        font-weight: 600;
        box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Event listener for fertilizer recommendation
document.addEventListener('DOMContentLoaded', function() {
    const fertilizerButton = document.getElementById('fertilizerButton');
    if (fertilizerButton) {
        fertilizerButton.addEventListener('click', async () => {
            const cropTypeInput = document.getElementById('cropTypeInput');
            if (cropTypeInput) {
                const cropType = cropTypeInput.value;
                if (cropType.trim() === '') {
                    showNotification('⚠️ Please enter a crop type first');
                    return;
                }
                
                // Show loading state
                fertilizerButton.textContent = '🔄 Analyzing...';
                fertilizerButton.disabled = true;
                
                try {
                    const recommendation = await getFertilizerRecommendation(cropType);
                    showEnhancedAIResponse(`🌱 AI Fertilizer Guide for ${cropType}`, recommendation);
                } catch (error) {
                    showNotification('❌ Error getting recommendation');
                } finally {
                    fertilizerButton.textContent = 'GET AI RECOMMENDATION';
                    fertilizerButton.disabled = false;
                }
            }
        });
    }
});

// Enhanced AgritechAI Class with Comprehensive Knowledge Base
class AgritechAI {
    constructor() {
        this.cropDatabase = {
            wheat: { 
                season: 'Rabi (Oct-Mar)', 
                waterReq: 'Medium (400-500mm)', 
                soilType: 'Loamy, Well-drained',
                temperature: '15-25°C optimal',
                diseases: ['Rust, Smut, Blight'],
                pests: ['Aphids, Termites, Army worm'],
                yield: '25-30 quintals/hectare'
            },
            cotton: { 
                season: 'Kharif (Apr-Oct)', 
                waterReq: 'High (700-1200mm)', 
                soilType: 'Black Cotton Soil',
                temperature: '21-30°C optimal',
                diseases: ['Wilt, Boll rot, Leaf curl'],
                pests: ['Bollworm, Whitefly, Thrips'],
                yield: '15-20 quintals/hectare'
            },
            rice: { 
                season: 'Kharif (Jun-Nov)', 
                waterReq: 'Very High (1000-2000mm)', 
                soilType: 'Clay, Water-logged',
                temperature: '20-35°C optimal',
                diseases: ['Blast, Sheath blight, BLB'],
                pests: ['Stem borer, BPH, Leaf folder'],
                yield: '40-50 quintals/hectare'
            },
            soybean: { 
                season: 'Kharif (Jun-Oct)', 
                waterReq: 'Medium (450-700mm)', 
                soilType: 'Well-drained, pH 6.0-7.5',
                temperature: '26-30°C optimal',
                diseases: ['Rust, Blight, Mosaic'],
                pests: ['Pod borer, Defoliator, Aphids'],
                yield: '12-15 quintals/hectare'
            },
            mustard: {
                season: 'Rabi (Oct-Mar)',
                waterReq: 'Low-Medium (300-400mm)',
                soilType: 'Sandy loam, Well-drained',
                temperature: '10-25°C optimal',
                diseases: ['White rust, Downy mildew'],
                pests: ['Aphids, Sawfly, Painted bug'],
                yield: '8-12 quintals/hectare'
            },
            tomato: {
                season: 'Year-round (varies by region)',
                waterReq: 'Medium (600-800mm)',
                soilType: 'Sandy loam, pH 6.0-7.0',
                temperature: '20-25°C optimal',
                diseases: ['Early blight, Late blight, Wilt'],
                pests: ['Fruit borer, Whitefly, Thrips'],
                yield: '300-500 quintals/hectare'
            },
            onion: {
                season: 'Rabi (Nov-Apr)',
                waterReq: 'Medium (350-550mm)',
                soilType: 'Sandy loam, Well-drained',
                temperature: '15-25°C optimal',
                diseases: ['Purple blotch, Downy mildew'],
                pests: ['Thrips, Cutworm, Maggot'],
                yield: '200-300 quintals/hectare'
            }
        };
        
        this.weatherAdvice = {
            monsoon: 'Focus on Kharif crops, ensure proper drainage, monitor for fungal diseases',
            winter: 'Ideal for Rabi crops, manage irrigation, protect from frost',
            summer: 'Water management critical, consider drought-resistant varieties',
            premonsoon: 'Prepare fields, check irrigation systems, plan crop calendar'
        };
        
        this.soilTypes = {
            'black cotton': 'High water retention, suitable for cotton, sugarcane, wheat',
            'red soil': 'Good for cotton, wheat, pulses, requires organic matter',
            'alluvial': 'Most fertile, suitable for rice, wheat, sugarcane',
            'sandy': 'Good drainage, suitable for groundnut, watermelon, requires frequent irrigation',
            'clay': 'Water retention high, suitable for rice, requires proper drainage'
        };
        
        this.organicPractices = {
            composting: 'Use kitchen waste, farm residue, cow dung for nutrient-rich compost',
            vermicomposting: 'Earthworm-based composting for high-quality organic fertilizer',
            greenManure: 'Grow leguminous crops like dhaincha, sunhemp for soil enrichment',
            biofertilizers: 'Use Rhizobium, Azotobacter, PSB for sustainable nutrition',
            neem: 'Natural pesticide and soil conditioner, eco-friendly farming'
        };
    }
    
    getComprehensiveCropInfo(cropName) {
        const crop = this.cropDatabase[cropName.toLowerCase()];
        if (!crop) return null;
        
        return `🌾 COMPREHENSIVE CROP INFORMATION FOR ${cropName.toUpperCase()}:

🗓️ GROWING SEASON: ${crop.season}
💧 WATER REQUIREMENT: ${crop.waterReq}
🌱 SOIL TYPE: ${crop.soilType}
🌡️ TEMPERATURE: ${crop.temperature}
🦠 COMMON DISEASES: ${crop.diseases.join(', ')}
🐛 MAJOR PESTS: ${crop.pests.join(', ')}
📊 EXPECTED YIELD: ${crop.yield}

💡 EXPERT TIP: Always conduct soil testing before sowing and follow integrated pest management practices.`;
    }
    
    getSeasonalAdvice(month) {
        const seasonalTips = {
            1: '❄️ JANUARY: Harvest Rabi crops, apply irrigation to standing crops, prepare for summer vegetables',
            2: '🌱 FEBRUARY: Land preparation for summer crops, pruning of fruit trees, pest monitoring in Rabi crops',
            3: '🌸 MARCH: Sowing of summer crops (cotton, sugarcane), harvest mustard and gram, irrigation management',
            4: '☀️ APRIL: Summer crop care, drip irrigation setup, harvest wheat, prepare for pre-monsoon activities',
            5: '🔥 MAY: Pre-monsoon preparations, field bunding, seed treatment, repair farm equipment',
            6: '🌧️ JUNE: Kharif sowing begins with monsoon, rice transplanting, cotton sowing, drainage management',
            7: '🌿 JULY: Monitor pest and diseases in Kharif crops, weed management, gap filling in cotton',
            8: '🌾 AUGUST: Mid-season care for Kharif crops, fertilizer application, pest control measures',
            9: '🍂 SEPTEMBER: Late Kharif management, harvest early varieties, prepare for Rabi season',
            10: '🌾 OCTOBER: Kharif harvesting (rice, cotton), Rabi field preparation, wheat sowing preparation',
            11: '🌱 NOVEMBER: Rabi sowing season (wheat, mustard, gram), apply pre-sowing irrigation',
            12: '❄️ DECEMBER: Winter crop management, protect from cold, apply fertilizers to Rabi crops'
        };
        return seasonalTips[month] || '🌾 General farming advice: Follow crop calendar and local agricultural guidelines';
    }
    
    getPestManagementAdvice(pest) {
        const pestControl = {
            'aphids': 'Use neem oil spray, introduce ladybugs, apply imidacloprid if severe',
            'bollworm': 'Pheromone traps, Bt cotton varieties, spray cypermethrin during peak infestation',
            'thrips': 'Blue sticky traps, neem extract, maintain field hygiene',
            'whitefly': 'Yellow sticky traps, neem oil, avoid excessive nitrogen fertilization',
            'stem borer': 'Light traps, release Trichogramma parasites, avoid late planting',
            'fruit borer': 'Pheromone traps, remove damaged fruits, spray chlorantraniliprole'
        };
        
        return pestControl[pest.toLowerCase()] || 'Consult local agricultural extension officer for specific pest management';
    }
    
    getDiseaseManagementAdvice(disease) {
        const diseaseControl = {
            'rust': 'Use resistant varieties, apply propiconazole, ensure proper spacing',
            'blight': 'Copper-based fungicides, crop rotation, remove infected plant debris',
            'wilt': 'Soil solarization, use resistant varieties, improve drainage',
            'downy mildew': 'Metalaxyl spray, avoid overhead irrigation, ensure air circulation',
            'mosaic': 'Control vector insects, use virus-free seeds, remove infected plants'
        };
        
        return diseaseControl[disease.toLowerCase()] || 'Practice crop rotation and use disease-resistant varieties';
    }
    
    getOrganicFarmingAdvice() {
        return `🌿 ORGANIC FARMING PRACTICES:

🍂 COMPOSTING: ${this.organicPractices.composting}
🪱 VERMICOMPOSTING: ${this.organicPractices.vermicomposting}
🌱 GREEN MANURE: ${this.organicPractices.greenManure}
🦠 BIOFERTILIZERS: ${this.organicPractices.biofertilizers}
🌳 NEEM APPLICATIONS: ${this.organicPractices.neem}

💡 ORGANIC CERTIFICATION: Follow NPOP standards for organic certification and premium market access.`;
    }
    
    getIrrigationAdvice(cropType, season) {
        const irrigationTips = {
            'rice': 'Maintain 2-5cm standing water, drain before harvest',
            'wheat': 'Crown root irrigation, pre-sowing and 4-5 irrigations during crop cycle',
            'cotton': 'Drip irrigation preferred, avoid water stress during flowering',
            'sugarcane': 'High water requirement, 15-20 irrigations per crop cycle',
            'vegetables': 'Frequent light irrigations, mulching to conserve moisture'
        };
        
        const generalTip = irrigationTips[cropType.toLowerCase()] || 'Follow crop-specific water requirements';
        
        return `💧 IRRIGATION GUIDANCE FOR ${cropType.toUpperCase()}:

${generalTip}

🌡️ SEASONAL CONSIDERATIONS:
- Summer: Increase frequency, early morning/evening irrigation
- Monsoon: Ensure proper drainage, reduce irrigation
- Winter: Reduce frequency, avoid over-irrigation

💡 WATER CONSERVATION: Use drip irrigation, mulching, and rainwater harvesting for sustainable farming.`;
    }
}

// Enhanced AI Chat Interface
class AgritechAIChat {
    constructor() {
        this.ai = new AgritechAI();
        this.conversationHistory = [];
    }
    
    processQuery(query) {
        const lowerQuery = query.toLowerCase();
        this.conversationHistory.push({ type: 'user', message: query, timestamp: new Date() });
        
        let response = '';
        
        // Crop information queries
        if (lowerQuery.includes('crop') || lowerQuery.includes('information') || lowerQuery.includes('about')) {
            const crops = ['wheat', 'rice', 'cotton', 'soybean', 'mustard', 'tomato', 'onion'];
            const mentionedCrop = crops.find(crop => lowerQuery.includes(crop));
            if (mentionedCrop) {
                response = this.ai.getComprehensiveCropInfo(mentionedCrop);
            }
        }
        
        // Seasonal advice queries
        else if (lowerQuery.includes('season') || lowerQuery.includes('month') || lowerQuery.includes('when')) {
            const currentMonth = new Date().getMonth() + 1;
            response = this.ai.getSeasonalAdvice(currentMonth);
        }
        
        // Pest management queries
        else if (lowerQuery.includes('pest') || lowerQuery.includes('insect') || lowerQuery.includes('bug')) {
            const pests = ['aphids', 'bollworm', 'thrips', 'whitefly', 'stem borer', 'fruit borer'];
            const mentionedPest = pests.find(pest => lowerQuery.includes(pest));
            if (mentionedPest) {
                response = `🐛 PEST MANAGEMENT FOR ${mentionedPest.toUpperCase()}:\n\n${this.ai.getPestManagementAdvice(mentionedPest)}`;
            } else {
                response = '🐛 INTEGRATED PEST MANAGEMENT:\n\nUse combination of cultural, biological, and chemical methods. Monitor regularly, use pheromone traps, encourage natural predators, and apply pesticides only when necessary.';
            }
        }
        
        // Disease management queries
        else if (lowerQuery.includes('disease') || lowerQuery.includes('fungus') || lowerQuery.includes('infection')) {
            const diseases = ['rust', 'blight', 'wilt', 'downy mildew', 'mosaic'];
            const mentionedDisease = diseases.find(disease => lowerQuery.includes(disease));
            if (mentionedDisease) {
                response = `🦠 DISEASE MANAGEMENT FOR ${mentionedDisease.toUpperCase()}:\n\n${this.ai.getDiseaseManagementAdvice(mentionedDisease)}`;
            } else {
                response = '🦠 DISEASE PREVENTION:\n\nUse disease-resistant varieties, practice crop rotation, maintain field hygiene, ensure proper spacing, and apply preventive fungicides when necessary.';
            }
        }
        
        // Organic farming queries
        else if (lowerQuery.includes('organic') || lowerQuery.includes('natural') || lowerQuery.includes('chemical-free')) {
            response = this.ai.getOrganicFarmingAdvice();
        }
        
        // Irrigation queries
        else if (lowerQuery.includes('water') || lowerQuery.includes('irrigation') || lowerQuery.includes('drought')) {
            const crops = ['rice', 'wheat', 'cotton', 'sugarcane', 'vegetables'];
            const mentionedCrop = crops.find(crop => lowerQuery.includes(crop));
            response = this.ai.getIrrigationAdvice(mentionedCrop || 'general', 'current');
        }
        
        // Soil queries
        else if (lowerQuery.includes('soil') || lowerQuery.includes('fertility') || lowerQuery.includes('nutrients')) {
            response = `🌱 SOIL HEALTH MANAGEMENT:

🧪 SOIL TESTING: Conduct soil testing every 2-3 years to check pH, organic matter, and nutrient levels.

🌿 ORGANIC MATTER: Add 2-3% organic matter through compost, FYM, or green manure.

⚖️ pH MANAGEMENT: Maintain soil pH between 6.0-7.5 for optimal nutrient availability.

🔄 CROP ROTATION: Practice crop rotation to maintain soil fertility and break pest cycles.

💧 WATER MANAGEMENT: Ensure proper drainage to prevent waterlogging and salt accumulation.`;
        }
        
        // Weather queries
        else if (lowerQuery.includes('weather') || lowerQuery.includes('climate') || lowerQuery.includes('temperature')) {
            response = `🌤️ WEATHER-BASED FARMING ADVICE:

☀️ SUMMER: Focus on heat-tolerant crops, increase irrigation frequency, use mulching.

🌧️ MONSOON: Ensure proper drainage, monitor for fungal diseases, practice timely sowing.

❄️ WINTER: Protect crops from frost, reduce irrigation, harvest at optimal time.

🌪️ EXTREME WEATHER: Use weather forecasts, crop insurance, and climate-resilient varieties.

📱 TECHNOLOGY: Use weather apps and agricultural advisories for informed decision-making.`;
        }
        
        // Default comprehensive response
        else {
            response = `🤖 AGRITECH AI COMPREHENSIVE SUPPORT:

I can help you with:
🌾 Crop information and cultivation practices
🧪 Fertilizer recommendations and soil management
🐛 Pest and disease management
💧 Irrigation and water management
🌿 Organic farming practices
🌤️ Weather-based farming advice
📅 Seasonal agricultural calendar

💡 EXAMPLE QUERIES:
- "Tell me about wheat cultivation"
- "How to manage aphids in cotton?"
- "What fertilizer for tomato?"
- "Organic farming practices"
- "Irrigation schedule for rice"

Ask me anything about agriculture and farming! 🚜`;
        }
        
        this.conversationHistory.push({ type: 'ai', message: response, timestamp: new Date() });
        return response;
    }
}

// Initialize enhanced AI system
const agritechAI = new AgritechAI();
const agritechAIChat = new AgritechAIChat();

// Add AI chat functionality to existing interface
function initializeAIChat() {
    // Add chat input to AI section if it doesn't exist
    const aiSection = document.querySelector('.ai-interaction');
    if (aiSection && !document.getElementById('aiChatInput')) {
        const chatInterface = document.createElement('div');
        chatInterface.className = 'ai-chat-interface';
        chatInterface.innerHTML = `
            <div class="ai-chat-container">
                <input type="text" id="aiChatInput" placeholder="Ask me anything about farming... (e.g., 'How to grow wheat?')" class="ai-chat-input"/>
                <button id="aiChatButton" class="ai-btn primary">🤖 Ask AI</button>
            </div>
        `;
        aiSection.appendChild(chatInterface);
        
        // Add chat styles
        const chatStyles = document.createElement('style');
        chatStyles.textContent = `
            .ai-chat-interface {
                margin-top: 20px;
                padding: 20px;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 15px;
                border: 2px solid rgba(0, 255, 136, 0.3);
            }
            
            .ai-chat-container {
                display: flex;
                gap: 10px;
                align-items: center;
                flex-wrap: wrap;
            }
            
            .ai-chat-input {
                flex: 1;
                min-width: 300px;
                padding: 12px 20px;
                border: 2px solid rgba(0, 255, 136, 0.5);
                border-radius: 25px;
                background: rgba(0, 0, 0, 0.5);
                color: white;
                font-family: 'Poppins', sans-serif;
                font-size: 14px;
            }
            
            .ai-chat-input:focus {
                outline: none;
                border-color: #00ff88;
                box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
            }
            
            .ai-chat-input::placeholder {
                color: rgba(255, 255, 255, 0.6);
            }
            
            @media (max-width: 768px) {
                .ai-chat-container {
                    flex-direction: column;
                }
                
                .ai-chat-input {
                    min-width: 100%;
                }
            }
        `;
        document.head.appendChild(chatStyles);
        
        // Add event listener for chat
        document.getElementById('aiChatButton').addEventListener('click', () => {
            const input = document.getElementById('aiChatInput');
            const query = input.value.trim();
            
            if (query) {
                const response = agritechAIChat.processQuery(query);
                showEnhancedAIResponse('🤖 Agritech AI Assistant', response);
                input.value = '';
            } else {
                showNotification('⚠️ Please enter your question first');
            }
        });
        
        // Enter key support
        document.getElementById('aiChatInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('aiChatButton').click();
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAIChat);

console.log('Enhanced Agritech AI Integration loaded successfully - Developed by Krushna Nawale');
