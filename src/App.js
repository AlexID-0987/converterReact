import './App.css';
import CurrencyInput from './component/currencycomponent';

function App() {
  return (
    <div>
      <CurrencyInput currencies={['USD']} amount={1} currency={'USD'}/>,
      <CurrencyInput currencies={['USD']} amount={1} currency={'USD'}/>
    </div>
  );
}

export default App;
