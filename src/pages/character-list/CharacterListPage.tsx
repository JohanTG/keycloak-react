import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectors, thunks} from "../../store/characters";
import styles from './CharacterListPage.module.scss'
import CharacterList from "./components/CharacterList/CharacterList";
import Paginator from "../../shared/ui/paginator/Paginator";

const CharacterListPage = () => {
  const model = useAppSelector(selectors.selectCharacters);
  const dispatch = useAppDispatch();
  const characters = (model.payload?.results ?? []) as { id: number; name: string; image: string; }[];
  const pageInfo = (model.payload?.info ?? {}) as { count: number; pages: number; };
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    if(!model.loaded && !model.loading) {
      dispatch(thunks.getAll(currentPage))
    }
  }, [model, dispatch, currentPage])

  const handlePageChanged = (page: number) => {
    setCurrentPage(page);
    dispatch(thunks.getAll(page));
  }

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

        <div>
          {model.loaded &&
            <Paginator currentPage={currentPage}
              onPageChanged={handlePageChanged}
              totalItemsCount={pageInfo.count ?? 0}
              pageSize={pageSize}/>
          }
        </div>
      </main>
    </div>
  )
}

export default CharacterListPage;