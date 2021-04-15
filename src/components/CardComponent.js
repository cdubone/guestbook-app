import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useRouteMatch } from "react-router-dom";

const CardComponent = (props) => {

    // const { url } = useRouteMatch();
    const getPath = () => {
        let detailsStr = 'details';
        let urlPath = '';
        urlPath = props.path;
        if(props.path.includes(detailsStr))
            urlPath = "/" + detailsStr + "/" + props.id;
            // urlPath = url + "/" + detailsStr + "/" + props.id;
        return urlPath;
    }

    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.card_title}</Card.Title>
                <Card.Text>{props.card_text}</Card.Text>
                { props.path ? <Link className="btn btn-primary" to={getPath()}>{props.button_text}</Link> : null }
            </Card.Body>
        </Card>
    );
};

export default CardComponent;