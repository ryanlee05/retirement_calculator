
import '../index.css'
import { useState } from 'react'

const UserInterface = ({ onCalculate, initialValues }) => {
    const [values, setValues] = useState({
        currentSavings: initialValues?.currentSavings ?? '',
        currentAge: initialValues?.currentAge ?? '',
        retirementAge: initialValues?.retirementAge ?? '',
        monthlySpending: initialValues?.monthlySpending ?? '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setValues(v => ({ ...v, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const parsed = {
            currentSavings: Number(values.currentSavings || 0),
            currentAge: Number(values.currentAge || 0),
            retirementAge: Number(values.retirementAge || 0),
            monthlySpending: Number(values.monthlySpending || 0),
        };
        onCalculate?.(parsed);
    }

    return (
        <div id = 'userInterface'>
            <h1 class = 'font1'>Retirement Calculator</h1>
            <h3 class = 'font2'>Estimate your future finances in retirement</h3>

            <form id = 'form-id' noValidate onSubmit={handleSubmit}>

                    <label>Current Savings ($)</label>
                    <input className='money'
                    name='currentSavings'
                    value={values.currentSavings}
                    onChange={handleChange}
                    type="number"
                    inputMode="decimal"
                    min="0"
                    placeholder = "1,000,000"
                    step="100"
                    required
                    />

                    <label>Current Age</label>
                    <input
                        name='currentAge'
                        value={values.currentAge}
                        onChange={handleChange}
                        type="number"
                        min="0"
                        max="100"
                        step="1"
                        placeholder = "59"
                        required
                    />

                    <label>Target Retirement Age</label>
                    <input
                        name='retirementAge'
                        value={values.retirementAge}
                        onChange={handleChange}
                        type="number"
                        min="30"
                        max="100"
                        step="1"
                        placeholder = "65"
                        required
                    />

                <label>Monthly Spending in Retirement ($/mo)</label>
                    <input
                    name='monthlySpending'
                    value={values.monthlySpending}
                    onChange={handleChange}
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