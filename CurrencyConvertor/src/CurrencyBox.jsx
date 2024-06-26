// this is a custom component that is used in the App.jsx multiple times according to the requirement

import React from 'react';
import './index.css'

// this below is the function/component that is creating the box that will be used later in the App.jsx
function CurrencyBox({
    label, // for label
    amount, // for amount entered by user
    onAmountChange,  // if amount is changed thn triggered
    onCurrencyChange, // if currency is changed then triggered
    currencyOptions=[], // for currency options
    selectCurrency="usd", // for selecting currency and also default value is given
    amountDisable=false, // amoutn by default diabled
    currencyDisable=false // currency by defualt disabled
}) {
    return (
        <div id='container'>
            <div id="main">
                <div id="info">
                    <h3>{label}</h3> {/* custom value to be entered by the user when this will be used  */}
                    <h3 id='currType'>Currency Type</h3> {/* thi si the heading */}
                </div>
                <div id="convert">
                    <input type="number" id='number'placeholder='0' disabled={amountDisable} value={amount} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}/> {/* input for amount and alos if amount is changed then onchange function is fired */}
                    <select name="" id="currType" value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}
                    > {/* selction option for the currency with default value as "usd" and onChage function will be fired when the currency is changed*/}
                        {currencyOptions.map((currency)=> (
                            <option value={currency} key={currency}>
                                {currency.toUpperCase()}
                            </option> // currecy array is made and the valued is selected
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default CurrencyBox;
// this export style s good but if there are many components in the project then we call make a new index.js file in which we can call all the components and then export them together so that we can use that single file in the project as import