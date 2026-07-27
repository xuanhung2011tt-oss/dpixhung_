/**
 * Main Script for DPI Configuration Web Interface
 * Tập lệnh chính cho giao diện DPI Configuration
 */

function renderDevices(config = DPI_CONFIG) {
    const container = document.getElementById('devicesContainer');
    container.innerHTML = '';

    let hasDevices = false;

    for (const [category, devices] of Object.entries(config)) {
        if (Object.keys(devices).length === 0) continue;

        hasDevices = true;
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        
        const categoryLabels = {
            android: '🤖 Android Devices',
            iphone: '🍎 iPhone',
            tablet: '📱 Tablets'
        };

        categoryTitle.textContent = categoryLabels[category] || category.toUpperCase();
        container.appendChild(categoryTitle);

        const grid = document.createElement('div');
        grid.className = 'devices-grid';

        for (const [key, device] of Object.entries(devices)) {
            const card = document.createElement('div');
            card.className = 'device-card';
            card.innerHTML = `
                <h3>${device.name}</h3>
                <div class="device-info">
                    <p>
                        <label>DPI:</label>
                        <span>${device.dpi}</span>
                    </p>
                    <p>
                        <label>Screen Density:</label>
                        <span>${device.screenDensity}</span>
                    </p>
                    <p>
                        <label>Resolution:</label>
                        <span>${device.resolution}</span>
                    </p>
                    <p>
                        <label>Screen Size:</label>
                        <span>${device.inchSize}"</span>
                    </p>
                </div>
            `;
            grid.appendChild(card);
        }

        container.appendChild(grid);
    }

    if (!hasDevices) {
        container.innerHTML = '<div class="no-results">❌ Không tìm thấy thiết bị nào (No devices found)</div>';
    }
}

function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    let filteredConfig = {};

    for (const [cat, devices] of Object.entries(DPI_CONFIG)) {
        if (category && cat !== category) continue;

        const filteredDevices = {};
        for (const [key, device] of Object.entries(devices)) {
            if (device.name.toLowerCase().includes(searchTerm) || key.toLowerCase().includes(searchTerm)) {
                filteredDevices[key] = device;
            }
        }

        if (Object.keys(filteredDevices).length > 0) {
            filteredConfig[cat] = filteredDevices;
        } else {
            filteredConfig[cat] = {};
        }
    }

    renderDevices(filteredConfig);
}

function resetSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    renderDevices();
}

function exportJSON() {
    const dataStr = JSON.stringify(DPI_CONFIG, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    downloadFile(dataBlob, 'dpi-config.json');
}

function exportCSV() {
    let csv = 'Category,Device Name,DPI,Screen Density,Resolution,Screen Size (inch)\n';
    
    for (const [category, devices] of Object.entries(DPI_CONFIG)) {
        for (const [key, device] of Object.entries(devices)) {
            csv += `${category},"${device.name}",${device.dpi},${device.screenDensity},"${device.resolution}",${device.inchSize}\n`;
        }
    }
    
    const dataBlob = new Blob([csv], { type: 'text/csv' });
    downloadFile(dataBlob, 'dpi-config.csv');
}

function downloadFile(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Initial render
document.addEventListener('DOMContentLoaded', function() {
    renderDevices();

    // Real-time search
    document.getElementById('searchInput').addEventListener('keyup', search);
    document.getElementById('categoryFilter').addEventListener('change', search);
});