import React from 'react';
import './App.css';
import Coins from './components/Coins/Coins';
import { Route, Routes } from 'react-router-dom';
import CoinItem from './components/Coin_item/CoinItem'
import Catalog from "./components/Catalog/Catalog";


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/coin/:id" element={<CoinItem />} />
        <Route path="/catalog/:id" element={<Catalog />} />
        {/* this.props.match.params.id */}

      </Routes>
    </div>
  );
}

export default App;
