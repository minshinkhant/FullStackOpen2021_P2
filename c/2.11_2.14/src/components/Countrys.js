import React, { useState } from 'react';
import CountryDetail from './CountryDetail';

const Countrys = (props) => {
    const [showDetail, setShowDetail] = useState(false)

    return (
        <div>
            <li key={props.keys}>{props.country.name}
                <button onClick={() => setShowDetail(!showDetail)}>
                    {showDetail ? "unshow" : "show"}</button>
            </li>
            {showDetail ? <CountryDetail country={props.country} /> : ""}
        </div >
    )
}

export default Countrys;