import React from 'react';

const QuoteCard = ({ quote, character, image }) => (
  <figure className='quoteCard'>
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
);

export default QuoteCard;
