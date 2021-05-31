import React from 'react';

const Filter = (props) => {
    return (
        <>
            <form>
                <div>
                    Find country with
                <input value={props.newFilter}
                        onChange={props.handleFilterChange}>
                    </input>
                </div>
            </form>
        </>
    )
}

export default Filter;