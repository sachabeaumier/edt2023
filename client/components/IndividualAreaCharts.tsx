import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  Label,
} from 'recharts'

const data = [
  {
    date_received: '3 March 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 116162,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '7 March 2023',
    ACT: 0,
    DemocracyNZ: 20000,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '10 March 2023',
    ACT: 100000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '13 March 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 50000,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '17 March 2023',
    ACT: 50000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 20040,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '23 March 2023',
    ACT: 100000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '24 March 2023',
    ACT: 725000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '3 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 50000,
    NZFirst: 0,
    Labour: 0,
    National: 120030,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '6 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 100000,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '11 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 50000,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '12 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 22000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '14 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 50000,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '19 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 50000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '27 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 100000,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '3 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 20000,
    Labour: 33804.35,
    National: 25000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '5 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 50000,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '8 May 2023',
    ACT: 50000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 50000,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '10 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 23000,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 25000,
  },
  {
    date_received: '16 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 100000,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '18 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 150000,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '19 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 25000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '26 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 100000,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '29 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 90000,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '30 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 64979.69,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '31 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 20500,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '2 June 2023',
    ACT: 55000,
    DemocracyNZ: 0,
    FreedomsNZ: 23000,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '7 June 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 21250,
    NZFirst: 0,
    Labour: 35000,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '13 June 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 50000,
    NZFirst: 0,
    Labour: 0,
    National: 125000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '16 June 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 50000,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '20 June 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 25010,
    NZFirst: 0,
    Labour: 0,
    National: 173303.3,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '21 June 2023',
    ACT: 75000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 124500,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '29 June 2023',
    ACT: 150000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '30 June 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 500000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '5 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 20254,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '10 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 50000,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '18 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 350000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '19 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 50000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '20 July 2023',
    ACT: 50000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '24 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 23000,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 70000,
    Māori: 0,
    VisionNZ: 23000,
  },
  {
    date_received: '25 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 50000,
    NZFirst: 0,
    Labour: 0,
    National: 75000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '27 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 47052.53,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '31 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 50000,
    VisionNZ: 0,
  },
  {
    date_received: '1 August 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 50000,
    Māori: 0,
    VisionNZ: 0,
  },

  {
    date_received: '3 August 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 50150,
    Māori: 0,
    VisionNZ: 0,
  },

  {
    date_received: '11 August 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 180000,
    Labour: 0,
    National: 117000,
    Māori: 0,
    VisionNZ: 0,
  },
]

export function ActStackedAreaChart() {
  return (
    <ResponsiveContainer width={600} height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date_received" />
        <Label value="Date Received" angle={-90} position="insideBottom" />
        <YAxis></YAxis>
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="ACT"
          stackId="0"
          name=""
          fill="#FFC000"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function DemocracyNZStackedAreaChart() {
  return (
    <ResponsiveContainer width={600} height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date_received" />
        <Label value="Date Received" angle={-90} position="insideBottom" />
        <YAxis>
          {/* <Label value="Amount" angle={-90} position="insideLeft" /> */}
        </YAxis>
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="DemocracyNZ"
          stackId="2"
          name="DemocracyNZ"
          fill="#90EE90"
        />

        {/* Add more Area components for other dataKeys if needed */}
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function FreedomsNZStackedAreaChart() {
  return (
    <ResponsiveContainer width={600} height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date_received" />
        <Label value="Date Received" angle={-90} position="insideBottom" />
        <YAxis></YAxis>
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="FreedomsNZ"
          stackId="3"
          name=""
          fill="#800080"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function GreensStackedAreaChart() {
  return (
    <ResponsiveContainer width={600} height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date_received" />
        <Label value="Date Received" angle={-90} position="insideBottom" />
        <YAxis></YAxis>
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="Greens"
          stackId="4"
          name=""
          fill="#228B22"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function NZFirstStackedAreaChart() {
  return (
    <ResponsiveContainer width={600} height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date_received" />
        <Label value="Date Received" angle={-90} position="insideBottom" />
        <YAxis></YAxis>
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="NZFirst"
          stackId="5"
          name=""
          fill="#000000"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function LabourStackedAreaChart() {
  return (
    <ResponsiveContainer width={600} height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date_received" />
        <Label value="Date Received" angle={-90} position="insideBottom" />
        <YAxis></YAxis>
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="Labour"
          stackId="6"
          name=""
          fill="#FF0000"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function NationalStackedAreaChart() {
  return (
    <ResponsiveContainer width={600} height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date_received" />
        <Label value="Date Received" angle={-90} position="insideBottom" />
        <YAxis></YAxis>
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="National"
          stackId="7"
          name=""
          fill="#0000FF"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function MaoriStackedAreaChart() {
  return (
    <ResponsiveContainer width={600} height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date_received" />
        <Label value="Date Received" angle={-90} position="insideBottom" />
        <YAxis></YAxis>
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="Māori"
          stackId="8"
          name=""
          fill="#964B00"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function VisionNZStackedAreaChart() {
  return (
    <ResponsiveContainer width={600} height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date_received" />
        <Label value="Date Received" angle={-90} position="insideBottom" />
        <YAxis></YAxis>
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="VisionNZ"
          stackId="9"
          name=""
          fill="#FFC0CB"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
