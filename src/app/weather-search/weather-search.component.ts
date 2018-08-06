import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

	prop:string = "Hey!";
	cityName:string = "";
	cityWeather:string = "";
	forecastArray = [];

	searchWeather(city){
		let url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&unit=standard&APPID=ffbaed99f10375462add667213061774';
		this.http.get(url)
			.toPromise()
			.then( data => {
				// this.cityName = data.name;
				// this.cityWeather = data.weather[0].description;
				this.forecastArray = data.list;
				console.log(this.forecastArray);
			});
	}

	constructor(private http:HttpClient) { }

	ngOnInit() {
	}

}

