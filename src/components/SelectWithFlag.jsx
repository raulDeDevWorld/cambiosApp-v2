


// const CurrencyFlagComponent1 = () => <CurrencyFlag currency="BOB" size="sm" />;














// export default  CurrencyFlagComponent1

'use client'
import CurrencyFlag from 'react-currency-flags';

import CurrencyList from 'currency-list'



import countryToCurrency from 'country-to-currency'
import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function App() {
  const [currency, setCurrency] = useState("BOB");
  const [select, setSelect] = useState('BOB')
  const [isSelect, setIsSelect] = useState(false)


  function handlerSelect() {
    setIsSelect(!isSelect)
  }

  function handlerUserSelect(i) {
    setSelect(i)
  }

  useEffect(() => {
    setCurrency(CurrencyList.getAll('es_US'))
  }, []);

  return (
    <div className={`relative bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-0`} onClick={handlerSelect}>
      <div className='w-full bg-transparent flex justify-between'>

        <input type="number" className='p-3 bg-transparent w-[65%] text-white text-center' />
        <span className=" w-[10%] text-gray-100 p-3 ">{select}</span>
        <span className='w-[auto] flex items.center rounded-[20px] '><CurrencyFlag currency={select} size="xl" /></span>
        <span className={isSelect ? 'text-white text-center w-[10%] right-5 rotate-[270deg] p-3 ' : 'text-white text-center w-[10%] right-5 rotate-90 p-3 '}>{'>'}</span>

      </div>

      <ul className={isSelect ? `absolute left-0 top-10 bg-gray-50 outline outline-1 outline-gray-300 text-gray-900 text-sm rounded-b-xl focus:ring-blue-500 focus:outline-blue-500 w-full p-3 z-30` : 'hidden'} >
        {
          Object.keys(currency).map((i) => <li key={i} onClick={() => handlerUserSelect(i)}>{i} <CurrencyFlag currency={i} size="sm" /></li>)
        }
      </ul>
    </div>
  );
}