import { useState, useEffect } from 'react';
import styles from './App.module.css';
import { AppHeader } from '../AppHeader/AppHeader';
import { BurgerIngredients } from '../BurgerIngredients/BurgerIngredients';
import { BurgerConstructor } from '../BurgerConstructor/BurgerConstructor';

const baseUrl = 'https://norma.nomoreparties.space/api/ingredients';

function processRequest(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function App() {

  const [state, setState] = useState({
    data: [],
    isLoading: false,
    hasError: false
  })

  useEffect(() => {
    const getData = async () => {
      setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      try {
        const ingridients = await fetch(baseUrl).then(processRequest);
        setState((prevState) => ({
          ...prevState,
          data: ingridients.data,
          isLoading: false
        }));

      }
      catch {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
          hasError: true
        }));
      }
    };
    getData();
  }, [])
  return (
    <>

      <div className="App">
        <AppHeader />
        <main className={styles.main}>
          {state.isLoading && 'Загрузка...'}
          {state.hasError && 'Произошла ошибка'}
          {!state.isLoading && !state.hasError &&
            state.data.length && (
              <>
                <BurgerIngredients ingredients={state.data} />
                <BurgerConstructor ingredients={state.data} />
              </>
            )}
        </main>
      </div>
    </>
  );
}

export default App;
