const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const DarkSky = require('dark-sky');

const { port, url } = require('./serverConfig');

const server = express();
const darksky = new DarkSky(process.env.REACT_APP_DARKSKY_API_KEY);

server.use(cors());
server.enable('trust proxy');

server.get('/proxy', async (req, res) => {
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

server.listen(port, error => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log(chalk.red(error));
  } else {
    // eslint-disable-next-line no-console
    console.log(chalk`
      Server is running on port {green.bold ${port}}
      Open {green.bold ${url}} in your browser
    `);
  }
});
