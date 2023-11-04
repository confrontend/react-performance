import { CSSProperties, useState } from "react";

export function heavy() {
  const date = String(new Date().getMilliseconds());
  console.log("Heavy", date);
  return date;
}

const ReadableTable = ({
  value,
  temp,
}: {
  value: string | boolean;
  temp?: string;
}) => {
  const tableStyle: CSSProperties = {
    color: "white",
    margin: "0 auto",
    borderCollapse: "collapse",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  };

  const rowStyle: CSSProperties = {
    borderBottom: "1px solid grey",
  };

  const cellStyle: CSSProperties = {
    padding: "8px",
  };

  console.log("State:", value);

  return (
    <table style={tableStyle}>
      <tbody>
        <tr style={rowStyle}>
          <td style={cellStyle}>State:</td>
          <td style={cellStyle}>{String(value)}</td>
        </tr>
        {/* <tr>
          <td style={cellStyle}>Constant</td>
          <td style={cellStyle}>{temp ?? "N/A"}</td>
        </tr> */}
      </tbody>
    </table>
  );
};

// Function to generate random RGB color
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// React component
const RandomColorDiv = () => {
  const newColor = getRandomColor();

  return (
    <div>
      {/* Div with dynamic background color */}
      <div
        style={{
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          backgroundColor: newColor,
          width: "100%",
          height: "50px",
          transition: "background-color 0.5s",
        }}
      >
        Re-rendered!
      </div>
    </div>
  );
};

export { ReadableTable, RandomColorDiv };
