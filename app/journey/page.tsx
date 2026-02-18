"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslate } from "../layout";
import "@/public/styles/journey.scss";

interface JourneyTile {
    title: string;
    description: string;
    date: number;
    url : string;
    timespan: string;
    accessible: boolean;
    image: string;
}

export default function Journey() {
    const { translate } = useTranslate();

    const ref = useRef<HTMLDivElement>(null);
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setTimeout(() => {
                const height = ref.current.offsetHeight;
                setLineHeight(height);
            }, 300);
        }
    }, [translate]);

    return (
        <div className="journey">
            
            <div className="followup__line">
                <div className="followup__line__progress" style={{ height: `${lineHeight}px` }}></div>
            </div>
            <div className="journey__content" ref={ref}>
                {
                    translate && translate.journey.tiles.map((item: JourneyTile, index: number) => (
                        <div key={index} className="journey__tile" >
                            <div className="journey__tile__image">
                                <img src={item.image} alt={item.title} className="journey__tile__image--img" />
                            </div>
                            <div className="journey__tile__content">
                                <div className="tile__header">
                                    <div className="tile__span">
                                        <p className="journey__tile__content__date">
                                            {item.date}
                                        </p>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-440q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h560q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H200Z"/></svg>
                                        <p className="journey__tile__content__date">{item.timespan}</p>
                                    </div>
                                    <h3 className="journey__tile__content__title">{item.title}</h3>

                                </div>
                                <p className="journey__tile__content__description">{item.description}</p>

                                {item.accessible ? (
                                    <a href={item.url} className="journey__tile__content__link">Voir le projet</a>
                                ) : (
                                    <p className="journey__tile__content__link disabled">Projet en cours de développement</p>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}