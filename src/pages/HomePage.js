import React, { useEffect, useState  } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardComponent from '../components/CardComponent';

const HomePage = () => {

const [homepageData, setHomepageData] = useState({});

    useEffect(() => {
        getHomepageData();
    }, []);

    const getHomepageData = async () => {
        const response = await fetch('http://localhost:3001/homePage');
        const data = await response.json();
        setHomepageData(data);
    }

    return (
        <>
        <div className="container-fluid">
            <Jumbotron>
                <h3>{homepageData.welcome_header}</h3>
                <p>{homepageData.welcome_msg}</p>
                <Button variant="primary">{homepageData.button_text}</Button>
            </Jumbotron>

            <div className="row">
                {homepageData.cards && homepageData.cards.map(card => (
                    <div key={card.id} className="col-md-4">
                        <CardComponent image={card.image}
                                       card_title={card.card_title}
                                       card_text={card.card_text} 
                                       path={card.path}
                                       button_text={card.button_text} />
                    </div>
                ))} 
            </div>
        </div>
        </>
    );
};

export default HomePage;