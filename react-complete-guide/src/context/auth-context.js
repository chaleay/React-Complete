import React from 'react'


const authContext = React.createContext({
    authenticatd: false,
    login: () => {}
});

export default authContext;