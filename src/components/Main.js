import React from 'react'

const Main = () => {
    return (
        <div>

            <div className="wrapper">
                <div className="app-details">
                    <img src="./assets/icon.png" className="app-icon" />
                    <h1 className="app-title">currency converter</h1>

                </div>
                <label for="amount">Amount:</label>
                <input type="number" id="amount" value="100" />
                <div className="dropdowns">
                    <select id="from-currency-select"></select>
                    <select id="to-currency-select"></select>
                </div>
                <button id="convert-button">Convert</button>
                <p id="result"></p>
            </div>

        </div>

    )
}

export default Main