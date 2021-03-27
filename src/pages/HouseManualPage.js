import React, { useEffect, useState  } from 'react';
import CardComponent from '../components/CardComponent';

const HouseManualPage = () => {

const [houseManualData, setHouseManualData] = useState({});

    useEffect(() => {
        getHouseManualData();
    }, []);

    const getHouseManualData = async () => {
        const response = await fetch('http://localhost:3001/houseManualPage');
        const data = await response.json();
        setHouseManualData(data);
    }

    return (
        <>
        <div className="container-fluid">

            <h3>{houseManualData.welcome_header}</h3>

            <div className="row">
                {houseManualData.cards && houseManualData.cards.map(card => (
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

export default HouseManualPage;