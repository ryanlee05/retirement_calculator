import { useState } from 'react'
import './App.css'
import UserInterface from './components/UserInterface';
import ProjectedSavings from './components/ProjectedSavings';

// small helper: project savings with monthly contributions and annual return
function projectSavings({ currentSavings, currentAge, retirementAge, annualReturn = 0.05 }) {
  const years = retirementAge - currentAge;
  const months = years * 12;
  const monthlyReturn = Math.pow(1 + annualReturn, 1 / 12) - 1;
  const data = [];
  let balance = Number(currentSavings || 0);
  for (let m = 0; m <= months; m++) {
    // record at year boundaries (every 12 months) and month 0
    if (m % 12 === 0) {
      data.push({ year: Math.round(currentAge + m / 12), balance: Number(balance.toFixed(2)) });
    }
    // assume monthly contribution is negative of monthlySpending? For projection, use 0 contributions
    // Users likely want growth of current savings until retirement without additional contributions
    balance = balance * (1 + monthlyReturn);
  }
  return data;
}

function App() {
  const [inputs, setInputs] = useState({
    currentSavings: 1000000,
    currentAge: 59,
    retirementAge: 65,
    monthlySpending: 10000,
  });

  const [projection, setProjection] = useState(() => projectSavings(inputs));

  function handleCalculate(values) {
    setInputs(values);
    setProjection(projectSavings(values));
  }

  return (
    <>
      {/*backgrounds */}
      <div id = 'bg-outer' />
      <div id = 'bg-inner' />

      <div id = 'app-content'>
        <UserInterface onCalculate={handleCalculate} initialValues={inputs} />
        <ProjectedSavings projection={projection} />
      </div>
    </>
  );
  

}

export default App
