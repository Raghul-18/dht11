self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'icon.png',
        sound: 'notification-sound.wav' // Add a sound file
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});
