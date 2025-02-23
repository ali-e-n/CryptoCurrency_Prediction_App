"use client";

import { useState } from "react";
import PriceChart from "./PriceChart";
import PriceTable from "./PriceTable";
import NewsWidget from "./NewsWidget";
import { IoLogoBitcoin } from "react-icons/io5";
import { SiEthereum } from "react-icons/si";
import { SiRipple } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";
import { SiCardano } from "react-icons/si";

const cryptocurrenciesData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$96,337",
    change: "0.08%",
    predictions: {
      "5D": "$108,429",
      "1M": "$131,693",
      "3M": "$145,842",
      "6M": "$165,320",
      "1Y": "$200,500",
    },
    icon: (
      <i className="text-orange-500 w-6 h-6">
        <IoLogoBitcoin />
      </i>
    ),
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,482",
    change: "0.35%",
    predictions: {
      "5D": "$3,700",
      "1M": "$4,150",
      "3M": "$4,650",
      "6M": "$5,200",
      "1Y": "$6,000",
    },
    icon: <SiEthereum className="text-[#627EEA] w-6 h-6" />, // Ethereum blue
  },
  {
    name: "Ripple",
    symbol: "XRP",
    price: "$0.58",
    change: "1.20%",
    predictions: {
      "5D": "$0.65",
      "1M": "$0.78",
      "3M": "$0.90",
      "6M": "$1.10",
      "1Y": "$1.50",
    },
    icon: <SiRipple className="text-[#0085C0] w-6 h-6" />, // Ripple blue
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    price: "$85.43",
    change: "0.92%",
    predictions: {
      "5D": "$90",
      "1M": "$105",
      "3M": "$120",
      "6M": "$140",
      "1Y": "$180",
    },
    icon: <SiLitecoin className="text-[#A6A9AA] w-6 h-6" />, // Litecoin gray
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$0.45",
    change: "0.75%",
    predictions: {
      "5D": "$0.52",
      "1M": "$0.65",
      "3M": "$0.78",
      "6M": "$0.95",
      "1Y": "$1.20",
    },
    icon: <SiCardano className="text-[#0033AD] w-6 h-6" />, // Cardano blue
  },
];

const cryptocurrencies = [
  "Bitcoin",
  "Ethereum",
  "Ripple",
  "Litecoin",
  "Cardano",
];
export default function CryptoForecast() {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptocurrencies[0]);
  const [activeTab, setActiveTab] = useState("graph");

  return (
    <div className="space-y-6 bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      {/* Cryptocurrency Dropdown */}
      <select
        className="bg-gray-800 border border-gray-700 text-white p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedCrypto}
        onChange={(e) => setSelectedCrypto(e.target.value)}
      >
        {cryptocurrencies.map((crypto) => (
          <option key={crypto} value={crypto}>
            {crypto}
          </option>
        ))}
      </select>

      {/* Tab Navigation */}
      <div className="flex space-x-2">
        <button
          className={`px-4 py-2 rounded transition ${
            activeTab === "graph"
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("graph")}
        >
          Graph
        </button>
        <button
          className={`px-4 py-2 rounded transition ${
            activeTab === "table"
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("table")}
        >
          Table
        </button>
      </div>

      {/* Display Chart or Table Based on Selected Tab */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        {activeTab === "graph" ? (
          <PriceChart cryptocurrency={selectedCrypto} />
        ) : (
          <PriceTable cryptocurrency={selectedCrypto} />
        )}
      </div>
      {/* Crypto Price Table */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2">#</th>
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">5D</th>
              <th className="p-2">1M</th>
              <th className="p-2">3M</th>
              <th className="p-2">6M</th>
              <th className="p-2">1Y</th>
            </tr>
          </thead>
          <tbody>
            {cryptocurrenciesData.map((crypto, index) => {
              // Calculate the price change (example: compare with previous price)
              const previousPrice = crypto.previousPrice || 0; // Replace with actual previous price
              const priceChange = crypto.price - previousPrice;
              const isPriceUp = priceChange >= 0;

              return (
                <tr
                  key={crypto.name}
                  className="border-b border-gray-600 hover:bg-gray-700"
                >
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2 flex items-center space-x-2">
                    {crypto.icon} {/* Directly render the React icon */}
                    <span className="font-bold">{crypto.symbol}</span> (
                    {crypto.name})
                  </td>
                  <td className="p-2 flex items-center space-x-2">
                    {/* <span>{crypto.price}</span> */}
                    <span
                      className={`text-sm ${
                        isPriceUp ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {isPriceUp ? "↑" : "↓"}
                    </span>
                  </td>
                  <td className="p-2">{crypto.predictions["5D"]}</td>
                  <td className="p-2">{crypto.predictions["1M"]}</td>
                  <td className="p-2">{crypto.predictions["3M"]}</td>
                  <td className="p-2">{crypto.predictions["6M"]}</td>
                  <td className="p-2">{crypto.predictions["1Y"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* News Widget Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <NewsWidget cryptocurrency={selectedCrypto} />
      </div>
    </div>
  );
}
