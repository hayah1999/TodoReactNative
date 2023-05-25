import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './src/store';
import Router from './src/Routes';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
