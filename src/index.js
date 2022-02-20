import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'//bootstrap'ı da kullanmak istersek(reactstrap yanında)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')//public içindeki index.js 'e yönlendirme
);//nereden başlayacağı bilgisi buradan gelir.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
