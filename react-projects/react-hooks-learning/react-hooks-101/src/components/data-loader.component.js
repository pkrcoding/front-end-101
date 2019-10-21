import React, { useState, useEffect } from "react";
export default function DataLoader() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("sample.json")
      .then(response => response.json())
      .then(data => setData(data.data))
  });
  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}
