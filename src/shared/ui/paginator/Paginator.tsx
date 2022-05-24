import React, {useState} from 'react';
import styles from "./Paginator.module.scss";
import cn from "classnames";

interface PaginatorPros {
  totalItemsCount: number,
  pageSize: number,
  currentPage: number,
  onPageChanged: (page: number) => void,
  portionSize?: number,
}

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}: PaginatorPros) => {

  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const initPortionNumber = Math.floor(currentPage / portionSize) + 1;

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(initPortionNumber);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return <div className={cn(styles.paginator)}>
    { portionNumber > 1 &&
      <button className={styles.arrow} onClick={() => { setPortionNumber(portionNumber - 1) }}> &lt;&lt; </button>
    }
    {pages
      .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
      .map((p) =>
        <button key={p}
          className={ cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
          onClick={(e) => {onPageChanged(p)}}>{p}</button>
      )
    }
    { portionCount > portionNumber &&
      <button className={styles.arrow} onClick={() => { setPortionNumber(portionNumber + 1) }}> &gt;&gt; </button>
    }
  </div>
}

export default Paginator;