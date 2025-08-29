
import '../index.css'

const UserInterface = () => {
    return (
        <div id = 'userInterface'>
            <h1 class = 'font1'>Retirement Calculator</h1>
            <h3 class = 'font2'>Estimate your future finances in retirement</h3>

            <form id = 'form-id' noValidate>

                    <label>Current Savings ($)</label>
                    <input class = 'money'
                    type="number"
                    inputMode="decimal"
                    min="0"
                    placeholder = "1,000,000"
                    step="100"
                    required
                    />

                    <label>Current Age</label>
                    <input
                        type="number"
                        min="0"
                        max="100"
                        step="1"
                        placeholder = "59"
                        required
                    />

                    <label>Target Retirement Age</label>
                    <input
                        type="number"
                        min="30"
                        max="100"
                        step="1"
                        placeholder = "65"
                        required
                    />

                <label>Monthly Spending in Retirement ($/mo)</label>
                    <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="50"
                    placeholder = "10,000"
                    required
                    />

                <button type="submit">Calculate</button>
            </form>
        </div>
    );
}

export default UserInterface