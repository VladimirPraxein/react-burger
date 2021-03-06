import styles from './OrderDetails.module.css';
import CheckIcon from '../../images/Check.svg';
export default function OrderDetails() {
  return (
    <div className={styles.content}>
      <h2 className="text text_type_digits-large">034536</h2>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img src={CheckIcon} className="mt-15 mb-15" />
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default mt-2 text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}
