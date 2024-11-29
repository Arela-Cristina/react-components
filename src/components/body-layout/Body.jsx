import style from "./body.module.css";
import Card from "./card/Card.jsx";
import brawlStars from "../../assets/database/brawlStars.js";

export default function Body() {
  return (
    <main>
      <section className={style.container}>
        <div className= {style.col}>
          {brawlStars.map((el) => (
            <Card
              thumb={el.thumb}
              title={el.name}
              description={el.description}
              key={el.id}
              published={el.published}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
