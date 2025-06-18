import { useContext } from "react";
import { ResultContext } from "../context/ResultContext";

const ResultPage = () => {
  const { scores } = useContext(ResultContext);

  const result = `${scores.E >= scores.I ? "E" : "I"}${scores.N >= scores.S ? "N" : "S"}${scores.T >= scores.F ? "T" : "F"}${scores.J >= scores.P ? "J" : "P"}`;

  return (
    <div className="result-page">
      <h2>Your Personality Type:</h2>
      <h1>{result}</h1>
    </div>
  );
};

export default ResultPage;
