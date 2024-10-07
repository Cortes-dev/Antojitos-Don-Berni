import React from 'react';
import { Link } from 'react-router-dom';

const LinkUrl = ({ url, text, onClick }) => {
    return (
        <li className="my-4 md:my-0">
            <Link
                to={url}
                className="text-lg font-semibold hover:text-green-500"
                onClick={onClick} 
            >
                {text}
            </Link>
        </li>
    );
}

export default LinkUrl;
