const https = require("https");
const http = require("http");
const convert = require('xml2json');
const config = require("./config");
const formatter = require("./response-formatter");

const newsApiKey = config.NEWS_API_KEY;
const newsApiLink = 'https://newsapi.org/v2/top-headlines?sources=';

//CNN (NEWS)
exports.get_cnn_news = (req, res) => {
  const apiLink = `${newsApiLink}cnn&`;
  const url = `${apiLink}${newsApiKey}`;

  const request = https.get(url, response => {
    let body = '';
    response.on('data', data => {
      body += data;
    });
    response.on('end', () => {
      body = JSON.parse(body);
      const formattedArticles = formatter.formatArticles(body);
      res.send(formattedArticles);
    });
  });
  request.on('error', e => {
    console.log('Problem with request');
    console.log(e);
  });
  request.end();
};

//WALL STREET JOURNAL (NEWS)
exports.get_wsj_news = (req, res) => {
  const apiLink = `${newsApiLink}the-wall-street-journal&`;
  const url = `${apiLink}${newsApiKey}`;

  const request = https.get(url, response => {
    let body = '';
    response.on('data', data => {
      body += data;
    });
    response.on('end', () => {
      body = JSON.parse(body);
      const formattedArticles = formatter.formatArticles(body);
      res.send(formattedArticles);
    });
  });
  request.on('error', e => {
    console.log('Problem with request');
    console.log(e);
  });
  request.end();
};

//NEW YORK TIMES (NEWS)
exports.get_ny_times_news = (req, res) => {
  const apiLink = `${newsApiLink}the-new-york-times&`;
  const url = `${apiLink}${newsApiKey}`;

  const request = https.get(url, response => {
    let body = '';
    response.on('data', data => {
      body += data;
    });
    response.on('end', () => {
      body = JSON.parse(body);
      const formattedArticles = formatter.formatArticles(body);
      res.send(formattedArticles);
    });
  });
  request.on('error', e => {
    console.log('Problem with request');
    console.log(e);
  });
  request.end();
};

//ESPN (SPORTS)
exports.get_espn_sports = (req, res) => {
  const apiLink = `${newsApiLink}espn&`;
  const url = `${apiLink}${newsApiKey}`;

  const request = https.get(url, response => {
    let body = '';
    response.on('data', data => {
      body += data;
    });
    response.on('end', () => {
      body = JSON.parse(body);
      // const formattedArticles = formatter.formatArticles(body);
      res.send(body);
    });
  });
  request.on('error', e => {
    console.log('Problem with request');
    console.log(e);
  });
  request.end();
};

//BLEACHER REPORT (SPORTS)
exports.get_br_sports = (req, res) => {
  const apiLink = `${newsApiLink}bleacher-report&`;
  const url = `${apiLink}${newsApiKey}`;

  const request = https.get(url, response => {
    let body = '';
    response.on('data', data => {
      body += data;
    });
    response.on('end', () => {
      body = JSON.parse(body);
      const formattedArticles = formatter.formatArticles(body);
      res.send(formattedArticles);
    });
  });
  request.on('error', e => {
    console.log('Problem with request');
    console.log(e);
  });
  request.end();
};

//BBC SPORTS (SPORTS)
exports.get_bbc_sports = (req, res) => {
  const apiLink = `${newsApiLink}bbc-sport&`;
  const url = `${apiLink}${newsApiKey}`;

  const request = https.get(url, response => {
    let body = '';
    response.on('data', data => {
      body += data;
    });
    response.on('end', () => {
      body = JSON.parse(body);
      const formattedArticles = formatter.formatArticles(body);
      res.send(formattedArticles);
    });
  });
  request.on('error', e => {
    console.log('Problem with request');
    console.log(e);
  });
  request.end();
};

//DARK SKY API (WEATHER)
exports.get_weather = (req, res) => {
  const apiLink = "https://api.darksky.net/forecast";
  const key = config.DARK_SKY_API_KEY;
  const latLng = "40.7128,-74.0060";
  const url = `${apiLink}/${key}/${latLng}`;

  const request = https.get(url, response => {
    let body = "";
    response.on("data", data => {
      body += data;
    });
    response.on("end", () => {
      const formattedBody = formatter.formatWeather(JSON.parse(body));
      res.send(formattedBody);
    });
  });
  request.on("error", e => {
    console.log("Problem with request");
    console.log(e);
  });
  request.end();
};

//SUBWAY (MTA) 
exports.get_mta = (req, res) => {
  const url = "http://web.mta.info/status/serviceStatus.txt";

  const request = http.get(url, response => {
    let body = "";
    response.on("data", data => {
      body += data;
    });
    response.on("end", () => {
      const formattedBody = formatter.formatMta((JSON.parse(convert.toJson(body))));
      res.send(formattedBody);
    });
    request.on("error", e => {
      console.log("Problem with request");
      console.log(e);
    });
    request.end();
  });
};

//