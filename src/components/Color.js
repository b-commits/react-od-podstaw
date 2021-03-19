import React from 'react';
import StarRating from './StarRating';
import { FaTrash } from 'react-icons/fa';

// Wyciągane za pomocą destrukturyzacji tylko trzy konkretne atrybuty.
function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <div>
      <section>
        <h1>{title}</h1>
        <button onClick={() => onRemove(id)}>
          <FaTrash />
        </button>
        <div style={{ height: 50, backgroundColor: color }}>
          <StarRating
            selectedStars={rating}
            onRate={(rating) => onRate(id, rating)}
          />
        </div>
      </section>
    </div>
  );
}

export default Color;
