import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './CardsIngredients.module.css';
import itemType from '../utils/type.js';
import PropTypes from 'prop-types';
export function CardsIngredients({ingredient, setState}) {

  return (
    <li className={styles.card} onClick={() => { setState() }}>
      <Counter count={ingredient.__v} size="default" />
      <img src={ingredient.image} className={`${styles.image} mb-2`} />
      <div className={styles.price}>
        <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.name} text text_type_main-default mt-2`}>{ingredient.name}</p>
    </li>
  )
}
CardsIngredients.propTypes = {
  setState: PropTypes.func.isRequired,
  ingredient: itemType
}; 