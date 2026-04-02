import axios from 'axios';

export async function getWeatherData() {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.871&longitude=-1.016&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe%2FParis';

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo :', error);
    return null;
  }
}
