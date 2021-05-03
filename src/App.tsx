import { exchangeRates } from 'exchange-rates-api';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [rate, setRate] = useState<number>()
  const [eur, setEur] = useState<string>()
  const [usd, setUsd] = useState<string>()

  useEffect(() => {
    exchangeRates().latest().symbols('USD').fetch().then(res => {
      if (typeof res === "number") {
        setRate(res)
      }
    });
  }, [])

  if (!rate) {
    return (
      <div className="app">
        <body className="body">

        </body>
      </div>
    )
  }

  const onEurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEur(e.target.value)
    const val = parseInt(e.target.value) * rate
    setUsd(isNaN(val) ? "" : val.toString())
  }

  const onUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsd(e.target.value)
    console.log(e.target.value)
    const val = parseInt(e.target.value) / rate
    setEur(isNaN(val) ? "" : val.toString())
  }

  return (
    <div className="app">
      <body className="body">
        <h1>Convertor</h1>
        <p style={{ marginBottom: 48 }}>{`Kurz k dnu ${moment().format('DD.MM.YYYY')} je 1 EUR = ${rate} USD`}</p>
        <div style={{ flexDirection: 'row', marginBottom: 48 }}>
          <input className='appInput' value={eur} onChange={onEurChange} placeholder='EUR' style={{ marginRight: 32 }}></input>
          <span>to</span>
          <input className='appInput' value={usd} onChange={onUsdChange} placeholder='USD' style={{ marginLeft: 32 }}></input>
        </div>
        <p style={{ fontSize: 16, maxWidth: '450px' }}>Toto je mala menova kalkulacka co vam premeni EUR na USD. Pri obnoveni stranky sa nacita novy kurz.</p>
      </body>
    </div>
  );
}

export default App;
