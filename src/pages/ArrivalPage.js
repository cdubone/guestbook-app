import React, { useEffect, useState  } from 'react';
import CardComponent from '../components/CardComponent';

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

export default ArrivalPage;