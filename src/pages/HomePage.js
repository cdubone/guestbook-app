import React, { useRef  } from 'react';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardComponent from '../components/CardComponent';
import  { useFetch }  from '../hooks/useFetch';
import CenteredSpinner from '../components/CenteredSpinner';

const HomePage = () => {

    const isComponentMounted = useRef(true);

    const { data, loading, error } = useFetch(
        "homePage",
        isComponentMounted,
        []
    );

    if (error)
        console.log(error);

    return (
        <>
        {loading ? (
            <CenteredSpinner />
        ) : ( 
            <div className="container-fluid">
                <Jumbotron>
                    <h3>{data.welcome_header}</h3>
                    <p>{data.welcome_msg}</p>
                    <NavLink className="btn btn-primary" to={data.link_destination}>{data.link_text}</NavLink>
                    {/* <Button variant="primary">{data.link_text}</Button> */}
                </Jumbotron>

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

export default HomePage;