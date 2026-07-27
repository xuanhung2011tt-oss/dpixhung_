// Database máy + DPI + Độ nhạy FF
const deviceDatabase = [
    // iPhone
    { name: "iPhone 15 Pro Max", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 15 Pro", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 15", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 15 Plus", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 14 Pro Max", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 14 Pro", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 14", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 14 Plus", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 13 Pro Max", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 13 Pro", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 13", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 13 mini", dpi: 476, baseSensitivity: 46 },
    { name: "iPhone 12 Pro Max", dpi: 458, baseSensitivity: 48 },
    { name: "iPhone 12 Pro", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 12", dpi: 460, baseSensitivity: 48 },
    { name: "iPhone 12 mini", dpi: 476, baseSensitivity: 46 },
    { name: "iPhone 11 Pro Max", dpi: 458, baseSensitivity: 48 },
    { name: "iPhone 11 Pro", dpi: 458, baseSensitivity: 48 },
    { name: "iPhone 11", dpi: 326, baseSensitivity: 65 },

    // Samsung Galaxy S Series
    { name: "Samsung Galaxy S24 Ultra", dpi: 486, baseSensitivity: 45 },
    { name: "Samsung Galaxy S24+", dpi: 480, baseSensitivity: 46 },
    { name: "Samsung Galaxy S24", dpi: 402, baseSensitivity: 60 },
    { name: "Samsung Galaxy S23 Ultra", dpi: 504, baseSensitivity: 43 },
    { name: "Samsung Galaxy S23+", dpi: 490, baseSensitivity: 45 },
    { name: "Samsung Galaxy S23", dpi: 403, baseSensitivity: 60 },
    { name: "Samsung Galaxy S22 Ultra", dpi: 512, baseSensitivity: 42 },
    { name: "Samsung Galaxy S22+", dpi: 500, baseSensitivity: 43 },
    { name: "Samsung Galaxy S22", dpi: 410, baseSensitivity: 59 },
    { name: "Samsung Galaxy S21 Ultra", dpi: 515, baseSensitivity: 42 },
    { name: "Samsung Galaxy S21+", dpi: 515, baseSensitivity: 42 },
    { name: "Samsung Galaxy S21", dpi: 421, baseSensitivity: 58 },

    // Samsung Galaxy A Series
    { name: "Samsung Galaxy A54", dpi: 408, baseSensitivity: 59 },
    { name: "Samsung Galaxy A53", dpi: 407, baseSensitivity: 59 },
    { name: "Samsung Galaxy A52", dpi: 406, baseSensitivity: 59 },
    { name: "Samsung Galaxy A51", dpi: 405, baseSensitivity: 59 },

    // Xiaomi
    { name: "Xiaomi 14 Ultra", dpi: 514, baseSensitivity: 42 },
    { name: "Xiaomi 14", dpi: 453, baseSensitivity: 50 },
    { name: "Xiaomi 13 Ultra", dpi: 517, baseSensitivity: 42 },
    { name: "Xiaomi 13", dpi: 429, baseSensitivity: 55 },
    { name: "Xiaomi 12S Ultra", dpi: 509, baseSensitivity: 42 },
    { name: "Xiaomi 12", dpi: 441, baseSensitivity: 52 },
    { name: "Xiaomi 11 Ultra", dpi: 515, baseSensitivity: 42 },
    { name: "Xiaomi 11", dpi: 397, baseSensitivity: 61 },

    // OPPO
    { name: "OPPO Find X7 Ultra", dpi: 520, baseSensitivity: 41 },
    { name: "OPPO Find X6 Pro", dpi: 510, baseSensitivity: 42 },
    { name: "OPPO Find X5 Pro", dpi: 512, baseSensitivity: 42 },
    { name: "OPPO Find X5", dpi: 453, baseSensitivity: 50 },
    { name: "OPPO Reno 8 Pro", dpi: 432, baseSensitivity: 54 },

    // Vivo
    { name: "Vivo X90 Pro+", dpi: 517, baseSensitivity: 42 },
    { name: "Vivo X90 Pro", dpi: 453, baseSensitivity: 50 },
    { name: "Vivo X80 Pro", dpi: 512, baseSensitivity: 42 },
    { name: "Vivo X70 Pro+", dpi: 515, baseSensitivity: 42 },

    // OnePlus
    { name: "OnePlus 12", dpi: 453, baseSensitivity: 50 },
    { name: "OnePlus 11 Pro", dpi: 525, baseSensitivity: 41 },
    { name: "OnePlus 11", dpi: 432, baseSensitivity: 54 },
    { name: "OnePlus 10 Pro", dpi: 525, baseSensitivity: 41 },

    // Realme
    { name: "Realme GT 5 Pro", dpi: 512, baseSensitivity: 42 },
    { name: "Realme GT 5", dpi: 453, baseSensitivity: 50 },
    { name: "Realme GT 3", dpi: 525, baseSensitivity: 41 },
    { name: "Realme GT 2 Pro", dpi: 525, baseSensitivity: 41 },
    { name: "Realme GT 2", dpi: 453, baseSensitivity: 50 },

    // Google Pixel
    { name: "Google Pixel 8 Pro", dpi: 512, baseSensitivity: 42 },
    { name: "Google Pixel 8", dpi: 429, baseSensitivity: 55 },
    { name: "Google Pixel 7 Pro", dpi: 512, baseSensitivity: 42 },
    { name: "Google Pixel 7", dpi: 429, baseSensitivity: 55 },
    { name: "Google Pixel 6 Pro", dpi: 512, baseSensitivity: 42 },
    { name: "Google Pixel 6", dpi: 411, baseSensitivity: 59 },
];

function calculateSensitivity(dpi) {
    if (dpi < 400) {
        return 70 + Math.random() * 5; // 70-75%
    } else if (dpi < 450) {
        return 55 + Math.random() * 10; // 55-65%
    } else {
        return 40 + Math.random() * 10; // 40-50%
    }
}

function searchDevice() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    
    if (input.length === 0) {
        document.getElementById('resultBox').style.display = 'none';
        document.getElementById('suggestions').style.display = 'none';
        return;
    }

    const foundDevice = deviceDatabase.find(device => 
        device.name.toLowerCase().includes(input)
    );

    if (foundDevice) {
        displayResult(foundDevice);
        document.getElementById('suggestions').style.display = 'none';
    } else {
        // Hiển thị gợi ý
        const suggestions = deviceDatabase.filter(device =>
            device.name.toLowerCase().includes(input)
        ).slice(0, 5);

        if (suggestions.length > 0) {
            showSuggestions(suggestions);
        } else {
            document.getElementById('resultBox').style.display = 'none';
            document.getElementById('suggestions').style.display = 'none';
        }
    }
}

function showSuggestions(suggestions) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '<div class="suggestion-title">🔍 Gợi ý:</div>';
    
    suggestions.forEach(device => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.textContent = device.name;
        suggestionItem.onclick = () => selectDevice(device.name);
        suggestionsBox.appendChild(suggestionItem);
    });
    
    suggestionsBox.style.display = 'block';
}

