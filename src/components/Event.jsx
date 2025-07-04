import React, { useRef, useEffect } from 'react';

export default React.memo(function Event({ icon, iconLabel, title, subtitle, slim }) {
  const ref = useRef(null);

  useEffect(() => {
    // Можно использовать только при необходимости
    const width = ref.current?.offsetWidth;
    const height = ref.current?.offsetHeight;
    // Например, передавать в родительский компонент
  }, []);

  return (
    <li ref={ref} className={`event${slim ? ' event_slim' : ''}`}>
      <button className="event__button">
        <span className={`event__icon event__icon_${icon}`} role="img" aria-label={iconLabel}></span>
        <h4 className="event__title">{title}</h4>
        {subtitle && <span className="event__subtitle">{subtitle}</span>}
      </button>
    </li>
  );
});