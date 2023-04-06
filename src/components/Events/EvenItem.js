import React from 'react'
import styles from './EventItem.module.css'

const EventItem = (props) => {
    return (
        <>
            <div className={styles.eventCard + " container"} >
                <img src={props.img} alt="..." />
                    <div className={styles["cardBody"]}>
                        <h5 className="mt-2">{props.title}</h5>
                        <p className={styles["card-text"]}>{props.details}</p>
                    </div>
            </div>
        </>
    )
}

export default EventItem