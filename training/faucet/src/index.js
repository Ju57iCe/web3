import React from 'react';
import { createRoot } from 'react-dom/client';
import "bulma/css/bulma.min.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Initial render: Render an element to the root.
// root.render(
//       <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

// // During an update, there's no need to pass the container again.
// root.render(<App tab="profile" />);

// ReactDOM.render(

// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
