import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Root
