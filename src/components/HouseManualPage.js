import React, { useEffect, useState  } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HouseManualPage = () => {

const [houseManualData, setHouseManualData] = useState({});

    useEffect(() => {
        console.log('use effect');
        getHouseManualData();
    }, []);

    const getHouseManualData = async () => {
        const response = await fetch('http://localhost:3001/houseManualPage');
        const data = await response.json();
        setHouseManualData(data);
        console.log(data);
    }

    return (
        <>
        <div className="container-fluid">

            <h3>{houseManualData.welcome_header}</h3>

            <div className="row">
                {houseManualData.cards && houseManualData.cards.map(card => (
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

export default HouseManualPage;