import React from 'react'
import styles from './EventItem.module.css'

const EventItem = (props) => {
    return (
        <>
            <div class={styles.eventCard + " container"} >
                <img src={props.img} alt="..." />
                    <div class={styles["cardBody"]}>
                        <h5 class="mt-2">{props.title}</h5>
                        <p class={styles["card-text"]}>{props.details}</p>
                    </div>
            </div>
        </>
    )
}

export default EventItem