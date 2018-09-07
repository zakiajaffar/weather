function getWeather() {

    document.querySelector(".weather-info").style.display = "block";
    document.querySelector(".weather-comment").style.display = "none";

    const cityName = document.querySelector("input").value;

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1cafa1aa713dc95fd5cd808d0df22dfc&units=metric`,
        success: function (data) {
            console.log(data);
            
            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp > span").innerHTML = Math.round(data.main.temp);
            document.querySelector(".description").innerHTML = data.weather[0].main;
            document.querySelector(".min").innerHTML = Math.round(data.main.temp_min);
            document.querySelector(".max").innerHTML = Math.round(data.main.temp_max);

            let calcTime = new Date();
            let sunsetTime = new Date(data.sys.sunset * 1000);
            let sunriseTime= new Date(data.sys.sunrise * 1000);

            if (sunsetTime > calcTime && sunriseTime < calcTime){

             document.querySelector("body").style["background-image"] = 'linear-gradient(#f05053a6, #e1eec3)';
              document.querySelector("body").style["color"] = 'white'
         } else {
            document.querySelector("body").style["background-image"] = 'linear-gradient(#1c0337,#2f0743c7)';
            document.querySelector("body").style["color"] = 'white'
            }




        let weatherIcon = data.weather[0].description
        
        if (weatherIcon == "haze"){
            
            document.querySelector(".description").innerHTML=  `<i class="wi wi-day-haze"></i>`;
        }else if (weatherIcon =="smoke"){
            
            document.querySelector(".description").innerHTML=  `<i class="wi wi-smoke"></i>`;

        }else if (weatherIcon == "few clouds"){
            
            document.querySelector(".description").innerHTML=  `<i class="wi wi-cloudy-gusts"></i>`;
        }
        else if (weatherIcon== "broken clouds"){
            
            document.querySelector(".description").innerHTML=  `<i class="wi wi-day-cloudy"></i>`;
        }else if (weatherIcon == "clear sky"){
            
            document.querySelector(".description").innerHTML=  `<i class=" wi wi-day-cloudy-high"></i>`;
        }else if (weatherIcon == "mist"){
           
            document.querySelector(".description").innerHTML=  `<i class=" wi wi-smog"></i>`;
        }else if (weatherIcon == "dust"){
           
            document.querySelector(".description").innerHTML=  `<i class=" wi wi-dust"></i>`;
        }else if (weatherIcon == "light rain"){
            
            document.querySelector(".description").innerHTML=  `<i class="wi wi-day-rain"></i>`;
        }



    },

    error: function (err) {
        console.log(err);
        alert(err.responseJSON.message);
        document.querySelector(".weather-info").style.display = "none";
    }
});

}



