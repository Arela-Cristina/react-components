import style from "./body.module.css";
import Card from "./card/Card.jsx";

export default function Body() {
  return (
    <main>
      <section className={style.container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
