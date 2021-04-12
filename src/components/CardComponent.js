import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const CardComponent = (props) => {

    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.card_title}</Card.Title>
                <Card.Text>{props.card_text}</Card.Text>
                { props.path ? <Link className="btn btn-primary" to={props.path + "/" + props.id}>{props.button_text}</Link> : null }
            </Card.Body>
        </Card>
    );
};

export default CardComponent;