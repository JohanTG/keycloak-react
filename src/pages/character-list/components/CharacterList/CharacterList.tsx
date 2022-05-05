import styles from "./CharacterList.module.scss";
import {Link} from "react-router-dom";

interface CharacterItem {
  id: number,
  name: string,
  image: string,
}

const CharacterList = ({characters}: {characters: CharacterItem[]}) => {
  return (
  <ul className={styles.grid}>
    {characters.map(({id, name, image}) =>
      <li key={id} className={styles.card}>
        <Link to={`/characters/${id}`}>
          <img src={image} title={name} alt={`${name} Thumbnail`}/>
          <h3>{name}</h3>
        </Link>
      </li>
    )}
  </ul>
)}

export default CharacterList;