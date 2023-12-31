"use strict";

import { updateWeather } from "./app.js";
const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474"; // London

// funtion to get location from user using browser inbuilt functionality

const currentLocation = function () {
	window.navigator.geolocation.getCurrentPosition(
		(res) => {
			const { latitude, longitude } = res.coords;

			updateWeather(`lat=${latitude}`, `lon=${longitude}`);
		},
		(err) => {
			window.location.hash = defaultLocation;
		}
	);
};

// function to get location from user based on user search

const searchedLocation = (query) => updateWeather(...query.split("&"));

const routes = new Map([
	["/current-location", currentLocation],
	["/weather", searchedLocation],
]);

const checkHash = function () {
	const requestURL = window.location.hash.slice(1);
	const [route, query] = requestURL.includes
		? requestURL.split("?")
		: [requestURL];
	routes.get(route) ? routes.get(route)(query) : error404();
};

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
	if (!window.location.hash) {
		window.location.hash = "#/current-location";
	} else {
		checkHash();
	}
});
