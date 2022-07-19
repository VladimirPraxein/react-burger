import Modal from "../Modal/Modal";
import styles from './IngredientDetails.module.css';
import PropTypes from 'prop-types';
export default function IngredientDetails(props) {
  return (
    <Modal open={props.open} setState={props.setState}>
      <div className={styles.content}>
        <h2 className={`text text_type_main-large ${styles.title}`}>Детали ингредиента</h2>
        <img src={props.ingredient.image} className={styles.image} />
        <p className="text text_type_main-medium mt-4 mb-8">{props.ingredient.name}</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
            <p className="text text_type_digits-default text_color_inactive">{props.ingredient.calories}</p>
          </li>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive">Белки, г</p>
            <p className="text text_type_digits-default text_color_inactive">{props.ingredient.proteins}</p>
          </li>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
            <p className="text text_type_digits-default text_color_inactive">{props.ingredient.fat}</p>
          </li>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
            <p className="text text_type_digits-default text_color_inactive">{props.ingredient.carbohydrates}</p>
          </li>
        </ul>
      </div>
    </Modal>
  )
}
IngredientDetails.propTypes = {
  open: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
  ingredient: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number
  }).isRequired
}; 