function selectDevice(deviceName) {
    const device = deviceDatabase.find(d => d.name === deviceName);
    if (device) {
        document.getElementById('searchInput').value = deviceName;
        displayResult(device);
        document.getElementById('suggestions').style.display = 'none';
    }
}

function displayResult(device) {
    const sensitivity = Math.round(device.baseSensitivity);
    
    document.getElementById('resultDevice').textContent = device.name;
    document.getElementById('resultDPI').textContent = device.dpi + ' DPI (PPI)';
    document.getElementById('resultSensitivity').textContent = sensitivity + '%';
    
    const resultBox = document.getElementById('resultBox');
    resultBox.style.display = 'block';
    resultBox.style.animation = 'slideIn 0.3s ease-out';
}

// Enter key support
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchDevice();
        }
    });

    // Real-time search suggestions
    document.getElementById('searchInput').addEventListener('input', function() {
        const input = this.value.trim().toLowerCase();
        if (input.length > 0) {
            const suggestions = deviceDatabase.filter(device =>
                device.name.toLowerCase().includes(input)
            ).slice(0, 5);
            if (suggestions.length > 0) {
                showSuggestions(suggestions);
            } else {
                document.getElementById('suggestions').style.display = 'none';
            }
        } else {
            document.getElementById('suggestions').style.display = 'none';
        }
    });
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
