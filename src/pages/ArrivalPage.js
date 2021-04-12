import React, { useRef, useState } from 'react';
import CardComponent from '../components/CardComponent';
import { useFetch }  from '../hooks/useFetch';
import { apiPath } from '../helpers/apiPath';
import CenteredSpinner from '../components/CenteredSpinner';
import Modal from 'react-bootstrap/Modal';

const ArrivalPage = () => {

    const [show, setShow] = useState(false);

    const isComponentMounted = useRef(true);

    const { data, loading, error } = useFetch(
        apiPath.arrival,
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

                <h3>{data.welcome_header}</h3>

                <div className="row">
                    {data.cards && data.cards.map(card => (
                        <div key={card.id} className="col-md-4">
                            <CardComponent image={card.image}
                                            card_title={card.card_title}
                                            card_text={card.card_text} 
                                            path={card.path}
                                            button_text={card.button_text}
                                            id={card.id} />
                        </div>
                    ))} 
                </div>
            </div>
        )}

        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                Custom Modal Styling
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                ipsam atque a dolores quisquam quisquam adipisci possimus
                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                deleniti rem!
            </p>
            </Modal.Body>
        </Modal>


        
        </>
    );
};

export default ArrivalPage;