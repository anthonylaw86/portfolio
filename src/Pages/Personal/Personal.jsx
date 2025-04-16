import Fitness from "../../Components/Fitness/Fitness";
import Dogs from "../../Components/Dogs/Dogs";
import Plants from "../../Components/Plants/Plants";
import "./Personal.css";

const Personal = () => {
  return (
    <div className="personal-page">
      <section className="personal-section">
        <Fitness />
      </section>
      <section className="personal-section">
        <Dogs />
      </section>
      <section className="personal-section">
        <Plants />
      </section>
    </div>
  );
};

export default Personal;
