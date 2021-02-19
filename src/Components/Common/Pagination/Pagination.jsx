import React, {useState} from 'react'
import styles from "../../Users/Users.module.css";


const Pagination = ({totalCountItems, pageSize, currentPage, currentPageChanged, portionSize = 10}) => {
    let pages = [];

    let pageCounts = Math.ceil(totalCountItems / pageSize)
    for (let i = 1; i <= pageCounts; i++) {
        pages.push(i)
    }

    let portionCounts = Math.ceil(pageCounts / portionSize);
    let [currentPortion, setCurrentPortion] = useState(1);
    let firstPagePortion = (currentPortion - 1) * portionSize + 1;
    let lastPagePortion = currentPortion * portionSize


    return (
        <div>
            {currentPortion > 1 &&
            <button onClick={() => {setCurrentPortion(currentPortion - 1)}}>Prev</button>}
            {pages
                .filter(p => p >= firstPagePortion && p <= lastPagePortion)
                .map(p => (
                <div className={styles.blockNumberPage} key={p}>
                        <span className={currentPage === p ? styles.fontPage : null} onClick={() => {
                            currentPageChanged(p)
                        }}>
                        {p}
                    </span>
                </div>
            ))}
            {currentPortion < portionCounts  &&
            <button onClick={() => {setCurrentPortion(currentPortion + 1)}}>Next</button>}
        </div>
    )
}


export default Pagination;
