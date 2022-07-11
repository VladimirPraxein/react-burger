import React from 'react';
import styles from './App.module.css';
import data from '../utils/data.js';
import {AppHeader} from '../AppHeader/AppHeader';
import {BurgerIngredients} from '../BurgerIngredients/BurgerIngredients';
import {BurgerConstructor} from '../BurgerConstructor/BurgerConstructor';
function App() {
  return (
    <div className="App">
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients ingredients = {data} />
          <BurgerConstructor ingredients = {data} />
        </main>
    </div>
  );
}

export default App;
