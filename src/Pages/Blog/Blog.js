import React from 'react';

const Blog = () => {
    return (
        <div tabindex="0" className="collapse group">
            <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                Focus me to see content
            </div>
            <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
            </div>
        </div>
    );
};

export default Blog;