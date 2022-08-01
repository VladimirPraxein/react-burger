import { useState, useEffect } from 'react';
import styles from './App.module.css';
import { AppHeader } from '../AppHeader/AppHeader';
import { BurgerIngredients } from '../BurgerIngredients/BurgerIngredients';
import { BurgerConstructor } from '../BurgerConstructor/BurgerConstructor';
import { AppContext } from '../../services/AppContext';
import { getIngredients } from '../../components/utils/api';

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
        const ingridients = await getIngredients()
        .catch(err => console.log(err))
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
    <div className="App">
      <AppContext.Provider value={{ state, setState }}>
        <AppHeader />
        <main className={styles.main}>
          {state.isLoading && 'Загрузка...'}
          {state.hasError && 'Произошла ошибка'}
          {!state.isLoading && !state.hasError &&
            state.data.length && (
              <>
                <BurgerIngredients />
                <BurgerConstructor />
              </>
            )}
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
