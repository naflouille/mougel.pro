"use client";
import { useTranslate } from "../layout";
import '@/public/styles/about-me.scss';


const GetIcon = ({ name }: { name: string }) => {
    switch (name) {
        case "innovation":
            return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M423.5-103.5Q400-127 400-160h160q0 33-23.5 56.5T480-80q-33 0-56.5-23.5ZM360-200q-17 0-28.5-11.5T320-240q0-17 11.5-28.5T360-280h240q17 0 28.5 11.5T640-240q0 17-11.5 28.5T600-200H360Zm-30-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Z"/></svg>;
        case "support":
            return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M423.5-743.5Q400-767 400-800t23.5-56.5Q447-880 480-880t56.5 23.5Q560-833 560-800t-23.5 56.5Q513-720 480-720t-56.5-23.5ZM360-120v-480q-49-4-99-11t-98-18q-17-4-27.5-19t-5.5-32q5-17 21-25t34-4q70 15 145.5 22t149.5 7q74 0 149.5-7T775-709q18-4 34 4t21 25q5 17-5.5 32T797-629q-48 11-98 18t-99 11v480q0 17-11.5 28.5T560-80q-17 0-28.5-11.5T520-120v-200h-80v200q0 17-11.5 28.5T400-80q-17 0-28.5-11.5T360-120Z"/></svg>;
        case "improvement":
            return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M272-160q-30 0-51-21t-21-51q0-21 12-39.5t32-26.5l156-62v-90q-48 55-108 87.5T162-322q-17 2-29.5-9.5T120-360q0-17 11-29t28-14q55-8 101-34t84-71l54-64q12-14 28-21t34-7h40q18 0 34 7t28 21l54 64q38 45 84 71t101 34q17 2 28 14t11 29q0 17-12.5 28.5T798-322q-70-8-130-40.5T560-450v90l156 62q20 8 32 26.5t12 39.5q0 30-21 51t-51 21H400v-20q0-26 17-43t43-17h120q9 0 14.5-5.5T600-260q0-9-5.5-14.5T580-280H460q-42 0-71 29t-29 71v20h-88Zm151.5-503.5Q400-687 400-720t23.5-56.5Q447-800 480-800t56.5 23.5Q560-753 560-720t-23.5 56.5Q513-640 480-640t-56.5-23.5Z"/></svg>;
        case "communication":
            return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M40-320v-23q0-59 57-78t103-19q46 0 103 19t57 78v23H40Zm160-160q-33 0-56.5-23.5T120-560q0-33 23.5-56.5T200-640q33 0 56.5 23.5T280-560q0 33-23.5 56.5T200-480Zm187 57q-12 0-21-9t-9-21q0-6 9-21 8-10 11-22t3-24q0-12-3-23.5T366-565q-4-5-6.5-10.5T357-587q0-13 8.5-21.5T387-617q8 0 14.5 4.5T413-602q13 18 20 39t7 43q0 22-7 42.5T413-438q-5 6-11.5 10.5T387-423Zm85 86q-13 0-22-8.5t-9-21.5q0-6 2.5-11.5T450-389q25-28 37.5-62t12.5-69q0-35-12.5-68.5T450-650q-4-5-6.5-10t-2.5-11q0-13 8.5-22t21.5-9q7 0 13 3t11 8q33 37 49 81t16 90q0 46-16.5 90.5T495-348q-5 5-10.5 8t-12.5 3Zm128 17v-23q0-59 57-78t103-19q46 0 103 19t57 78v23H600Zm160-160q-33 0-56.5-23.5T680-560q0-33 23.5-56.5T760-640q33 0 56.5 23.5T840-560q0 33-23.5 56.5T760-480Z"/></svg>;
        case "sovereignty":
            return (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M788.5-372q16.5 0 28.5 12l63 64q12 12 12 28t-12 28q-12 12-28 12t-28-12l-64-63q-12-12-12-28.5t12-28.5q12-12 28.5-12ZM812-811.5q0 16.5-12 28.5l-63 63q-12 12-28.5 12T680-720q-12-12-12-28.5t12-28.5l64-63q12-12 28-12t28 12q12 12 12 28.5ZM188.5-852q16.5 0 28.5 12l63 64q12 12 12 28t-12 28q-12 12-28.5 12T223-720l-63-63q-12-12-12-28.5t12-28.5q12-12 28.5-12ZM212-331.5q0 16.5-12 28.5l-63 63q-12 12-28.5 12T80-240q-12-12-12-28.5T80-297l64-63q12-12 28-12t28 12q12 12 12 28.5ZM480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"/></svg>)
    }
}


export default function AboutMe() {
    const { translate } = useTranslate();

    if (translate === null) return null;

    return (
        <div className="about__me__page">
            

            <div className="sheet person">
                <div className="sheet__header">
                    <div className="sheet__image person__sheet__image">
                        <img src="/assets/md.jpg" alt="Profile Picture" className="person__sheet__image--img" />
                    </div>
                    <div className="tag">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M423.5-743.5Q400-767 400-800t23.5-56.5Q447-880 480-880t56.5 23.5Q560-833 560-800t-23.5 56.5Q513-720 480-720t-56.5-23.5ZM360-120v-480q-49-4-99-11t-98-18q-17-4-27.5-19t-5.5-32q5-17 21-25t34-4q70 15 145.5 22t149.5 7q74 0 149.5-7T775-709q18-4 34 4t21 25q5 17-5.5 32T797-629q-48 11-98 18t-99 11v480q0 17-11.5 28.5T560-80q-17 0-28.5-11.5T520-120v-200h-80v200q0 17-11.5 28.5T400-80q-17 0-28.5-11.5T360-120Z"/></svg>
                        <p>{translate['about-me']['person']['title']}</p>
                    </div>
                </div>
                <div className="sheet__content person__sheet__content">
                    <h3>{translate['about-me']['person']['descriptionTitle']}</h3>
                    <p>{translate['about-me']['person']['description']}</p>
                </div>

                <div className="values">
                    <h3>{translate['about-me']['valuesTitle']}</h3>
                    <div className="values__list">
                        {
                            translate['about-me']['values'].map((item: { name: string }, index: number) => (
                                <div key={index} className="values__item">
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="sheet professional">
                <div className="sheet__header">
                    <div className="sheet__image professional__sheet__image">
                        <img src="/assets/naflows.png" alt="Profile Picture" className="professional__sheet__image--img" />
                    </div>
                    <div className="tag professional__tag">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Z"/></svg>
                        <p>{translate['about-me']['professional']['title']}</p>
                    </div>
                </div>
                <div className="sheet__content professional__sheet__content">
                    <h3>
                        {translate['about-me']['professional']['descriptionTitle']}
                    </h3>
                    <p>{translate['about-me']['professional']['description']}</p>
                </div>


                <div className="naflows__ambition">
                    <h3>{translate['about-me']['ambitionsTitle']}</h3>
                    <div className="naflows__ambition__list">
                        {
                            translate['about-me']['ambitions'].map((item: { name: string, icon: string }, index: number) => (
                                <div key={index} className="naflows__ambition__item">
                                    <div className="icon">
                                        <GetIcon name={item.icon.toLowerCase()} />
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}