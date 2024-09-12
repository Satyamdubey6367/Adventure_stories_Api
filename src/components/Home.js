import React, { useEffect, useState } from 'react';
import { fetchStories } from '../components/Service';
import { Link } from 'react-router-dom';

const Home = () => {
    const [stories, setStories] = useState([]);
   
    useEffect(() => {
        const getStories = async () => {
            const data = await fetchStories();
            setStories(data);
        };

        getStories();
    }, []);
   
    return (
        <div className="story-cards">
            {stories.map((story,index) => (
                <div key={story.id} className="story-card">
                    <img src={`https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Popular-Temples-in-India.jpg/${story.Image}`}  />
                    <h3>{story.Title}</h3>
                    <h5>{story.Status}</h5>
                    <Link to={`/story/${story._id}`}>Read More Data</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
