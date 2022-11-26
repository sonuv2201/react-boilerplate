import './App.css';
import Router from './app/Router/Router';
import store from './app/redux/store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
     <Router />
    </Provider>
  );
}

export default App;
