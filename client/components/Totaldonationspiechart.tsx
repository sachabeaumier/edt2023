import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts'

const data = [
  { name: 'ACT', value: 1355000 },
  { name: 'DemocracyNZ', value: 20000 },
  { name: 'Freedom', value: 116052 },
  { name: 'Greens', value: 546260 },
  { name: 'NZFirst', value: 631141 },
  { name: 'Labour', value: 458804.35 },
  { name: 'National', value: 1987777 },
  { name: 'Maori', value: 50000 },
  { name: 'Vision', value: 48000 },
]

const COLORS = [
  '#e1ad01',
  '#90EE90',
  '#800080',
  '#228B22',
  '#000000',
  '#FF0000',
  '#0000FF',
  '#964B00',
  '#FFC0CB',
]

const PieChartComponent = () => {
  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}

export default PieChartComponent
