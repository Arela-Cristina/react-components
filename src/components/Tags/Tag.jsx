import style from "./Tag.module.css";

export default function Tags({ tags = [] }) {
  return (
    <ul className={style.tags}>
      {tags.map((tag, index) => (
        <li key={index} className={style.tagStyle}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
