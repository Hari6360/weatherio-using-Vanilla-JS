"use strict";

const api_key = "29aae866f00e4bf8f2468e61684e2434";

export const fetchData = function (URL, callback) {
	fetch(`${URL}&appid=${api_key}`)
		.then((res) => res.json())
		.then((data) => callback(data));
};
// https://api.openweathermap.org/data/2.5/weather?q=ananthapur&appid=f1f7c6667be07f20d3e901bfd7866caf

export const url = {
	currentWeather(lat, lon) {
		return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
	},
	forecast(lat, lon) {
		return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
	},
	airPollution(lat, lon) {
		return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
	},
	reverseGeo(lat, lon) {
		return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
	},
	geo(query) {
		return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
	},

};
