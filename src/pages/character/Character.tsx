import { Link, useParams } from "react-router-dom";
import React, {useEffect} from "react";
import {Helmet} from "react-helmet-async";
import {selectors, thunks} from "../../store/characters";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import styles from './Character.module.scss'

const Character = () => {
  const {id: characterId} = useParams();

  const model = useAppSelector(selectors.selectCharacterOpened);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(!model.loading) {
      dispatch(thunks.getById(parseInt(characterId as string)))
    }
  }, [characterId, dispatch])

  const { name, image, gender, location, origin, species, status } = model.payload ?? {};

  return (
    <div className={styles.container}>
      <Helmet>
        <title>{`Rick and Morty Wiki - ${name}`}</title>
        <meta name="description" content={`'Rick and Morty' TV series: ${name} character`} />
      </Helmet>

      <main className={styles.main}>
        <h1 className={styles.title}>
          { name }
        </h1>

        <div className="profile">
          <div className="profile-image">
            <img src={image} alt={name} />
          </div>
          <div className="profile-details">
            <h2>Character Details</h2>
            <ul>
              <li>
                <strong>Name:</strong> { name }
              </li>
              <li>
                <strong>Status:</strong> { status }
              </li>
              <li>
                <strong>Gender:</strong> { gender }
              </li>
              <li>
                <strong>Species:</strong> { species }
              </li>
              <li>
                <strong>Location:</strong> { location?.name }
              </li>
              <li>
                <strong>Originally From:</strong> { origin?.name }
              </li>
            </ul>
          </div>
        </div>

        <p className="back">
          <Link to="/characters">
              Back to All Characters
          </Link>
        </p>
      </main>
    </div>
  )
}

export default Character;