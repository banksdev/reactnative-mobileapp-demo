const GEO_URL = "http://api.openweathermap.org/geo/1.0/direct";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

type Coordinate = {
    lat: string,
    lon: string,
    name?: string,
    country?: string
}

type Weather = {
    coord: Coordinate,
    weather: {
        main: string,
        description: string,
    }
    main: {
        temp: number
    }
}

async function getLatLonFromCityName(city: string) : Promise<Coordinate> {
    const url = `${GEO_URL}?q=${city}&limit=5&appid=${process.env.OPENWEATHER_API}`
    const result = await fetch(url);
    const coordinates = await result.json() as Coordinate[];

    return coordinates[0];
}

async function getWeatherFromLatLon(coord: Coordinate) : Promise<Weather> {
    const url = `${WEATHER_URL}?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.OPENWEATHER_API}`
    const result = await fetch(url);
    const weather = await result.json() as Weather;
    return weather;
}

export async function getWeatherFromCity(city: string) : Promise<Weather> {
    const coords = await getLatLonFromCityName(city);
    return getWeatherFromLatLon(coords);
}