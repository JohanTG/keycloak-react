import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {selectCharacters} from "./selectors";
import * as thunks from "./thunks";
import styles from './CharacterListPage.module.scss'
import CharacterList from "./components/CharacterList/CharacterList";
import {Helmet} from "react-helmet-async";

const CharacterListPage = () => {
  const model = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();
  const characters = (model.payload?.results ?? []) as { id: number; name: string; image: string; }[];

  useEffect(() => {
    if(!model.loaded && !model.loading) {
      dispatch(thunks.getAll())
    }
  }, [model, dispatch])

  const handleLoadMore = () => { }

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Rick and Morty Wiki - All characters</title>
        <meta name="description" content="All characters of 'Rick and Morty' TV series" />
      </Helmet>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wubba Lubba Dub Dub!
        </h1>

        <p className={styles.description}>
          Rick and Morty Character Wiki
        </p>

        {model.loaded && <CharacterList characters={characters} />}

        <p>
          <button onClick={handleLoadMore}>Load More</button>
        </p>
      </main>
    </div>
  )
}

export default CharacterListPage;