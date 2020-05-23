import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import DarkSky from 'dark-sky';

import './config/dotEnv';
import config from './config';
import { API_KEY as DARKSKY_API_KEY } from './config/weather';

const { url, port } = config;

const app = express();
const darksky = new DarkSky(DARKSKY_API_KEY);

app.use(cors());
app.enable('trust proxy');

app.get('/api', async (req, res) => {
  try {
    const { latitude, longitude, lang = 'en', units = 'us' } = req.query;

    const weatherData = await darksky
      .latitude(latitude as string | number)
      .longitude(longitude as string | number)
      .language(lang as string)
      .units(units as string)
      .get();

    res.status(200).json(weatherData);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(chalk`
      Server is running on port {green.bold ${port}}
      Open {green.bold ${url}} in your browser
    `);
});
