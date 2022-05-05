import { Link, useParams } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {selectCharacterOpened} from "../character-list/selectors";
import styles from './Character.module.scss'
import {useEffect} from "react";
import * as thunks from "../character-list/thunks";

const Character = () => {
  const {id: characterId} = useParams();

  const model = useAppSelector(selectCharacterOpened);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(!model.loading) {
      dispatch(thunks.getById(parseInt(characterId as string)))
    }
  }, [characterId, dispatch])

  const { name, image, gender, location, origin, species, status } = model.payload ?? {};

  return (
    <div className={styles.container}>

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