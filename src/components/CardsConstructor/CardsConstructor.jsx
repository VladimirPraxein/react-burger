import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './CardsConstructor.module.css';
import PropTypes from 'prop-types';
export function CardsConstructor(props) {
  return (
    <li className={styles.card}>
      <DragIcon type='primary' className='mr-3' />
      <ConstructorElement text={props.ingredient.name} price={props.ingredient.price} thumbnail={props.ingredient.image} />
    </li>
  )
}
CardsConstructor.propTypes = {
  ingredient: PropTypes.shape({
    text:PropTypes.string,
    price:PropTypes.number,
    thembail:PropTypes.string
  }).isRequired
}; 