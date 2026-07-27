# DPI Configuration - Cấu hình DPI cho các thiết bị

Cấu hình DPI (Dots Per Inch) cho các dòng máy khác nhau như Galaxy, Android, iPhone, Tablet, vân vân.

Configuration for DPI (Dots Per Inch) for various device lines such as Galaxy, Android, iPhone, Tablet, etc.

## 📋 Danh sách thiết bị được hỗ trợ (Supported Devices)

### 🤖 Android Devices
- Samsung Galaxy S21 (420 DPI)
- Samsung Galaxy S22 (426 DPI)
- Samsung Galaxy Note 20 (360 DPI)
- Google Pixel 6 (411 DPI)
- Google Pixel 7 (512 DPI)
- OnePlus 9 (405 DPI)

### 🍎 iPhone
- iPhone 14 (460 DPI)
- iPhone 14 Pro (460 DPI)
- iPhone 14 Pro Max (460 DPI)
- iPhone 13 (460 DPI)
- iPhone 13 Pro (460 DPI)
- iPhone 12 (460 DPI)
- iPhone SE (3rd Gen) (326 DPI)

### 📱 Tablets
- iPad Air (264 DPI)
- iPad Pro 11" (264 DPI)
- iPad Pro 12.9" (264 DPI)
- Samsung Galaxy Tab S8 (266 DPI)

## 🚀 Cách sử dụng (Usage)

### 1. Sử dụng trong HTML (Using in HTML)

Mở file `index.html` trong trình duyệt để xem giao diện tương tác:

```bash
# Mở trực tiếp trong trình duyệt (Open directly in browser)
open index.html
# hoặc (or)
start index.html
```

### 2. Sử dụng trong JavaScript (Using in JavaScript)

```javascript
// Import cấu hình
<script src="dpi-config.js"></script>

// Lấy DPI của một thiết bị cụ thể
const dpi = getDPI('android', 'samsung_galaxy_s21');
console.log(dpi); // 420

// Lấy thông tin chi tiết của thiết bị
const deviceInfo = getDeviceInfo('iphone', 'iphone_14');
console.log(deviceInfo);
// {
//   name: "iPhone 14",
//   dpi: 460,
//   screenDensity: "3x",
//   resolution: "1170x2532",
//   inchSize: 6.1
// }

// Lấy tất cả cấu hình
const allDevices = getAllDevices();
```

### 3. Sử dụng CSS Media Queries (Using CSS Media Queries)

```css
/* iPhone */
@media only screen and (device-resolution: 460dpi) {
  /* CSS cho iPhone 14 */
}

/* Android */
@media only screen and (device-resolution: 420dpi) {
  /* CSS cho Samsung Galaxy S21 */
}
```

## 📊 Bảng DPI Tham chiếu (DPI Reference Table)

| Thiết bị (Device) | DPI | Screen Density | Độ phân giải (Resolution) |
|---|---|---|---|
| Samsung Galaxy S21 | 420 | xxhdpi | 1440x3200 |
| Samsung Galaxy S22 | 426 | xxhdpi | 1440x3088 |
| Samsung Galaxy Note 20 | 360 | xxhdpi | 1440x3040 |
| Google Pixel 6 | 411 | xxhdpi | 1440x3120 |
| Google Pixel 7 | 512 | xxxhdpi | 1440x2992 |
| iPhone 14 | 460 | 3x | 1170x2532 |
| iPhone 14 Pro Max | 460 | 3x | 1284x2778 |
| iPhone SE | 326 | 2x | 750x1334 |
| iPad Air | 264 | 2x | 2360x1640 |
| iPad Pro 12.9" | 264 | 2x | 2732x2048 |

## 🔍 Phân loại DPI (DPI Classification)

```
Android Screen Densities:
- ldpi: ~120 dpi
- mdpi: ~160 dpi
- hdpi: ~240 dpi
- xhdpi: ~320 dpi
- xxhdpi: ~480 dpi
- xxxhdpi: ~640 dpi

iOS Scale Factors:
- @1x: 1.0 (326 dpi - iPhone SE)
- @2x: 2.0 (326-330 dpi - iPhone)
- @3x: 3.0 (460-462 dpi - iPhone 6/7/8+)
```

## 💾 Cấu trúc tệp (File Structure)

```
dpixhung_/
├── README.md              # Hướng dẫn sử dụng (Documentation)
├── dpi-config.js          # Cấu hình DPI (DPI Configuration)
└── index.html             # Giao diện web tương tác (Interactive Web UI)
```

## 🎯 Các tính năng (Features)

✅ Cấu hình DPI cho tất cả các thiết bị phổ biến  
✅ Giao diện web tương tác với tìm kiếm  
✅ Hỗ trợ JavaScript module  
✅ Thông tin chi tiết về độ phân giải và kích thước màn hình  
✅ Dễ dàng mở rộng và thêm thiết bị mới  

## 📝 Thêm thiết bị mới (Add New Device)

Để thêm một thiết bị mới, chỉnh sửa file `dpi-config.js`:

```javascript
const DPI_CONFIG = {
  android: {
    my_device: {
      name: "My Device Name",
      dpi: 400,
      screenDensity: "xxhdpi",
      resolution: "1440x3040",
      inchSize: 6.5
    }
  }
};
```

## 📞 Liên hệ (Contact)

Nếu bạn có bất kỳ câu hỏi nào, vui lòng tạo một issue trong repository này.

---

**Tạo bởi (Created by)**: xuanhung2011tt-oss  
**Ngôn ngữ (Language)**: JavaScript, HTML  
**Cấp độ (License)**: Open Source
