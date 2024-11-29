import style from "./Card.module.css";
import Button from "../ui/Button/Button.jsx";

export default function Card({ thumb, title, description, id }) {
  return (
    <div className={style.card}>
      <img
        className={style.thumb}
        src={`src/assets/${thumb}`}
        alt="Mandys candies"
      />
      <div key={id} className={style.cardBody}>
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <Button />
      </div>
    </div>
  );
}
