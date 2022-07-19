import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './CardsIngredients.module.css';
import PropTypes from 'prop-types';
export function CardsIngredients(props) {

  return (
    <li className={styles.card} onClick={() => { props.setState() }}>
      <Counter count={props.ingredient.__v} size="default" />
      <img src={props.ingredient.image} className={`${styles.image} mb-2`} />
      <div className={styles.price}>
        <p className="text text_type_digits-default mr-2">{props.ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.name} text text_type_main-default mt-2`}>{props.ingredient.name}</p>
    </li>
  )
}
CardsIngredients.propTypes = {
  setState: PropTypes.func.isRequired,
  ingredient: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    __v: PropTypes.number
  }).isRequired
}; 