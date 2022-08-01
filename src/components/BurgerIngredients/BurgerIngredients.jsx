import { useState, useContext, useRef } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CardsIngredients } from '../CardsIngredients/CardsIngredients.jsx';
import IngredientsDetails from '../IngredientDetails/IngredientDetails';
import Modal from "../Modal/Modal";
import styles from './BurgerIngredients.module.css';
import { AppContext } from '../../services/AppContext';
export function BurgerIngredients() {
  const [current, setCurrent] = useState('one');
  const [open, setOpen] = useState(false);
  const [data, setIngredient] = useState();   
  const {state} = useContext(AppContext);
  const scrollBun = useRef(null);
  const scrollSauce = useRef(null);
  const scrollMain = useRef(null);
  return (
    <>
      <section className={styles.ingredients}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <div className={styles.tabs}>
          <Tab value="one" active={current === 'one'} onClick={() => {setCurrent('one'); scrollBun.current.scrollIntoView({block: "start", behavior: "smooth"});}}>
            Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={() => {setCurrent('two'); scrollSauce.current.scrollIntoView({block: "start", behavior: "smooth"});}}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={() => {setCurrent('three'); scrollMain.current.scrollIntoView({block: "start", behavior: "smooth"});}}>
            Начинки
          </Tab>
        </div>
        <ul className={styles.container}>
          <li className={styles.content} ref={scrollBun}>
            <h2 className="text text_type_main-medium mb-6">Булки</h2>
            <ul className={styles.cards}>
              {state.data.filter(ingredient => ingredient.type === 'bun').map(ingredient => (<CardsIngredients ingredient={ingredient} key={ingredient._id} setState={() => { setOpen(true); setIngredient(ingredient) }} />))}
            </ul>
          </li>
          <li className={styles.content} ref={scrollSauce}>
            <h2 className="text text_type_main-medium mb-6">Соусы</h2>
            <ul className={styles.cards}>
              {state.data.filter(ingredient => ingredient.type === 'sauce').map(ingredient => (<CardsIngredients ingredient={ingredient} key={ingredient._id} setState={() => { setOpen(true); setIngredient(ingredient) }} />))}
            </ul>
          </li>
          <li className={styles.content} ref={scrollMain}>
            <h2 className="text text_type_main-medium mb-6">Начинки</h2>
            <ul className={styles.cards}>
              {state.data.filter(ingredient => ingredient.type === 'main').map(ingredient => (<CardsIngredients ingredient={ingredient} key={ingredient._id} setState={() => { setOpen(true); setIngredient(ingredient) }} />))}
            </ul>
          </li>
        </ul>
      </section>
      {data && (<Modal open={open} setState={setOpen}> <IngredientsDetails ingredient={data} /> </Modal>)}
    </>
  )
}
