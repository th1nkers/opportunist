import React from 'react'
import { useState, useEffect } from 'react'
import noimg from '../../assets/noimg.png'
import EventItem from './EvenItem'
import styles from './Events.module.css'

const Events = () => {

    const [sampleEvents, setSampleEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();


    ///////////////////////////////////

    useEffect(() => {

        const fetchEvents = async () => {

            //fetching Info!
            const response = await fetch("https://opportunist-io-default-rtdb.firebaseio.com/events.json");

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedEvents = [];

            for (const key in responseData) {
                loadedEvents.push({
                    title: responseData[key].title,
                    description: responseData[key].description,
                    urlToImage: responseData[key].urlToImage,
                    id: responseData[key].url
                })
            }

            const loadedE = loadedEvents.reverse()
            setSampleEvents(loadedE);
        };

        fetchEvents().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        });

        setIsLoading(false)
    }, [])


    ///////////////////////////////////////


    const sampleEventMap = sampleEvents.map((e) => {
        const title = e.title ? e.title : "";
        const details = e.description ? e.description : "";
        const img = e.urlToImage ? e.urlToImage : noimg;

        return <EventItem key={e.id} title={title} details={details} img={img} />
    })

    if (isLoading) {
        return <section className={styles.loader}>
            <p>loading..</p>
        </section>
    }

    if (httpError) {
        return <section>
            <p>error...</p>
        </section>
    }

    return (
        <section>
            {sampleEventMap}
        </section>
    )
}

export default Events