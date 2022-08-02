import styles from './OrderDetails.module.css';
import CheckIcon from '../../images/Check.svg';
import PropTypes from 'prop-types';
export default function OrderDetails(props) {
  return (
    <div className={styles.content}>
      <h2 className="text text_type_digits-large">{props.orderInfo.order.number}</h2>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img src={CheckIcon} className="mt-15 mb-15" />
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default mt-2 text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}
OrderDetails.propTypes = {
  orderInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    order: PropTypes.object.isRequired,
    success: PropTypes.bool.isRequired
}).isRequired
}; 