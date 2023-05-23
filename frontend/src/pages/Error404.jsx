import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-screen w-screen">
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
        className="h-[80vh] mx-auto"
      />
      <div className="text-center font-[400] font-inter">
        Redirecting you to home page in 3 secs ...
      </div>
    </div>
  );
}

export default Error404;
