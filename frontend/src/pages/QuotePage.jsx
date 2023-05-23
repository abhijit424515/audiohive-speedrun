import { useState, useEffect } from "react";
import Quote from "../components/Quote";
import axios from "axios";

const api_key = "6QK0EPThvCgwZ2VPJ4FZCg==KZVKLyCpuFZeNR3s";

function QuotePage() {
  const [currentQuote, setCurrentQuote] = useState({
    author: "",
    category: "",
    quote: "",
  });

  async function fetchQuote() {
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/quotes?category=happiness",
      {
        // mode: "cors", // no-cors, *cors, same-origin
        headers: { "X-Api-Key": api_key },
      }
    );

    const quote = response.data[0];
    setCurrentQuote(quote);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="w-screen h-screen">
      <Quote data={currentQuote} />
    </div>
  );
}

export default QuotePage;
