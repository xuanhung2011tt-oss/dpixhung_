/**
 * DPI Configuration Test Suite
 * Bộ kiểm tra cấu hình DPI
 */

// Test 1: Check if DPI_CONFIG exists
function testConfigExists() {
    console.log('✅ Test 1: Config exists');
    console.assert(typeof DPI_CONFIG === 'object', 'DPI_CONFIG should be an object');
}

// Test 2: Check if all categories exist
function testCategoriesExist() {
    console.log('✅ Test 2: Categories exist');
    console.assert('android' in DPI_CONFIG, 'android category should exist');
    console.assert('iphone' in DPI_CONFIG, 'iphone category should exist');
    console.assert('tablet' in DPI_CONFIG, 'tablet category should exist');
}

// Test 3: Check Android devices
function testAndroidDevices() {
    console.log('✅ Test 3: Android devices');
    const androidDevices = Object.keys(DPI_CONFIG.android);
    console.assert(androidDevices.length > 0, 'Should have Android devices');
    console.log('   Android devices:', androidDevices);
}

// Test 4: Check iPhone devices
function testIPhoneDevices() {
    console.log('✅ Test 4: iPhone devices');
    const iphoneDevices = Object.keys(DPI_CONFIG.iphone);
    console.assert(iphoneDevices.length > 0, 'Should have iPhone devices');
    console.log('   iPhone devices:', iphoneDevices);
}

// Test 5: Check Tablet devices
function testTabletDevices() {
    console.log('✅ Test 5: Tablet devices');
    const tabletDevices = Object.keys(DPI_CONFIG.tablet);
    console.assert(tabletDevices.length > 0, 'Should have Tablet devices');
    console.log('   Tablet devices:', tabletDevices);
}

// Test 6: Test getDPI function
function testGetDPI() {
    console.log('✅ Test 6: getDPI function');
    const dpi = getDPI('android', 'samsung_galaxy_s21');
    console.assert(dpi === 420, 'Samsung Galaxy S21 should have 420 DPI');
    console.log('   Samsung Galaxy S21 DPI:', dpi);
}

// Test 7: Test getDeviceInfo function
function testGetDeviceInfo() {
    console.log('✅ Test 7: getDeviceInfo function');
    const deviceInfo = getDeviceInfo('iphone', 'iphone_14');
    console.assert(deviceInfo !== null, 'Should return device info');
    console.assert(deviceInfo.dpi === 460, 'iPhone 14 should have 460 DPI');
    console.log('   iPhone 14 info:', deviceInfo);
}

// Test 8: Test device properties
function testDeviceProperties() {
    console.log('✅ Test 8: Device properties');
    const device = DPI_CONFIG.android.samsung_galaxy_s21;
    console.assert('name' in device, 'Device should have name');
    console.assert('dpi' in device, 'Device should have dpi');
    console.assert('screenDensity' in device, 'Device should have screenDensity');
    console.assert('resolution' in device, 'Device should have resolution');
    console.assert('inchSize' in device, 'Device should have inchSize');
}

// Test 9: Count total devices
function testTotalDevices() {
    console.log('✅ Test 9: Total devices count');
    const totalAndroid = Object.keys(DPI_CONFIG.android).length;
    const totalIPhone = Object.keys(DPI_CONFIG.iphone).length;
    const totalTablet = Object.keys(DPI_CONFIG.tablet).length;
    const total = totalAndroid + totalIPhone + totalTablet;
    console.log(`   Total devices: ${total}`);
    console.log(`   - Android: ${totalAndroid}`);
    console.log(`   - iPhone: ${totalIPhone}`);
    console.log(`   - Tablet: ${totalTablet}`);
}

// Test 10: Test DPI values are numbers
function testDPIValuesAreNumbers() {
    console.log('✅ Test 10: DPI values are numbers');
    for (const [category, devices] of Object.entries(DPI_CONFIG)) {
        for (const [key, device] of Object.entries(devices)) {
            console.assert(typeof device.dpi === 'number', `${device.name} DPI should be a number`);
        }
    }
}

// Run all tests
function runAllTests() {
    console.log('🧪 Running DPI Configuration Tests...\n');
    
    testConfigExists();
    testCategoriesExist();
    testAndroidDevices();
    testIPhoneDevices();
    testTabletDevices();
    testGetDPI();
    testGetDeviceInfo();
    testDeviceProperties();
    testTotalDevices();
    testDPIValuesAreNumbers();
    
    console.log('\n✅ All tests completed!');
}

// Run tests if in browser console
if (typeof window !== 'undefined') {
    window.runAllTests = runAllTests;
}
