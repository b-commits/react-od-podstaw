import { React } from 'react';
import Star from './Star';

// Generator tablicy o dowolnej długości do mapowania określonej ilości elementów na inny obiekt.
const array = (length) => [...Array(length)];

function StarRating({ totalStars = 5, style = {}, selectedStars, onRate }) {
  return array(totalStars).map((n, i) => (
    <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
      <Star
        key={i}
        selected={i < selectedStars}
        onSelect={() => onRate(i + 1)}
      />
    </div>
  ));
}

export default StarRating;
