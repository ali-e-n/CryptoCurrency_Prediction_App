"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dummyData = [
  { date: "2025-02-22", current: 40000, predicted: 41000 },
  { date: "2025-02-23", current: 41000, predicted: 42000 },
  { date: "2025-02-24", current: 42000, predicted: 43000 },
  { date: "2025-02-25", current: 41500, predicted: 42500 },
  { date: "2025-02-26", current: 42500, predicted: 43500 },
];

export default function PriceChart({ cryptocurrency }) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow ">
      <h2 className="text-xl font-semibold mb-4 ">
        {cryptocurrency} Price Chart
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={dummyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#8884d8"
            name="Current Price"
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="#82ca9d"
            name="Predicted Price"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
