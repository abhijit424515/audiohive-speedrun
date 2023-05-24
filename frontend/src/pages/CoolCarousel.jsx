import React, { useState } from "react";
const data = ["Hello 1", "Hello 2", "Hello 3"];

function Card({ index, text, visible, onClick }) {
  return (
    <div
      style={{
        height: "20rem",
        width: visible ? "20rem" : "4rem",
        transition: "width 500ms",
        writingMode: "vertical-lr",
        textOrientation: "unset",
        backgroundColor: "white",
        borderRadius: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
      onClick={() => onClick(index)}
    >
      <img
        src="https://hdwallpaperim.com/wp-content/uploads/2017/09/17/59756-chess.jpg"
        style={{
          position: "absolute",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          height: "20rem",
          width: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "rotate(180deg)",
          fontSize: "1.3rem",
        }}
      >
        {text}
      </div>
    </div>
  );
}

function Dot({ visible }) {
  return (
    <div
      style={{
        backgroundColor: "#dee3e3",
        height: "1rem",
        width: visible ? "2.5rem" : "1rem",
        transition: "width 500ms",
        borderRadius: "1rem",
      }}
    />
  );
}

function CoolCarousel() {
  const [page, setPage] = useState(0);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0F172A",
      }}
    >
      <div
        style={{
          width: "max-content",
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            columnGap: "1rem",
          }}
        >
          {data.map((x, i) => (
            <Card
              key={i}
              index={i}
              text={x}
              visible={i == page}
              onClick={setPage}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            columnGap: "0.5rem",
          }}
        >
          {data.map((_, i) => (
            <Dot key={i} visible={i == page} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoolCarousel;
