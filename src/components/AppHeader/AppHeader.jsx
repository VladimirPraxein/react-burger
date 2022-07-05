import { Logo, ListIcon, BurgerIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';
export function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <BurgerIcon type="primary" />
          <a className={`text text_type_main-default ml-2 ${styles.link_active}`} href='#'>Конструктор</a>
        </div>
        <div className={styles.container}>
        <ListIcon type="secondary" />
          <a className={`text text_type_main-default ml-2 text_color_inactive ${styles.link}`} href='#'>Лента заказов</a>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.container}>
          <ProfileIcon type="secondary" />
          <a className={`text text_type_main-default ml-2 text_color_inactive ${styles.link}`} href='#'>Личный кабинет</a>
        </div>
      </div>
       
    </header>
  )
}

