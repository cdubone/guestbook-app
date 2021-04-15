import React, { useRef  } from 'react';
import CardComponent from '../components/CardComponent';
import { useFetch }  from '../hooks/useFetch';
import { apiPath } from '../helpers/apiPath';
import CenteredSpinner from '../components/CenteredSpinner';

const DetailsPage = props => {

    console.log(props);

    // const isComponentMounted = useRef(true);

    // const { data, loading, error } = useFetch(
    //     apiPath.aboutus,
    //     isComponentMounted,
    //     []
    // );

    // if (error)
    //     console.log(error);

    return (
        <>
            {/* {loading ? (
                <CenteredSpinner />
            ) : (  */}
                <div className="container-fluid">

                    <h3>{props.match.params.id}</h3>
               
                </div>
            {/* )} */}
        </>
    );
};

export default DetailsPage;