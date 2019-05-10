import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import DarkSky from 'dark-sky';

import config from './server/config';

const { url, port } = config;

const app = express();
const darksky = new DarkSky(process.env.REACT_APP_DARKSKY_API_KEY || '');

app.use(cors());
app.enable('trust proxy');

app.get('/proxy', async (req, res) => {
  try {
    const { latitude, longitude, lang = 'en', units = 'us' } = req.query;

    const forecast = await darksky
      .latitude(latitude)
      .longitude(longitude)
      .language(lang)
      .units(units)
      .get();

    res.status(200).json(forecast);
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
