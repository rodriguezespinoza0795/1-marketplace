import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './Navbar';

export const RouterLayout: React.FC<{}> = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}