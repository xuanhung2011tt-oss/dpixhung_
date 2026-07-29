/**
 * DPI Configuration for Various Devices
 * Cấu hình DPI cho các dòng máy khác nhau
 */

const DPI_CONFIG = {
  // Samsung Galaxy Devices
  samsung: {
    samsung_galaxy_s23_ultra: {
      name: "Samsung Galaxy S23 Ultra",
      dpi: 515,
      screenDensity: "xxxhdpi",
      resolution: "1440x3088",
      inchSize: 6.8
    },
    samsung_galaxy_s23_plus: {
      name: "Samsung Galaxy S23+",
      dpi: 500,
      screenDensity: "xxxhdpi",
      resolution: "1440x3072",
      inchSize: 6.6
    },
    samsung_galaxy_s23: {
      name: "Samsung Galaxy S23",
      dpi: 420,
      screenDensity: "xxhdpi",
      resolution: "1440x3072",
      inchSize: 6.1
    },
    samsung_galaxy_s22_ultra: {
      name: "Samsung Galaxy S22 Ultra",
      dpi: 515,
      screenDensity: "xxxhdpi",
      resolution: "1440x3088",
      inchSize: 6.8
    },
    samsung_galaxy_s22_plus: {
      name: "Samsung Galaxy S22+",
      dpi: 500,
      screenDensity: "xxxhdpi",
      resolution: "1440x3072",
      inchSize: 6.6
    },
    samsung_galaxy_s22: {
      name: "Samsung Galaxy S22",
      dpi: 426,
      screenDensity: "xxhdpi",
      resolution: "1440x3088",
      inchSize: 6.1
    },
    samsung_galaxy_s21_ultra: {
      name: "Samsung Galaxy S21 Ultra",
      dpi: 515,
      screenDensity: "xxxhdpi",
      resolution: "1440x3200",
      inchSize: 6.8
    },
    samsung_galaxy_s21_plus: {
      name: "Samsung Galaxy S21+",
      dpi: 421,
      screenDensity: "xxhdpi",
      resolution: "1440x3200",
      inchSize: 6.7
    },
    samsung_galaxy_s21: {
      name: "Samsung Galaxy S21",
      dpi: 420,
      screenDensity: "xxhdpi",
      resolution: "1440x3200",
      inchSize: 6.2
    },
    samsung_galaxy_s20_ultra: {
      name: "Samsung Galaxy S20 Ultra",
      dpi: 511,
      screenDensity: "xxxhdpi",
      resolution: "1440x3200",
      inchSize: 6.9
    },
    samsung_galaxy_s20_plus: {
      name: "Samsung Galaxy S20+",
      dpi: 525,
      screenDensity: "xxxhdpi",
      resolution: "1440x3200",
      inchSize: 6.7
    },
    samsung_galaxy_s20: {
      name: "Samsung Galaxy S20",
      dpi: 563,
      screenDensity: "xxxhdpi",
      resolution: "1440x3200",
      inchSize: 6.2
    },
    samsung_galaxy_a72: {
      name: "Samsung Galaxy A72",
      dpi: 409,
      screenDensity: "xxhdpi",
      resolution: "1080x2400",
      inchSize: 6.7
    },
    samsung_galaxy_a52: {
      name: "Samsung Galaxy A52",
      dpi: 405,
      screenDensity: "xxhdpi",
      resolution: "1080x2400",
      inchSize: 6.5
    },
    samsung_galaxy_a42_5g: {
      name: "Samsung Galaxy A42 5G",
      dpi: 405,
      screenDensity: "xxhdpi",
      resolution: "1080x2400",
      inchSize: 6.6
    },
    samsung_galaxy_a22: {
      name: "Samsung Galaxy A22",
      dpi: 269,
      screenDensity: "hdpi",
      resolution: "720x1520",
      inchSize: 6.5
    },
    samsung_galaxy_a12: {
      name: "Samsung Galaxy A12",
      dpi: 269,
      screenDensity: "hdpi",
      resolution: "720x1600",
      inchSize: 6.5
    },
    samsung_galaxy_note_20_ultra: {
      name: "Samsung Galaxy Note 20 Ultra",
      dpi: 515,
      screenDensity: "xxxhdpi",
      resolution: "1440x3200",
      inchSize: 6.9
    },
    samsung_galaxy_note_20: {
      name: "Samsung Galaxy Note 20",
      dpi: 360,
      screenDensity: "xxhdpi",
      resolution: "1440x3040",
      inchSize: 6.7
    },
    samsung_galaxy_note_10_plus: {
      name: "Samsung Galaxy Note 10+",
      dpi: 498,
      screenDensity: "xxxhdpi",
      resolution: "1440x3040",
      inchSize: 6.8
    },
    samsung_galaxy_note_10: {
      name: "Samsung Galaxy Note 10",
      dpi: 432,
      screenDensity: "xxhdpi",
      resolution: "1080x2280",
      inchSize: 6.3
    },
    samsung_galaxy_z_fold_4: {
      name: "Samsung Galaxy Z Fold 4",
      dpi: 410,
      screenDensity: "xxhdpi",
      resolution: "1768x2208",
      inchSize: 7.6
    },
    samsung_galaxy_z_flip_4: {
      name: "Samsung Galaxy Z Flip 4",
      dpi: 425,
      screenDensity: "xxhdpi",
      resolution: "1080x2640",
      inchSize: 6.7
    },
    samsung_galaxy_m42_5g: {
      name: "Samsung Galaxy M42 5G",
      dpi: 405,
      screenDensity: "xxhdpi",
      resolution: "1080x2400",
      inchSize: 6.6
    },
    samsung_galaxy_m32: {
      name: "Samsung Galaxy M32",
      dpi: 394,
      screenDensity: "xxhdpi",
      resolution: "1080x2340",
      inchSize: 6.4
    }
  },

  // Android Devices
  android: {
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

  // Vivo Devices
  vivo: {
    vivo_x80: {
      name: "Vivo X80",
      dpi: 440,
      screenDensity: "xxhdpi",
      resolution: "1440x3200",
      inchSize: 6.78
    },
    vivo_x80_pro: {
      name: "Vivo X80 Pro",
      dpi: 440,
      screenDensity: "xxhdpi",
      resolution: "1440x3200",
      inchSize: 6.78
    },
    vivo_v23: {
      name: "Vivo V23",
      dpi: 405,
      screenDensity: "xxhdpi",
      resolution: "1080x2400",
      inchSize: 6.44
    },
    vivo_v23_pro: {
      name: "Vivo V23 Pro",
      dpi: 405,
      screenDensity: "xxhdpi",
      resolution: "1080x2400",
      inchSize: 6.44
    },
    vivo_v23e: {
      name: "Vivo V23e",
      dpi: 405,
      screenDensity: "xxhdpi",
      resolution: "1080x2340",
      inchSize: 6.44
    },
    vivo_x70: {
      name: "Vivo X70",
      dpi: 440,
      screenDensity: "xxhdpi",
      resolution: "1440x3200",
      inchSize: 6.56
    },
    vivo_x70_pro: {
      name: "Vivo X70 Pro",
      dpi: 440,
      screenDensity: "xxhdpi",
      resolution: "1440x3200",
      inchSize: 6.56
    },
    vivo_x70_pro_plus: {
      name: "Vivo X70 Pro Plus",
      dpi: 440,
      screenDensity: "xxhdpi",
      resolution: "1440x3200",
      inchSize: 6.78
    },
    vivo_y72_5g: {
      name: "Vivo Y72 5G",
      dpi: 395,
      screenDensity: "xxhdpi",
      resolution: "1080x2388",
      inchSize: 6.58
    },
    vivo_y53s: {
      name: "Vivo Y53s",
      dpi: 269,
      screenDensity: "hdpi",
      resolution: "720x1520",
      inchSize: 6.44
    },
    vivo_y21: {
      name: "Vivo Y21",
      dpi: 269,
      screenDensity: "hdpi",
      resolution: "720x1520",
      inchSize: 6.51
    },
    vivo_y21s: {
      name: "Vivo Y21s",
      dpi: 405,
      screenDensity: "xxhdpi",
      resolution: "1080x2340",
      inchSize: 6.38
    },
    vivo_y21a: {
      name: "Vivo Y21a",
      dpi: 269,
      screenDensity: "hdpi",
      resolution: "720x1600",
      inchSize: 6.51
    },
    vivo_s12: {
      name: "Vivo S12",
      dpi: 405,
      screenDensity: "xxhdpi",
      resolution: "1080x2400",
      inchSize: 6.44
    },
    vivo_s12_pro: {
      name: "Vivo S12 Pro",
      dpi: 405,
      screenDensity: "xxhdpi",
      resolution: "1080x2400",
      inchSize: 6.56
    },
    vivo_t1: {
      name: "Vivo T1",
      dpi: 405,
      screenDensity: "xxhdpi",
      resolution: "1080x2388",
      inchSize: 6.51
    },
    vivo_t1x: {
      name: "Vivo T1x",
      dpi: 395,
      screenDensity: "xxhdpi",
      resolution: "1080x2340",
      inchSize: 6.58
    },
    vivo_z6_5g: {
      name: "Vivo Z6 5G",
      dpi: 405,
      screenDensity: "xxhdpi",
      resolution: "1080x2340",
      inchSize: 6.52
    }
  },

  // Apple iPhone - Complete Series
  iphone: {
    // iPhone 15 Series (Latest)
    iphone_15: {
      name: "iPhone 15",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1179x2556",
      inchSize: 6.1
    },
    iphone_15_plus: {
      name: "iPhone 15 Plus",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1284x2778",
      inchSize: 6.7
    },
    iphone_15_pro: {
      name: "iPhone 15 Pro",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1179x2556",
      inchSize: 6.1
    },
    iphone_15_pro_max: {
      name: "iPhone 15 Pro Max",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1284x2778",
      inchSize: 6.7
    },

    // iPhone 14 Series
    iphone_14: {
      name: "iPhone 14",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1170x2532",
      inchSize: 6.1
    },
    iphone_14_plus: {
      name: "iPhone 14 Plus",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1284x2778",
      inchSize: 6.7
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

    // iPhone 13 Series
    iphone_13: {
      name: "iPhone 13",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1170x2532",
      inchSize: 6.1
    },
    iphone_13_mini: {
      name: "iPhone 13 Mini",
      dpi: 476,
      screenDensity: "3x",
      resolution: "1080x2340",
      inchSize: 5.4
    },
    iphone_13_pro: {
      name: "iPhone 13 Pro",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1170x2532",
      inchSize: 6.1
    },
    iphone_13_pro_max: {
      name: "iPhone 13 Pro Max",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1284x2778",
      inchSize: 6.7
    },

    // iPhone 12 Series
    iphone_12: {
      name: "iPhone 12",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1125x2436",
      inchSize: 6.1
    },
    iphone_12_mini: {
      name: "iPhone 12 Mini",
      dpi: 476,
      screenDensity: "3x",
      resolution: "1080x2340",
      inchSize: 5.4
    },
    iphone_12_pro: {
      name: "iPhone 12 Pro",
      dpi: 460,
      screenDensity: "3x",
      resolution: "1125x2436",
      inchSize: 6.1
    },
    iphone_12_pro_max: {
      name: "iPhone 12 Pro Max",
      dpi: 458,
      screenDensity: "3x",
      resolution: "1284x2778",
      inchSize: 6.7
    },

    // iPhone 11 Series
    iphone_11: {
      name: "iPhone 11",
      dpi: 326,
      screenDensity: "2x",
      resolution: "750x1334",
      inchSize: 6.1
    },
    iphone_11_pro: {
      name: "iPhone 11 Pro",
      dpi: 458,
      screenDensity: "3x",
      resolution: "1125x2436",
      inchSize: 5.8
    },
    iphone_11_pro_max: {
      name: "iPhone 11 Pro Max",
      dpi: 458,
      screenDensity: "3x",
      resolution: "1242x2688",
      inchSize: 6.5
    },

    // iPhone XS Series
    iphone_xs: {
      name: "iPhone XS",
      dpi: 458,
      screenDensity: "3x",
      resolution: "1125x2436",
      inchSize: 5.8
    },
    iphone_xs_max: {
      name: "iPhone XS Max",
      dpi: 458,
      screenDensity: "3x",
      resolution: "1242x2688",
      inchSize: 6.5
    },
    iphone_xr: {
      name: "iPhone XR",
      dpi: 326,
      screenDensity: "2x",
      resolution: "750x1334",
      inchSize: 6.1
    },

    // iPhone X Series
    iphone_x: {
      name: "iPhone X",
      dpi: 458,
      screenDensity: "3x",
      resolution: "1125x2436",
      inchSize: 5.8
    },

    // iPhone 8 Series
    iphone_8_plus: {
      name: "iPhone 8 Plus",
      dpi: 401,
      screenDensity: "3x",
      resolution: "1080x1920",
      inchSize: 5.5
    },
    iphone_8: {
      name: "iPhone 8",
      dpi: 326,
      screenDensity: "2x",
      resolution: "750x1334",
      inchSize: 4.7
    },

    // iPhone 7 Series
    iphone_7_plus: {
      name: "iPhone 7 Plus",
      dpi: 401,
      screenDensity: "3x",
      resolution: "1080x1920",
      inchSize: 5.5
    },
    iphone_7: {
      name: "iPhone 7",
      dpi: 326,
      screenDensity: "2x",
      resolution: "750x1334",
      inchSize: 4.7
    },

    // iPhone 6 Series
    iphone_6s_plus: {
      name: "iPhone 6s Plus",
      dpi: 401,
      screenDensity: "3x",
      resolution: "1080x1920",
      inchSize: 5.5
    },
    iphone_6s: {
      name: "iPhone 6s",
      dpi: 326,
      screenDensity: "2x",
      resolution: "750x1334",
      inchSize: 4.7
    },
    iphone_6_plus: {
      name: "iPhone 6 Plus",
      dpi: 401,
      screenDensity: "3x",
      resolution: "1080x1920",
      inchSize: 5.5
    },
    iphone_6: {
      name: "iPhone 6",
      dpi: 326,
      screenDensity: "2x",
      resolution: "750x1334",
      inchSize: 4.7
    },

    // iPhone SE Series
    iphone_se_3rd_gen: {
      name: "iPhone SE (3rd Gen)",
      dpi: 326,
      screenDensity: "2x",
      resolution: "750x1334",
      inchSize: 4.7
    },
    iphone_se_2nd_gen: {
      name: "iPhone SE (2nd Gen)",
      dpi: 326,
      screenDensity: "2x",
      resolution: "750x1334",
      inchSize: 4.7
    },
    iphone_se_1st_gen: {
      name: "iPhone SE (1st Gen)",
      dpi: 326,
      screenDensity: "2x",
      resolution: "750x1334",
      inchSize: 4.0
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
