import React, { useEffect, useState  } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';

const HomePage = () => {

const [homepageData, setHomepageData] = useState({});

    useEffect(() => {
        console.log('use effect');
        getHomepageData();
    }, []);

    const getHomepageData = async () => {
        const response = await fetch('http://localhost:3001/homePage');
        const data = await response.json();
        setHomepageData(data);
        console.log(data);
    }

    return (
        <>
        <div className="container-fluid">
            <Jumbotron>
                <h1>{homepageData.welcome_header}</h1>
                <p>{homepageData.welcome_msg}</p>
                <Button variant="primary">{homepageData.button_text}</Button>
            </Jumbotron>

            <div className="row">

                {homepageData.cards && homepageData.cards.map(card => (
                    <div key={card.id} className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title>{card.card_title}</Card.Title>
                                <Card.Text>{card.card_text}</Card.Text>
                                <Button variant="primary">{card.button_text}</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))} 
          
            </div>
        </div>
        </>
    );
};

export default HomePage;