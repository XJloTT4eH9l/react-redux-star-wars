import { Route, Routes } from 'react-router-dom';
import Header from '@components/Header';
import routesConfig from '@routes/routes-config';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        {routesConfig.map((route,i) => (
          <Route 
            key={i} 
            path={route.path} 
            element={route.element}
          />
        ))}
      </Routes>
    </div>
  )
}

export default App;