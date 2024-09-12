
import React, { useEffect, useState } from 'react';
import { fetchStoryById } from './Service';
import { useParams } from 'react-router-dom';

const StoryDetail = () => {
    const { id } = useParams();
    const [story, setStory] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        const getStory = async () => {
            const data = await fetchStoryById(id);
            setStory(data);
        };

        getStory();
    }, [id]);

    if (!story) return
     <div>processing...</div>;

    return (
        <div className="story-detail">
            <div className="tabs">
                <button onClick={() => setActiveTab('overview')}>Overview</button>
                <button onClick={() => setActiveTab('details')}>Details</button>
                <button onClick={() => setActiveTab('comments')}>Comments</button>
            </div>

            {activeTab === 'overview' && <div className="tab-content">{story.overview}</div>}
            {activeTab === 'details' && <div className="tab-content">{story.details}</div>}
            {activeTab === 'comments' && <div className="tab-content">{story.comments}</div>}
        </div>
    );
};

export default StoryDetail;
