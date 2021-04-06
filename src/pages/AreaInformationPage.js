import React, { useRef  } from 'react';
import CardComponent from '../components/CardComponent';
import  { useFetch }  from '../hooks/useFetch';

const AreaInformationPage = () => {

    const isComponentMounted = useRef(true);

    const { data, loading, error } = useFetch(
        "areaInformationPage",
        isComponentMounted,
        []
    );

    console.log(error);

    return (
        <>
        {loading ? (
            <div>Loading data...</div>
        ) : ( 
            <div className="container-fluid">

                <h3>{data.welcome_header}</h3>

                <div className="row">
                    {data.cards && data.cards.map(card => (
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
        )}
        </>
    );
};

export default AreaInformationPage;