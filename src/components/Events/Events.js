import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import noimg from '../../assets/noimg.png'
import EventItem from './EvenItem'
import styles from './Events.module.css'

const Events = () => {

    const [sampleEvents, setSampleEvents] = useState([]);
    
    useEffect(()=>{

        const iEvents = async ()=>{
           const response = await fetch("https://galgotias-opportunist-default-rtdb.asia-southeast1.firebasedatabase.app/events.json");

           const responseData = await response.json();
  
           const loadedEvents = [];

           for(const key in responseData){
            loadedEvents.push({
                title: responseData[key].title,
                description: responseData[key].description,
                urlToImage: responseData[key].urlToImage,
                id: responseData[key].source.id
            })
           }
           setSampleEvents(loadedEvents);
        };

        iEvents();    
    },[])
    

    return (
        <div className={styles.events}>
            {sampleEvents.map((e) => {
                const title = e.title ? e.title : "";
                const details = e.description ? e.description : "";
                const img = e.urlToImage ? e.urlToImage : noimg;

                return <>
                    <EventItem key={e.id} title={title} details={details} img={img}/>
                </>
            })}
        </div>
    )
}

export default Events