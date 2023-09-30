import React, { useEffect } from "react";

const Display = ({ getData }) => {
  useEffect(() => {
    console.log("getData change");
  }, [getData]);

  const counterData = getData();

  return counterData.map((item, i) => <p key={i}>{item}</p>);
};

export default Display;
