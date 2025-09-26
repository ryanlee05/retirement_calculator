
import '../index.css'
import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const ProjectedSavings = ({ projection = [] }) => {
    const labels = projection.map(p => String(p.year))
    const data = {
        labels,
        datasets: [
            {
                label: 'Projected Balance ($)',
                data: projection.map(p => p.balance),
                borderColor: 'rgb(82, 82, 251)',
                backgroundColor: 'rgba(105, 82, 223, 0.2)',
                tension: 0.3,
                pointRadius: 3,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Projected Savings Over Time' },
        },
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        // format large numbers with commas
                        return Number(value).toLocaleString();
                    }
                }
            }
        }
    }

    return (
        <div id = "projectedSavings">
            <h1 className='font1'>Projected Savings</h1>
            <div style={{ width: '100%', maxWidth: 720 }}>
                <Line options={options} data={data} />
            </div>
        </div>
    );
}

export default ProjectedSavings