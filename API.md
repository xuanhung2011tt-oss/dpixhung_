# API Documentation - Tài liệu API

## 📚 Hàm khả dụng (Available Functions)

### 1. `getDPI(deviceType, deviceModel)`

Lấy giá trị DPI của một thiết bị cụ thể.

**Tham số (Parameters):**
- `deviceType` (string): Loại thiết bị - `'android'`, `'iphone'`, hoặc `'tablet'`
- `deviceModel` (string): Mã thiết bị (xem danh sách bên dưới)

**Trả về (Returns):** 
- (number) Giá trị DPI hoặc `null` nếu không tìm thấy

**Ví dụ (Example):**
```javascript
const dpi = getDPI('android', 'samsung_galaxy_s21');
console.log(dpi); // 420

const dpi2 = getDPI('iphone', 'iphone_14');
console.log(dpi2); // 460
```

---

### 2. `getDeviceInfo(deviceType, deviceModel)`

Lấy thông tin chi tiết của một thiết bị.

**Tham số (Parameters):**
- `deviceType` (string): Loại thiết bị - `'android'`, `'iphone'`, hoặc `'tablet'`
- `deviceModel` (string): Mã thiết bị

**Trả về (Returns):** 
- (object) Đối tượng thiết bị với các thuộc tính: `name`, `dpi`, `screenDensity`, `resolution`, `inchSize`
- hoặc `null` nếu không tìm thấy

**Ví dụ (Example):**
```javascript
const device = getDeviceInfo('iphone', 'iphone_14');
console.log(device);
// {
//   name: "iPhone 14",
//   dpi: 460,
//   screenDensity: "3x",
//   resolution: "1170x2532",
//   inchSize: 6.1
// }
```

---

### 3. `getAllDevices()`

Lấy toàn bộ cấu hình của tất cả thiết bị.

**Tham số (Parameters):** Không có

**Trả về (Returns):** 
- (object) Đối tượng `DPI_CONFIG` chứa toàn bộ cấu hình

**Ví dụ (Example):**
```javascript
const allDevices = getAllDevices();
console.log(allDevices);
// { android: {...}, iphone: {...}, tablet: {...} }
```

---

## 🔑 Danh sách mã thiết bị (Device Model Codes)

### Android Devices

| Mã (Code) | Tên Thiết bị | DPI |
|---|---|---|
| `samsung_galaxy_s21` | Samsung Galaxy S21 | 420 |
| `samsung_galaxy_s22` | Samsung Galaxy S22 | 426 |
| `samsung_galaxy_note20` | Samsung Galaxy Note 20 | 360 |
| `google_pixel_6` | Google Pixel 6 | 411 |
| `google_pixel_7` | Google Pixel 7 | 512 |
| `oneplus_9` | OnePlus 9 | 405 |

### iPhone

| Mã (Code) | Tên Thiết bị | DPI |
|---|---|---|
| `iphone_14` | iPhone 14 | 460 |
| `iphone_14_pro` | iPhone 14 Pro | 460 |
| `iphone_14_pro_max` | iPhone 14 Pro Max | 460 |
| `iphone_13` | iPhone 13 | 460 |
| `iphone_13_pro` | iPhone 13 Pro | 460 |
| `iphone_12` | iPhone 12 | 460 |
| `iphone_se` | iPhone SE (3rd Gen) | 326 |

### Tablet

| Mã (Code) | Tên Thiết bị | DPI |
|---|---|---|
| `ipad_air` | iPad Air | 264 |
| `ipad_pro_11` | iPad Pro 11 | 264 |
| `ipad_pro_12_9` | iPad Pro 12.9 | 264 |
| `samsung_galaxy_tab_s8` | Samsung Galaxy Tab S8 | 266 |

---

## 🎨 Cách sử dụng trong CSS (CSS Usage)

```css
/* Cho iPhone */
@media only screen and (device-resolution: 460dpi) {
  body {
    font-size: 16px;
  }
}

/* Cho Android (Samsung Galaxy S21) */
@media only screen and (device-resolution: 420dpi) {
  body {
    font-size: 14px;
  }
}

/* Cho Tablet */
@media only screen and (device-resolution: 264dpi) {
  body {
    font-size: 18px;
  }
}
```

---

## 🔧 Cách sử dụng trong Node.js (Node.js Usage)

```javascript
const { DPI_CONFIG, getDPI, getDeviceInfo, getAllDevices } = require('./dpi-config.js');

// Lấy DPI
const dpi = getDPI('android', 'samsung_galaxy_s21');
console.log(dpi); // 420

// Lấy thông tin thiết bị
const device = getDeviceInfo('iphone', 'iphone_14');
console.log(device);

// Lấy tất cả thiết bị
const all = getAllDevices();
console.log(Object.keys(all));
```

---

## 📝 Cấu trúc dữ liệu thiết bị (Device Structure)

Mỗi thiết bị có cấu trúc như sau:

```javascript
{
  name: string,           // Tên thiết bị
  dpi: number,            // Giá trị DPI
  screenDensity: string,  // Mật độ màn hình (xxhdpi, 3x, v.v.)
  resolution: string,     // Độ phân giải (VD: 1440x3200)
  inchSize: number        // Kích thước màn hình tính bằng inch
}
```

---

## 🧪 Chạy kiểm tra (Run Tests)

Mở file `index.html` trong trình duyệt, mở Developer Console (F12), và nhập:

```javascript
runAllTests()
```

Hoặc sử dụng trong Node.js:

```bash
node dpi-config.test.js
```

---

## 💡 Ví dụ thực tế (Real-world Examples)

### Ví dụ 1: Lấy DPI từ User Agent

```javascript
function getDPIByUserAgent() {
  const ua = navigator.userAgent;
  
  if (ua.includes('iPhone')) {
    return getDPI('iphone', 'iphone_14');
  } else if (ua.includes('Android')) {
    return getDPI('android', 'samsung_galaxy_s21');
  } else if (ua.includes('iPad')) {
    return getDPI('tablet', 'ipad_pro_12_9');
  }
  
  return 96; // default
}
```

### Ví dụ 2: Tạo bảng thiết bị

```javascript
function createDeviceTable() {
  const table = document.createElement('table');
  
  for (const [type, devices] of Object.entries(DPI_CONFIG)) {
    for (const [key, device] of Object.entries(devices)) {
      const row = table.insertRow();
      row.insertCell(0).textContent = type;
      row.insertCell(1).textContent = device.name;
      row.insertCell(2).textContent = device.dpi;
    }
  }
  
  return table;
}
```

---

**Cần giúp đỡ? Tạo một issue trên GitHub!** 🚀