const ProgressBar = ({ current, total }) => {
  const safeTotal = total > 1 ? total - 1 : 1;
  const percent = Math.min((current / safeTotal) * 100, 100);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
