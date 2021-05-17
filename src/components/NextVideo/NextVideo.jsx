import React from 'react';
import './next-video.scss';

function NextVideo(props) {
    return ( <
        div className = "sub-section__next-video" >
        <
        img src = { props.image }
        className = "sub-section__next-video-image"
        alt = "Video Thumbnail" / >
        <
        div className = "sub-section__next-video-content" >
        <
        h3 className = "sub-section__next-video-title" > { props.title } < /h3> <
        h3 className = "sub-section__next-video-author" > { props.author } < /h3> < /
        div > <
        /div>
    );
}

class NextVideoQueue extends React.Component {

        export const nextVideo = {
                nextVideoList: [{
                        "id": "1af0jruup5gu",
                        "title": "BMX Rampage: 2018 Highlights",
                        "channel": "Red Cow",
                        "image": < img src = "https://i.imgur.com/l2Xfgpl.jpg"
                        alt = "BMX Riders" > < /img>
                    },
                    {
                        "id": "1ainjruutd1j",
                        "title": "Become A Travel Pro In One Easy Lesson",
                        "channel": "Todd Welch",
                        "image": < img src = "https://i.imgur.com/5qyCZrD.jpg"
                        alt = "Bike Trick" > < /img>
                    },
                    {
                        "id": "1aivjruutn6a",
                        "title": "Les Houches The Hidden Gem Of The Chamonix",
                        "channel": "Cornelia Blair",
                        "image": < img src = "https://i.imgur.com/yFS8EBr.jpg"
                        alt = "Overhead Beach" > < /img>
                    },
                    {
                        "id": "1a3cjruucpf7",
                        "title": "Travel Health Useful Medical Information For",
                        "channel": "Glen Harper",
                        "image": < img src = "https://i.imgur.com/MMDMgD7.jpg"
                        alt = "Bowl of Fruit" > < /img>
                    },
                    {
                        "id": "1am3jruuwagz",
                        "title": "Cheap Airline Tickets Great Ways To Save",
                        "channel": "Emily Harper",
                        "image": < img src = "https://i.imgur.com/ibLw5q5.jpg"
                        alt = "Hot Air Balloons" > < /img>
                    },
                    {
                        "id": "1akljruuvhzt",
                        "title": "Take A Romantic Break In A Boutique Hotel",
                        "channel": "Ethan Owen",
                        "image": < img src = "https://i.imgur.com/7rD6Mf6.jpg"
                        alt = "Overhead Ocean" > < /img>
                    },
                    {
                        "id": "1ae5jruuoc4q",
                        "title": "Choose the Perfect Accommodations",
                        "channel": "Lydia Perez",
                        "image": < img src = "https://i.imgur.com/0hi3N4B.jpg"
                        alt = "Chair" > < /img>
                    },
                    {
                        "id": "1a4kjruuedd9",
                        "title": "Cruising Destination Ideas",
                        "channel": "Timothy Austin",
                        "image": < img src = "https://i.imgur.com/DDJNZNw.jpg"
                        alt = "Cruise Ship" > < /img>
                    },
                    {
                        "id": "1a8qhruuzky3",
                        "title": "Train Travel On Track For Safety",
                        "channel": "Scotty Cranmer",
                        "image": < img src = "https://i.imgur.com/i6S8m7I.jpg"
                        alt = "Train" > < /img>
                    }
                ]
                render() {
                    return ( <
                        section className = "sub-section" >
                        <
                        p className = "sub-section__heading" > NEXT VIDEO < /p> {
                        this.state.nextVideoList.map(nextVideoInfo =>
                            <
                            NextVideo key = { nextVideoInfo.id }
                            image = { nextVideoInfo.image }
                            title = { nextVideoInfo.title }
                            author = { nextVideoInfo.author }
                            />)} < /
                            section >
                        );
                    };
                };

                export default NextVideoQueue;