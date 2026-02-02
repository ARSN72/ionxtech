document.addEventListener("DOMContentLoaded", function () {
    // 1. Determine relative path to root based on current folder depth
    // If we are in 'privacy-policy/', we need to go up one level ('../')
    // If we are at root, we need nothing ('./')
    const path = window.location.pathname;
    let rootPath = "./";
    
    if (path.includes("/privacy-policy/")) {
        rootPath = "../";
    } else if (path.includes("/apps/")) {
        rootPath = "../../";
    }

    // 2. Define the Header HTML
    const headerHTML = `
    <div class="container navbar">
        <a href="${rootPath}index.html" class="brand">
            <div class="brand-logo"><i class="fa-solid fa-atom"></i></div>
            <span class="brand-text">IonXTech</span>
        </a>
        <ul class="nav-links">
            <li><a href="${rootPath}index.html">Home</a></li>
            <li><a href="${rootPath}app-ads.txt" target="_blank">app-ads.txt</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
    `;

    // 3. Define the Footer HTML
    const footerHTML = `
    <div class="container">
        <div class="brand" style="justify-content: center; margin-bottom: 1rem; opacity: 0.7;">
            <div class="brand-logo" style="width:30px; height:30px; font-size:0.9rem;"><i class="fa-solid fa-atom"></i></div>
            <span class="brand-text" style="font-size: 1.2rem;">IonXTech</span>
        </div>
        <p>&copy; ${new Date().getFullYear()} IonXTech. Simple technology. Powerful results.</p>
        <p style="font-size: 0.9rem; margin-top: 10px;">
            <a href="${rootPath}privacy-policy/qr-solution.html">QR Privacy</a> • 
            <a href="${rootPath}privacy-policy/led-scroller.html">LED Privacy</a> • 
            <a href="${rootPath}privacy-policy/auto-call-scheduler.html">Call Scheduler Privacy</a>
        </p>
    </div>
    `;

    // 4. Inject into DOM
    document.querySelector("header").innerHTML = headerHTML;
    document.querySelector("footer").innerHTML = footerHTML;
});