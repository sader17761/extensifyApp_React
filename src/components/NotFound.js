import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p>404 Page Not Found!</p>
        {/* Clientside Routing...speeds up the routing...won't make a serverside call */}
        <Link to="/">Go to Home Page</Link>
    </div>
);

export default NotFoundPage;