    var aceleracionX = 0;
    // Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function onDeviceReady() {
      // Update acceleration every 3 seconds
        var options = { frequency: 200 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        var element = document.getElementById('accelerometer');
        element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                            'Acceleration Y: ' + acceleration.y + '<br />' +
                            'Acceleration Z: ' + acceleration.z + '<br />' +
                            'Timestamp: '      + acceleration.timestamp + '<br />';
        aceleracionX =acceleration.x;
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }