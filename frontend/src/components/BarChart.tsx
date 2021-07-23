import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';


export default function BarChart() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://water-potability-api.herokuapp.com/')
        .then(response => response.json())
        .then(info => {
            setData(info.data)
        })
    }, data)

    const state = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: data
            }
        ]
    }

    return (
        <div>
            <Bar
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    );
}