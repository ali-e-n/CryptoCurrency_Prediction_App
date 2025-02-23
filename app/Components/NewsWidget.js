"use client";
import React, { useEffect, useState } from "react";

export default function NewsWidget({ cryptocurrency }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace with your API key and endpoint
        const apiKey = "7e99a548644749888964991f2845d4f7";
        const apiUrl = `https://newsapi.org/v2/everything?q=${cryptocurrency}&cryptocurrency&apiKey=${apiKey}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await response.json();
        setNews(data.articles.slice(0, 5)); // Display top 5 news articles
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [cryptocurrency]);

  if (loading) {
    return <div>Loading news...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">
        Latest {cryptocurrency} News
      </h2>
      <ul className="space-y-2">
        {news.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
