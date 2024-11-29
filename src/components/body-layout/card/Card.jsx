import style from "./Card.module.css";
import Button from "../ui/Button/Button.jsx";
import imgVuota from "../../../assets/imagine-vuota.jpg"


export default function Card({ thumb, title, description, id, published, tag }) {

// tags
const tags = tag.map((tag,index) => <li key={index}>{tag}</li>)

  return (
    <div className={style.card}>
      <img
        className={style.thumb}
        src={published ? `src/assets/${thumb}` : imgVuota}
        alt="Mandys candies"
      />
      <div className={style.cardBody}>
        <h3 className="card-title">{title}</h3>
        <ul className={style.tags}>{tags}</ul>
        <p className="card-text">{description}</p>
        <Button />
      </div>
    </div>
  );
}
