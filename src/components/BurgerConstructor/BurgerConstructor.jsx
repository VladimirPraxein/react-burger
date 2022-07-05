import React from 'react';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import { CardsConstructor } from '../CardsConstructor/CardsConstructor';
import Currency from '../../images/Currency.svg'
import PropTypes from 'prop-types';
export function BurgerConstructor(props) {
  return (
    <section className={styles.constructor}>
      <ul className={styles.ingredients}>
        <li className={styles.ingredient}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={1255}
            thumbnail={props.ingredients[0].image}
          />
        </li>
        <ul className={styles.cards}>
          {props.ingredients.slice(1, -1).map(ingredient => (<CardsConstructor ingredient={ingredient} key={ingredient._id} />))}
        </ul>
        <li className={styles.ingredient}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={1255}
            thumbnail={props.ingredients[0].image}
          />
        </li>
      </ul>
      <div className={styles.total}>
        <p className="text text_type_digits-medium mr-2">610</p>
        <img src={Currency} alt="" className='mr-10' />
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

    </section>
  )
}
BurgerConstructor.propTypes = {
  ingredients: PropTypes.array.isRequired
}; 