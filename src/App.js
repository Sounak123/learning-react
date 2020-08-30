import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import { CounterExample } from './components/CounterExample';

function App() {
  return (
    <div>
      <HelloWorld name="Sounak" />
      <CounterExample />
    </div>
    
  );
}

export default App;
