import { useState, useContext, useEffect } from 'react';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import { CardsConstructor } from '../CardsConstructor/CardsConstructor';
import OrderDetails from '../OrderDetails/OrderDetails'
import Currency from '../../images/Currency.svg'
import Modal from "../Modal/Modal";
import { AppContext } from '../../services/AppContext.jsx';
import { createOrder } from '../../components/utils/api';
export function BurgerConstructor() {
  const [open, setOpen] = useState(false);
  const { state } = useContext(AppContext);
  const bun = state.data.find(item => item.type === 'bun');
  const ingredients = state.data.filter(item => item.type !== 'bun');
  const ingredientsId = ingredients.map(item => item._id);
  ingredientsId.push(bun._id);
  const [total, setTotal] = useState(0);
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    order: {
      number: null
    },
    success: false
  })
  useEffect(() => {
    setTotal(ingredients.reduce((sum, currValue) => sum + currValue.price, bun.price * 2))
  }, [ingredients, bun]);
  function popupOpen() {
    createOrder(ingredientsId)
      .then(res => {
        setOrderInfo(res)
        setOpen(true)
      })
      .catch(err => console.log(err))
  }
  return (
    <section className={styles.constructor}>
      <ul className={styles.ingredients}>
        <li className={styles.ingredient}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (вверх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </li>
        <ul className={styles.cards}>
          {ingredients.map(ingredient => (<CardsConstructor ingredient={ingredient} key={ingredient._id} />))}
        </ul>
        <li className={styles.ingredient}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </li>
      </ul>
      <div className={styles.total}>
        <p className="text text_type_digits-medium mr-2">{total}</p>
        <img src={Currency} alt="" className='mr-10' />
        <Button type="primary" size="large" onClick={popupOpen}>
          Оформить заказ
        </Button>
      </div>
      <Modal open={open} setState={setOpen}><OrderDetails orderInfo={orderInfo} /></Modal>
    </section>
  )
}
