import React from 'react';

const Loading = () => {
    return (
        <div>
            <i
                className="fa fa-spinner fa-3x fa-spin"
                style={{ position: 'absolute', left: '50%', top: '50%' }} />
        </div>
    );
};

export default Loading;