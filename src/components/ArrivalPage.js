import React, { useEffect, useState  } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ArrivalPage = () => {

const [arrivalPageData, setArrivalPageData] = useState({});

    useEffect(() => {
        console.log('use effect');
        getarrivalPageData();
    }, []);

    const getarrivalPageData = async () => {
        const response = await fetch('http://localhost:3001/arrivalPage');
        const data = await response.json();
        setArrivalPageData(data);
        console.log(data);
    }

    return (
        <>
        <div className="container-fluid">

            <h3>{arrivalPageData.welcome_header}</h3>

            <div className="row">
                {arrivalPageData.cards && arrivalPageData.cards.map(card => (
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

export default ArrivalPage;