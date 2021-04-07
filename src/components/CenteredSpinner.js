
import Spinner from 'react-bootstrap/Spinner';

const CenteredSpinner = () => {

    return (
        <div className="centered-spinner">
            <Spinner animation="border" role="status" variant="secondary">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );
};

export default CenteredSpinner;