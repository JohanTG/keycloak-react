import styles from './CharacterList.module.scss'
import {Link} from "react-router-dom";

const CharacterList = () => {


  const characters: { id: string; name: string; image: string; }[] = [];

  const handleLoadMore = () => { }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Wubba Lubba Dub Dub!
        </h1>

        <p className={styles.description}>
          Rick and Morty Character Wiki
        </p>

        <ul className={styles.grid}>
          {characters.map((result: { id: string; name: string; image: string; }) => {
            const {id, name, image} = result;
            return (
              <li key={id} className="card">
                <Link to={id}>
                  <img src={image} alt={`${name} Thumbnail`}/>
                  <h3>{name}</h3>
                </Link>
              </li>
            )
          })}
        </ul>
        <p>
          <button onClick={handleLoadMore}>Load More</button>
        </p>
      </main>
    </div>
  )
}

export default CharacterList;