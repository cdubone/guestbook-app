import React, { useEffect, useState  } from 'react';
import CardComponent from '../components/CardComponent';

const AreaInformationPage = () => {

const [areaActivitiesData, setAreaActivitiesData] = useState({});

    useEffect(() => {
        console.log('use effect');
        getAreaActivitiesData();
    }, []);

    const getAreaActivitiesData = async () => {
        const response = await fetch('http://localhost:3001/areaInformationPage');
        const data = await response.json();
        setAreaActivitiesData(data);
        console.log(data);
    }

    return (
        <>
        <div className="container-fluid">

            <h3>{areaActivitiesData.welcome_header}</h3>

            <div className="row">
                {areaActivitiesData.cards && areaActivitiesData.cards.map(card => (
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

export default AreaInformationPage;