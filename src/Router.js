import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from './layouts/main/Main';

const Router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Main/>
        }
    ]
)

export default Router;
