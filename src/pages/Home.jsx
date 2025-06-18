import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Personality Test</h1>
      <Link to="/test">
        <button>Start Test</button>
      </Link>
    </div>
  );
};
export default Home;
