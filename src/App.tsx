import { Provider } from 'react-redux';
import './App.css';

import { Show005 } from './show/005';
import { store } from './show/006/Api';

function App() {

	return (
		<Provider store={store}>
			<Show005/>
		</Provider>
	);
}

export default App;
