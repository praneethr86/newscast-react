const cheerio = require('cheerio');
const rp = require('request-promise');

import { FETCH_ARTICLES, FETCH_CONTENT } from './types';

export const fetchArticles = ({ websiteURL }) => dispatch => {
  //should take input as website name
  //hit the news website
  //fetch and scrape articles and form the payload with title, URL
  //dispatch with type and payload to reducer

  function requestContent(url) {
    return rp(url);
  }

  const options = {
    url: websiteURL,
    rejectUnauthorized: false
  };

  requestContent(options).then(function(body) {
    const $ = cheerio.load(body);
    const articles = [];
    $('.100_4x_2EditorialStories')
      .find('h2')
      .find('a')
      .each(function(i, elem) {
        const article = {
          heading: $(this)
            .text()
            .replace(/\n/g, ''),
          link: $(this).attr('href')
        };
        articles[i] = article;
      });
    dispatch({
      type: FETCH_ARTICLES,
      payload: articles
    });
  });
};

export const fetchContent = ({ articleURL }) => dispatch => {
  //should take input as article URL
  //hit article page
  //scrape content and set in payload
  //dispatch with type and payload to reducer
};
