import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencyData } from "./api/currencyApi";
import currencyNames from "./utils/currencyNames";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.currency);

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  useEffect(() => {
    dispatch(fetchCurrencyData());
  }, [dispatch]);

  const rates = data?.conversion_rates || {};

  const converted =
    rates[to] && rates[from]
      ? ((amount / rates[from]) * rates[to]).toFixed(2)
      : "";

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
        <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-3xl shadow-2xl p-8 flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Currency Converter</h1>
              <p className="text-gray-400 text-sm">Live exchange rates</p>
            </div>

            <button
              onClick={() => dispatch(fetchCurrencyData())}
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition"
            >
              <span className={`${isLoading ? "animate-spin" : ""}`}>🔄</span>
              Refresh
            </button>
          </div>

          {/* Status */}
          {isLoading && (
            <p className="text-yellow-400 text-center text-sm">
              Updating rates...
            </p>
          )}
          {error && <p className="text-red-400 text-center text-sm">{error}</p>}

          {data && (
            <>
              {/* Amount */}
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="p-3 rounded-xl bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount"
              />

              {/* Currency selectors */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3">
                {/* From */}
                <div className="flex flex-col">
                  <label className="text-sm text-gray-400 mb-1">From</label>
                  <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full p-3 rounded-xl bg-gray-900 border border-gray-600 focus:outline-none"
                  >
                    {Object.keys(rates).map((cur) => (
                      <option key={cur} value={cur}>
                        {cur} — {currencyNames[cur] || "Currency"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Swap */}
                <button
                  onClick={() => {
                    setFrom(to);
                    setTo(from);
                  }}
                  className="mb-1 bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-xl shadow transition"
                >
                  ⇄
                </button>

                {/* To */}
                <div className="flex flex-col">
                  <label className="text-sm text-gray-400 mb-1">To</label>
                  <select
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full p-3 rounded-xl bg-gray-900 border border-gray-600 focus:outline-none"
                  >
                    {Object.keys(rates).map((cur) => (
                      <option key={cur} value={cur}>
                        {cur} — {currencyNames[cur] || "Currency"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Result */}
              <div className="bg-blue-600 p-4 rounded-2xl text-center text-xl font-bold shadow-md">
                {amount} {from} = {converted} {to}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
