function calculateDPI() {
    const dpi = parseFloat(document.getElementById('dpi').value);
    const sensitivity = parseFloat(document.getElementById('sensitivity').value);

    // Validate input
    if (isNaN(dpi) || isNaN(sensitivity) || dpi <= 0 || sensitivity < 0 || sensitivity > 100) {
        alert('⚠️ Vui lòng nhập giá trị hợp lệ!\n\nDPI: 1-16000\nĐộ nhạy: 0-100');
        return;
    }

    // Calculate eDPI
    const eDPI = (dpi * sensitivity) / 100;

    // Display results
    document.getElementById('resultDPI').textContent = dpi + ' DPI';
    document.getElementById('resultSensitivity').textContent = sensitivity + '%';
    document.getElementById('resultEDPI').textContent = eDPI.toFixed(2) + ' eDPI';

    // Show result box with animation
    const resultBox = document.getElementById('resultBox');
    resultBox.style.display = 'block';
    resultBox.style.animation = 'slideIn 0.3s ease-out';

    // Provide recommendation
    provideRecommendation(eDPI);
}

function provideRecommendation(eDPI) {
    let recommendation = '';
    let emoji = '';

    if (eDPI < 400) {
        recommendation = 'Aim cực tỉnh - Phù hợp với Sniper';
        emoji = '🎯';
    } else if (eDPI < 600) {
        recommendation = 'Aim tỉnh - Tốt cho Marksman/AR';
        emoji = '🎯';
    } else if (eDPI < 1200) {
        recommendation = 'Cân bằng - Phù hợp đa năng';
        emoji = '⚖️';
    } else if (eDPI < 2000) {
        recommendation = 'Aim nhanh - Tốt cho close range';
        emoji = '🔥';
    } else {
        recommendation = 'Aim rất nhanh - Aggressive play';
        emoji = '⚡';
    }

    console.log(`${emoji} ${recommendation} (eDPI: ${eDPI.toFixed(2)})`);
}

function setPreset(dpi, sensitivity) {
    document.getElementById('dpi').value = dpi;
    document.getElementById('sensitivity').value = sensitivity;
    calculateDPI();

    // Visual feedback
    const buttons = document.querySelectorAll('.preset-buttons button');
    buttons.forEach(btn => btn.style.opacity = '1');
}

// Add enter key support
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calculateDPI();
            }
        });
    });

    // Calculate on page load with default values
    calculateDPI();
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
