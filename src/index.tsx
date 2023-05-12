import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/*todo arquivo .tsx é um componente
    Componenete principal da aplicação*/}
  </React.StrictMode>
);
