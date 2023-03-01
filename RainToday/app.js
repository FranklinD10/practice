
<html>
    <head>
        <script>
        document.addEventListener("DOMContentLoaded", function() {



var button = document.createElement('button');
button.innerHTML = 'Click me';
document.body.appendChild(button);

button.style.position = 'absolute';
button.style.left = '50%';
button.style.top = '50%';
button.style.transform = 'translate(-50%, -50%)';

button.innerHTML = 'Will it Rain today?';

button.onclick = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
  });
};

var currentLocation;
button.onclick = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    currentLocation = position;
  });
};

button.style.cursor = 'pointer';

var todayWeather;
button.onclick = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    currentLocation = position;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.darksky.net/forecast/' + 'd9d9d9d9d9d9d9d9d9d9d9d9d9d9d9d' + '/' + currentLocation.coords.latitude + ',' + currentLocation.coords.longitude);
    xhr.onload = function() {
      todayWeather = JSON.parse(xhr.responseText);
    };
    xhr.send();
  });
};

button.onclick = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    currentLocation = position;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.darksky.net/forecast/' + 'd9d9d9d9d9d9d9d9d9d9d9d9d9d9d9d' + '/' + currentLocation.coords.latitude + ',' + currentLocation.coords.longitude);
    xhr.onload = function() {
      todayWeather = JSON.parse(xhr.responseText);
      if (todayWeather.currently.precipProbability > 0.6) {
        button.innerHTML = 'Yes';
      } else {
        button.innerHTML = 'No';
      }
    };
    xhr.send();
  });
};
});
        </script>
    </head>
    <body style="margin: 0;">
     
    </body>
</html>