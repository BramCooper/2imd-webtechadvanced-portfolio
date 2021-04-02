class App{
    constructor(){
        this.getLocation();
        this.lat;
        this.lng;
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this), 
            this.errorLocation.bind(this)
            );
    }

    gotLocation(result){
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        this.getWeather();

    }

    getWeather(){
        let url = `https://cors-anywhere.herokuapp.com/http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/${this.lat}/${this.lng}&appid={b435d4c49985b76a1147d0a45dcc22ef}`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.querySelector("#weather").innerHTML = 
                data.currently.summary;
        })
        .catch(err => {
            console.log("error");
        });
    }

    errorLocation(err){
        console.log(err);
    }
}

let app = new App();