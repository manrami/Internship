function generateCaption() {
    let productInput = document.getElementById("prompt").value.trim();
    let product = productInput || "our amazing product";
    let lowerProduct = product.toLowerCase();
    
    let outputArea = document.getElementById("outputArea");
    let loading = document.getElementById("loading");
    
    outputArea.classList.add("hidden");
    loading.classList.remove("hidden");

    let captions = {};

    // Smart logic engine
    if (lowerProduct.includes("web") || lowerProduct.includes("app") || lowerProduct.includes("software")) {
        captions = {
            prof: `Elevate your digital presence with ${product}. Reliable, scalable, and built for the future. Contact us for a consultation. 💻📈`,
            genz: `stop scrolling 🛑 the new ${product} is literally a game changer. link in bio before it sells out tbh ✨🔥`,
            sale: `🚀 FLASH SALE! Get 20% off ${product} today only. Transform your business now! 💥`
        };
    } 
    else if (lowerProduct.includes("fitness") || lowerProduct.includes("gym") || lowerProduct.includes("workout")) {
        captions = {
            prof: `Achieve your health goals with ${product}. Engineered for maximum performance and durability. 💪🏃‍♂️`,
            genz: `gains szn is here. ${product} is the only motivation you need rn. let's get it 😤🔥 #fitcheck`,
            sale: `Start your fitness journey today! Take 30% off ${product} using code GETFIT. 🏋️‍♀️✨`
        };
    }
    else {
        captions = {
            prof: `Discover the unmatched quality of ${product}. Designed to make your daily life smoother and more efficient. 🌟`,
            genz: `ngl, ${product} is the best thing i've bought all year. totally obsessed 😍✨ #musthave`,
            sale: `🎉 BIGGEST SALE OF THE YEAR! Grab your ${product} now at a massively discounted price. Limited time only! 🛍️⏳`
        };
    }

    let html = `
        <div class="caption-box">
            <h4>👔 Professional Style</h4>
            <p>${captions.prof}</p>
        </div>
        <div class="caption-box">
            <h4>📱 Gen-Z / Viral Style</h4>
            <p>${captions.genz}</p>
        </div>
        <div class="caption-box">
            <h4>🏷️ Promotional / Sale Style</h4>
            <p>${captions.sale}</p>
        </div>
    `;
    
    // Simulate deep AI thinking
    setTimeout(() => {
        loading.classList.add("hidden");
        outputArea.innerHTML = html;
        outputArea.classList.remove("hidden");
    }, 2000);
}
