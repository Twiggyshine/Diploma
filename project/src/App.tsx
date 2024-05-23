import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </PersistGate>
    </Provider>
  );
};

export default App;