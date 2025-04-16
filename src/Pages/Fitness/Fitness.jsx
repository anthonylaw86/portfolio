import FitnessComponent from "../../Components/Fitness/Fitness";
import Dogs from "../../Components/Dogs/Dogs";
import Plants from "../../Components/Plants/Plants";
import "./Fitness.css";

const Fitness = () => {
  return (
    <div className="fitness-page">
      <section className="fitness-section">
        <FitnessComponent />
      </section>
      <section className="fitness-section">
        <Dogs />
      </section>
      <section className="fitness-section">
        <Plants />
      </section>
    </div>
  );
};

export default Fitness;
