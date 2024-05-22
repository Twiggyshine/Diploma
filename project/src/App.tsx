// import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// import store from './redux/store'; 
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    // <Provider store={store}>

        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    
    // </Provider>
  );
};

export default App;