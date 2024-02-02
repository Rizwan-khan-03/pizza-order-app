import React from 'react'
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Dashboard from './component/Dashboard';
function Router() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default Router