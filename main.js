// main.js

function initializePushNotifications(registration, temperature, humidity) {
    // Check temperature and humidity thresholds and send notifications
    const maxTemp = 30; // Set your maximum temperature threshold
    const minTemp = 10; // Set your minimum temperature threshold
    const maxHumidity = 80; // Set your maximum humidity threshold
    const minHumidity = 40; // Set your minimum humidity threshold
  
    if (temperature > maxTemp || temperature < minTemp || humidity > maxHumidity || humidity < minHumidity) {
      // Request permission and send a notification
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          const notificationOptions = {
            body: `Temperature: ${temperature}&deg;C, Humidity: ${humidity}%`,
            icon: 'icon.png',
            sound: 'notification.mp3' // Add a sound file
          };
  
          registration.showNotification('DHT11 Alert', notificationOptions);
        }
      });
    }
  }
  