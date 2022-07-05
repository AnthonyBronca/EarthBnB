import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function UserProfile(){
    const userName = useSelector((state)=> state.session.user.username)
    return (
        <div>
            <h1>{`Welcome, ${userName}`}</h1>
        </div>
    )
}
