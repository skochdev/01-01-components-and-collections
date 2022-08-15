import PropTypes from 'prop-types';
import defaultJpeg from '../../default.jpg';

function Painting({ thumbUrl = defaultJpeg, title, price, author, quantity }) {
  return (
    <>
      <img src={thumbUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author.url}>{author.tag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity > 5 ? 'In stock' : `${quantity} left`}</p>
      <button type="button">Добавить в корзину</button>
    </>
  );
}

Painting.propTypes = {
  thumbUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  author: PropTypes.shape({
    url: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
};

export default Painting;
