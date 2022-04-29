import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {selectCharacters} from "./slice";
import * as thunks from "./thunks";
import styles from './CharacterList.module.scss'
import {CHARACTERS_ALL} from "./models";
import {AppStateItem} from "../../redux/utils";

const CharacterList = () => {
  const model = useAppSelector(selectCharacters)[CHARACTERS_ALL] // as { id: string; name: string; image: string; }[];
  console.log('CharacterList: model=', model);
  const dispatch = useAppDispatch();

  //const characters =

  useEffect(() => {
    if(!model.loaded) {
      dispatch(thunks.getAll())
    }
  }, [])
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
          {model.loaded && model.payload.results.map(({id, name, image}: { id: string; name: string; image: string; }) =>
            <li key={id} className="card">
              <Link to={id}>
                <img src={image} alt={`${name} Thumbnail`}/>
                <h3>{name}</h3>
              </Link>
            </li>
          )}
        </ul>
        <p>
          <button onClick={handleLoadMore}>Load More</button>
        </p>
      </main>
    </div>
  )
}

export default CharacterList;