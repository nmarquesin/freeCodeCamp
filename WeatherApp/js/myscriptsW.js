var latitude;
var longitude;
var html;
var tempC;
var tempF;
var tempColor;
var unit;
var icon;


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude; //60.1839
    longitude = position.coords.longitude;  //5.4638

    // This bit requests weather data to the OpenWeatherMap API
    html ="http://api.openweathermap.org/data/2.5/weather?lat="+String(latitude)+"&lon="+String(longitude)+"&APPID=112eca90e2191b2aa7c71903acf32c98";
    $.getJSON(html, function(json) {
        $(".city").html(json.name);
        tempC = Math.floor(json.main.temp-273.15);
        tempF = tempC*1.8 +32
        $(".temp").html(tempC);
        $(".celsius").html(tempC+"&degC");
        $(".fahrenheit").html(tempF+"&degF");
        $(".situation").html(json.weather[0].description);
        icon = "<img src=http://openweathermap.org/img/w/"+json.weather[0].icon+".png>";
        $(".icon").html(icon);

    });


  });
}
