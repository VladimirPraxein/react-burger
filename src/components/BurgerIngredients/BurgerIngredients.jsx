import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CardsIngredients } from '../CardsIngredients/CardsIngredients.jsx';
import styles from './BurgerIngredients.module.css';
import PropTypes from 'prop-types';
export function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one');
  return (
    <section className={styles.ingredients}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <ul className={styles.container}>
        <li className={styles.content}>
          <h2 className="text text_type_main-medium mb-6">Булки</h2>
          <ul className={styles.cards}>
            {props.ingredients.filter(ingredient => ingredient.type === 'bun').map(ingredient => (<CardsIngredients ingredient={ingredient} key={ingredient._id} />))}
          </ul>
        </li>
        <li className={styles.content}>
          <h2 className="text text_type_main-medium mb-6">Соусы</h2>
          <ul className={styles.cards}>
            {props.ingredients.filter(ingredient => ingredient.type === 'sauce').map(ingredient => (<CardsIngredients ingredient={ingredient} key={ingredient._id} />))}
          </ul>
        </li>
        <li className={styles.content}>
          <h2 className="text text_type_main-medium mb-6">Начинки</h2>
          <ul className={styles.cards}>
            {props.ingredients.filter(ingredient => ingredient.type === 'main').map(ingredient => (<CardsIngredients ingredient={ingredient} key={ingredient._id} />))}
          </ul>
        </li>
      </ul>
    </section>
  )
}
BurgerIngredients.propTypes = {
  ingredients: PropTypes.array.isRequired
}; 