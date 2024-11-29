import style from "./Card.module.css";
import Button from "../ui/Button/Button.jsx";
import imgVuota from "../../../assets/imagine-vuota.jpg"


export default function Card({ thumb, title, description, id, published }) {
  return (
    <div className={style.card}>
      <img
        className={style.thumb}
        src={published ? `src/assets/${thumb}` : imgVuota}
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
