import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import { NotificationProvider } from './context/notification.context';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <NotificationProvider>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </Provider>
    </NotificationProvider>
  );
}

export default App;
