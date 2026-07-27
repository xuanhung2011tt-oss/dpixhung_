/**
 * DPI Configuration for Various Devices
 * Cấu hình DPI cho các dòng máy khác nhau
 */

const DPI_CONFIG = {
  // Android Devices
  android: {
    samsung_galaxy_s21: {
      name: "Samsung Galaxy S21",
      dpi: 420,
      screenDensity: "xxhdpi",
      resolution: "1440x3200",
      inchSize: 6.2
    },
    samsung_galaxy_s22: {
      name: "Samsung Galaxy S22",
      dpi: 426,
      screenDensity: "xxhdpi",
      resolution: "1440x3088",
      inchSize: 6.1
    },
    samsung_galaxy_note20: {
      name: "Samsung Galaxy Note 20",
      dpi: 360,
      screenDensity: "xxhdpi",
      resolution: "1440x3040",
      inchSize: 6.7
    },
    google_pixel_6: {
      name: "Google Pixel 6",
      dpi: 411,
      screenDensity: "xxhdpi",
      resolution: "1440x3120",
      inchSize: 6.4
    },
    google_pixel_7: {
      name: "Google Pixel 7",
      dpi: 512,
      screenDensity: "xxxhdpi",
      resolution: "1440x2992",
      inchSize: 6.3
    },
    oneplus_9: {
      name: "OnePlus 9",
      dpi: 405,
      screenDensity: "xxhdpi",
      resolution: "1440x3216",
      inchSize: 6.55
    }
  },

  // Apple iPhone
  iphone: {
    iphone_14: {
      name: "iPhone 14",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1170x2532",
      inchSize: 6.1
    },
    iphone_14_pro: {
      name: "iPhone 14 Pro",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1170x2532",
      inchSize: 6.1
    },
    iphone_14_pro_max: {
      name: "iPhone 14 Pro Max",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1284x2778",
      inchSize: 6.7
    },
    iphone_13: {
      name: "iPhone 13",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1170x2532",
      inchSize: 6.1
    },
    iphone_13_pro: {
      name: "iPhone 13 Pro",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1170x2532",
      inchSize: 6.1
    },
    iphone_12: {
      name: "iPhone 12",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1125x2436",
      inchSize: 6.1
    },
    iphone_se: {
      name: "iPhone SE (3rd Gen)",
      dpi: 326,
      screenDensity: "2x",
      resolution: "750x1334",
      inchSize: 4.7
    }
  },

  // Tablet Devices
  tablet: {
    ipad_air: {
      name: "iPad Air",
      dpi: 264,
      screenDensity: "2x",
      resolution: "2360x1640",
      inchSize: 10.9
    },
    ipad_pro_11: {
      name: "iPad Pro 11",
      dpi: 264,
      screenDensity: "2x",
      resolution: "2388x1668",
      inchSize: 11
    },
    ipad_pro_12_9: {
      name: "iPad Pro 12.9",
      dpi: 264,
      screenDensity: "2x",
      resolution: "2732x2048",
      inchSize: 12.9
    },
    samsung_galaxy_tab_s8: {
      name: "Samsung Galaxy Tab S8",
      dpi: 266,
      screenDensity: "xhdpi",
      resolution: "2560x1600",
      inchSize: 11
    }
  }
};

// Function to get DPI by device type
function getDPI(deviceType, deviceModel) {
  if (DPI_CONFIG[deviceType] && DPI_CONFIG[deviceType][deviceModel]) {
    return DPI_CONFIG[deviceType][deviceModel].dpi;
  }
  return null;
}

// Function to get device info
function getDeviceInfo(deviceType, deviceModel) {
  if (DPI_CONFIG[deviceType] && DPI_CONFIG[deviceType][deviceModel]) {
    return DPI_CONFIG[deviceType][deviceModel];
  }
  return null;
}

// Function to list all devices
function getAllDevices() {
  return DPI_CONFIG;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DPI_CONFIG,
    getDPI,
    getDeviceInfo,
    getAllDevices
  };
}
