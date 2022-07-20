import styles from './IngredientDetails.module.css';
import itemType from '../utils/type.js';
export default function IngredientDetails(props) {
  return (
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
  )
}
IngredientDetails.propTypes = {
  ingredient: itemType
}; 