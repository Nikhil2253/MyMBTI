const QuestionCard = ({ question, onAnswer }) => {
  const handleAnswer = (value) => {
    onAnswer(question, value);
  };

  const scale = [
    { label: "Strongly Disagree", value: 0 },
    { label: "Disagree", value: 1 },
    { label: "Somewhat Disagree", value: 2 },
    { label: "Neutral", value: 3 },
    { label: "Somewhat Agree", value: 5 },
    { label: "Agree", value: 7 },
    { label: "Strongly Agree", value: 10 }
  ];

  return (
    <div className="question-card">
      <p>{question.id+1}.{question.text}</p>
      <div className="options-circles">
        <span className="side-label">Disagree</span>
        {scale.map((item, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(item.value)}
            className={`circle-btn level-${i}`}
            title={item.label}
          />
        ))}
        <span className="side-label">Agree</span>
      </div>
    </div>
  );
};

export default QuestionCard;
