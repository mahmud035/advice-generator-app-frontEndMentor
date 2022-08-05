'use strict';

const adviceQuote = document.getElementById('quote');
const quoteID = document.getElementById('quote-id');

const loadQuote = () => {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => displayQuote(data.slip));
};

loadQuote();

const displayQuote = (quote) => {
  console.log(quote);
  adviceQuote.innerHTML = quote.advice;
  quoteID.innerHTML = quote.id;
};
