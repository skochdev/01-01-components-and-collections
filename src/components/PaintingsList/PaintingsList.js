import Painting from '../Painting/Painting';
import PropTypes from 'prop-types';

function Paintings({ paintings }) {
  return (
    <ul>
      {paintings.map(({ id, thumbUrl, title, price, author, quantity }) => (
        <li key={id}>
          <Painting
            thumbUrl={thumbUrl}
            title={title}
            price={price}
            author={author}
            quantity={quantity}
          />
        </li>
      ))}
    </ul>
  );
}

Paintings.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Paintings;
