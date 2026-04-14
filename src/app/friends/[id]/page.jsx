import React from 'react';

const FriendsDetailsPage = async({params}) => {
    const {id} = await params;
    
    return (
        <div>
            <h2>Friends Details</h2>
        </div>
    );
};

export default FriendsDetailsPage;