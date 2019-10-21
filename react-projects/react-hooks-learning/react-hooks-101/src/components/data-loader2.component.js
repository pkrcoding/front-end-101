import React from "react";
import useFetch from "../hooks/useFetch";
export default function DataLoader2(props) {
  const data = useFetch("sample.json");
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