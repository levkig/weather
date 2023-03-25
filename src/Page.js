import React, { useState, useEffect } from "react";

function Page() {
  const numbers = [1, 5, 10, 26, 50, 100];
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNum = numbers[randomIndex];
    setRandomNumber(randomNum);
  }, []);

  const cities = [
    "Almaty",
    "Astana",
    "Medelin",
    "Montevideo",
    "Bogota",
    "Karakas",
  ];
  const [randomCity, setRandomCity] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cities.length);
    const randomCityName = cities[randomIndex];
    setRandomCity(randomCityName);
  }, []);

  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };
  return (
    <div style={styles}>
      <h1>{randomNumber}</h1>
      <p>{randomCity}</p>
    </div>
  );
}

export default Page;
