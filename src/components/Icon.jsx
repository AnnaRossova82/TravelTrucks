import sprite from '../assets/icons.svg'; // Ваш шлях до спрайту

const Icon = ({ id, className, style }) => {
  return (
    <svg className={className} style={style}>
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;