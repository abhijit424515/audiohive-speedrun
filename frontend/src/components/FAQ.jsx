import { useEffect } from "react";
import { useState } from "react";

function FAQ(props) {
  const [faqOpen, setFaqOpen] = useState(false);

  useEffect(() => {
    const initialState = localStorage.getItem("faqOpenCurrentState");
    if (initialState == null || initialState == undefined) {
    } else {
      setFaqOpen(initialState == "true" ? true : false);
    }
  }, []);

  return (
    <div
      className="w-[20vw] bg-yellow-400 p-[1rem]"
      onClick={() => {
        localStorage.setItem("faqOpenCurrentState", (!faqOpen).toString());
        setFaqOpen(!faqOpen);
      }}
    >
      <div className="border-[1px]">{props.title}</div>
      <div style={{ display: faqOpen ? "" : "none" }}>{props.text}</div>
    </div>
  );
}

export default FAQ;
