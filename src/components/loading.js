import React from 'react';

const Loading = () => {
    return (
        <div style={{ display: 'grid' }}>
            <i
                className="fa fa-spinner fa-3x fa-spin"
                style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }} />
        </div>
    );
};

export default Loading;