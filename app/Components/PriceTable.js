const dummyData = {
  currentPrice: 40000,
  nextHour: 41000,
  nextDay: 42000,
  nextWeek: 45000,
};

export default function PriceTable({ cryptocurrency }) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        {cryptocurrency} Price Predictions
      </h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800 text-gray-300">
            <th className="p-3 text-left border-b border-gray-700">
              Time Frame
            </th>
            <th className="p-3 text-left border-b border-gray-700">
              Price (USD)
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(dummyData).map(([timeFrame, price]) => (
            <tr key={timeFrame} className="hover:bg-gray-800 transition">
              <td className="p-3 border-b border-gray-700 capitalize">
                {timeFrame.replace(/([A-Z])/g, " $1")}
              </td>
              <td className="p-3 border-b border-gray-700">
                ${price.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
