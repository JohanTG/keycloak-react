import {useEffect} from "react";
import {Link, Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {selectCharacters} from "./selectors";
import * as thunks from "./thunks";
import styles from './CharacterList.module.scss'

const CharacterList = () => {
  const model = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();
  const characters = (model.payload?.results ?? []) as { id: string; name: string; image: string; }[];

  useEffect(() => {
    if(!model.loaded && !model.loading) {
      dispatch(thunks.getAll())
    }
  }, [model, dispatch])

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
          {model.loaded && characters.map(({id, name, image}) =>
            <li key={id} className="card">
              <Link to={`/characters/${id}`}>
                <img src={image} alt={`${name} Thumbnail`}/>
                <h3>{name}</h3>
              </Link>
            </li>
          )}
        </ul>
        <p>
          <button onClick={handleLoadMore}>Load More</button>
        </p>
        <Outlet />
      </main>
    </div>
  )
}

export default CharacterList;