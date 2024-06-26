// this below is the main where all the components are being callled and used to make the final output


import { useState } from 'react'
import './App.css'
import CurrencyBox from './CurrencyBox'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {

  const [amount ,setAmount] = useState(0) // to handle amount chnage
  const [from , setFrom] =useState("usd") // from box
  const [to, setTo] =useState("inr") // To box
  const [convertedAmount , setConvertedAmount] =useState(0) // amount when converted

  const currencyInfo = useCurrencyInfo(from) // from which type it is converted
  const options= Object.keys(currencyInfo) // options to convert to 
  
  // swap funtion to swap conversion type
  const swap=()=>{ 
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  // convert function to convert values to final output
  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  }

  return (
    <> 
     <div className="container">
        <div className="main">
            <CurrencyBox label="From" amount={amount} currencyOptions={options} selectCurrency={from} onAmountChange={(amount)=> setAmount(amount)} onCurrencyChange={(currecy) => setFrom(currecy)}/> {/* From box in which the amount to be converted is entered and rest is automatically handeled */}
            <button id='swap' onClick={swap}>Swap</button> {/*button to swap the conversion of the currencies */}
            <CurrencyBox label="To" amount={convertedAmount} onCurrencyChange={(currency)=>setTo(currency)} currencyOptions={options} selectCurrency={to} amountDisable/> {/* To box in which the convewrted amount is displayed*/}
            <button id='conv' onClick={convert}>Convert <br /> {from.toUpperCase()} to { to.toUpperCase()}</button> {/* final button to convert the currencies */}
        </div>
     </div>
    </>
  )
}

export default App // we are exporting the output here 
