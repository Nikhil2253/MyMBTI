import { useState, useContext } from "react";
import { questions } from "../data/questions";
import { ResultContext } from "../context/ResultContext";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const [index, setIndex] = useState(0);
  const { scores, setScores } = useContext(ResultContext);
  const navigate = useNavigate();

  const handleAnswer = (question, value) => {
    const trait = question.trait;
    const alt = trait === "E" ? "I" : trait === "I" ? "E" :
                trait === "N" ? "S" : trait === "S" ? "N" :
                trait === "T" ? "F" : trait === "F" ? "T" :
                trait === "J" ? "P" : "J";
    const isReverse = question.reverse;
    const targetTrait = isReverse ? alt : trait;

    setScores(prev => ({
      ...prev,
      [targetTrait]: prev[targetTrait] + value
    }));

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="test-page">
      <ProgressBar current={index} total={questions.length} />

      <QuestionCard question={questions[index]} onAnswer={handleAnswer} />
    </div>
  );
};
export default Test;
