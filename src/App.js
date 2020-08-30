import React from 'react';
import HelloWorld from './components/HelloWorld';
import { HeaderComponent } from './components/HeaderComponent';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <HeaderComponent />
      <HelloWorld name="Sounak" />
      <Footer />
    </div>
    
  );
}

export default App;
