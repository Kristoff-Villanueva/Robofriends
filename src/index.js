import React from "react";
import { searchRobots } from "./reducers";
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import "tachyons";
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(searchRobots);

const root = createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
