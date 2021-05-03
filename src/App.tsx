import React, { useState } from 'react';
import { convert } from 'exchange-rates-api'
import './App.css';

function App() {

  const [eur, setEur] = useState<string>()
  const [usd, setUsd] = useState<string>()

  const onPress = async () => {
    if (!eur) return;
    const amount = await convert(parseInt(eur), 'EUR', 'USD', new Date());
    setUsd(amount.toString())
  }

  return (
    <div className="app">
      <body className="body">
        <h1>Convertor</h1>
        <p>Menova kalkulacka co vam premeni EUR na USD.</p>
        <p>Menime len EUR na USD a nie naopak lebo som bol lenivy.</p>
        <div style={{ flexDirection: 'row', marginTop: 32 }}>
          <input value={eur} onChange={e => setEur(e.target.value)} placeholder='EUR' style={{ marginRight: 32 }}></input>
          <button onClick={onPress}>CONVERT</button>
          <input value={usd} contentEditable={false} placeholder='USD' style={{ marginLeft: 32 }}></input>
        </div>
      </body>
    </div>
  );
}

export default App;
