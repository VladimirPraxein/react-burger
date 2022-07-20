import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './CardsConstructor.module.css';
import itemType from '../utils/type.js';
export function CardsConstructor(props) {
  return (
    <li className={styles.card}>
      <DragIcon type='primary' className='mr-3' />
      <ConstructorElement text={props.ingredient.name} price={props.ingredient.price} thumbnail={props.ingredient.image} />
    </li>
  )
}
CardsConstructor.propTypes = {
  ingredient: itemType
}; 