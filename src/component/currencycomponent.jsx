import '../Style/currencycomp.css';
import PropTypes from 'prop-types'
function CurrencyInput(props){
    return(
        <div className="container">
      <div className="input-group mb-5">
          <input type="text" className="form-control" value={props.amount} onChange={ev=>props.onAmount(ev.target.value)} />
          <select className="form-select" value={props.currency} onChange={ev=>props.onCurrency(ev.target.value)}>
              {props.currencies.map((currency=>(
                  <option value={currency}>{currency}</option>
              )))}
          </select>
      </div>
      </div>
    );
    
}
CurrencyInput.propTypes={
    amount:PropTypes.number.isRequired,
    currency:PropTypes.string.isRequired,
    currencies:PropTypes.array,
    onAmount:PropTypes.func,
    onCurrency:PropTypes.func
}
export default CurrencyInput