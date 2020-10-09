import React from 'react';

const withClass = (WrappedComponent, className) => {
    //...spread operator pulls out all the properties that inside the props object and distributes
    //  them as new key value pairs 
    return props => (
        <div className={className}>
            <WrappedComponent {...props} ></WrappedComponent>
        </div>

    );   
};

export default withClass;