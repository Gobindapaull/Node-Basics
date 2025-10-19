document.getElementById("connect").addEventListener("click", async () => {
  try {
    // Ask the user to choose a Bluetooth device
    const device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ['battery_service']
    });

    console.log("✅ Device selected:", device.name || "Unnamed device");

    // Connect to the device’s GATT server
    const server = await device.gatt.connect();
    console.log("🔗 Connected to GATT Server");

    // Access Battery Service
    const service = await server.getPrimaryService('battery_service');

    // Get Battery Level characteristic
    const characteristic = await service.getCharacteristic('battery_level');

    // Read battery level
    const value = await characteristic.readValue();
    console.log("🔋 Battery level:", value.getUint8(0) + "%");
  } catch (error) {
    console.error("❌ Bluetooth error:", error);
  }
});
