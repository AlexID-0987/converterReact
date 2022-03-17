import './App.css';
import CurrencyInput from './component/currencycomponent';
import {useState, useEffect} from "react";
import axios from 'axios';

function App() {
  const [amount1,setAmount1]=useState(1);
  const [amount2,setAmount2]=useState(1);
  const [currency1, setCurrency1]=useState('USD');
  const [currency2, setCurrency2]=useState('USD');
  const [quotes,setArr]=useState([])

  useEffect(()=>{
     axios.get('http://api.currencylayer.com/live?access_key=85bc823a1cc4826703a12368d0ef28f2')
     .then(resp=>{
      setArr(resp.data.quotes);
     })
  },[])
  function form(number){
    return number.toFixed(4)
  }
  function multipl(amount1){
    setAmount2(amount1*quotes[currency2]/quotes[currency1])
    setAmount1(amount1)
  }
  function rezultchange(currency1){
    setAmount2(amount1*quotes[currency2]/quotes[currency1])
    setCurrency1(currency1)
  }
  function multipl1(amount2){
    setAmount1(amount2*quotes[currency1]/quotes[currency2])
    setAmount2(amount2)
  }
  function rezultchange1(currency2){
    setAmount1(amount2*quotes[currency1]/quotes[currency2])
    setCurrency2(currency2)
  }

  return (
    <div>
      <CurrencyInput 
      onAmount={multipl} 
      onCurrency={rezultchange}
      currencies={Object.keys(quotes)} 
      amount={amount1} 
      currency={currency1}/>,
      <CurrencyInput 
      onAmount={multipl1} 
      onCurrency={rezultchange1}
      currencies={Object.keys(quotes)}
       amount={amount2} 
       currency={currency2}/>
    </div>
  );
}

export default App;
