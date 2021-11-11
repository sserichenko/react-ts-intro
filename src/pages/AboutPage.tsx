import React from 'react';
import  { useNavigate }  from "react-router-dom";

const AboutPage:React.FC = () => {

    const navigate = useNavigate();
    return (
        <div>
            <h1>Page of information</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere reprehenderit voluptas accusamus harum, corporis obcaecati, nihil libero natus officiis laudantium adipisci? Natus mollitia unde consequuntur assumenda, neque praesentium eos.</p>
            <button onClick={() => navigate('/')} className="btn">Go back to Todos</button>
        </div>
    );
};

export default AboutPage;