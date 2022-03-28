import { useEffect, useState } from 'react';
import { Text, Button, View, TextInput, StyleSheet } from 'react-native';
import * as weatherRepository from './../../repositories/weatherRepository';


const WeatherOverview = () => {
    const [city, setCity] = useState('Copenhagen');
    const [loading, setLoading] = useState(false);
    const [temperature, setTemperature] = useState(0);
    const [weatherDescription, setWeatherDescription] = useState('');

    const loadWeather = async () => {
        setLoading(true);
        weatherRepository.getWeatherFromCity(city).then(weather => {
            setTemperature(weather.main.temp);
            setWeatherDescription(weather.weather.description);
            setLoading(false);
        })
    }

    // Load weather for Copenhagen on initial page load
    useEffect(() => {
        loadWeather()
    }, []);

    return (
        <View>
            <Text>City</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={setCity}
                value={city}
            />
            
            {loading ? <Text>Loading</Text> :
                <>
                <Text>Weather:</Text>
                <Text>Temperature: {temperature - 273.1}°C</Text>
                <Text>{weatherDescription}</Text>
                </>
            }

            <Button onPress={loadWeather} title="Load weather" />
            
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
  }); 

export default WeatherOverview;