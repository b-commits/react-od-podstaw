import React from 'react';
import Color from './Color';

function ColorList({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  if (!colors.length) return <div>Brak kolorów.</div>;
  return (
    <div>
      {colors.map((color) => (
        // Tutaj w zapisie {...color} dzięki spread operatorowi podawane są wszystkie atrybuty.
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}

export default ColorList;
