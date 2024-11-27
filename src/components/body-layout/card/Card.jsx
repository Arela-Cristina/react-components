import style from "./Card.module.css";
import Mandy from "../../../assets/Brawl_Mandy.png";

export default function Card() {
  return (
    <div class={style.card}>
      <img className={style.thumb} src={Mandy} alt="Mandys candies" />
      <div class={style.cardBody}>
        <h3 class="card-title">Card Title</h3>
        <p class="card-text">This is a short description</p>
      </div>
    </div>
  );
}
