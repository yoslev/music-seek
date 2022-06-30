import React, {useState, useEffect, useRef} from "react";
import {useParams} from "react-router-dom";
import {getAgeClassById, getGenreById, getInstrumentById, getPlayerLevelById, getRegionById} from "../entities/enums";

export default function User() {
    const [user, setUser] = useState(null);
    const [uid, setUid] = useState(null);

    let { id } = useParams();

    useEffect(() => {
            fetch(`/api/v01/users/${id}`)
                .then((res) => {
                    return res.json()
                })
                .then((u) => {
                     setUser(u);
                });
    }, [id]);


    if (!user) {
        return <h1>{id}</h1>; //'Loading..'
    }

    return (
        <div className="user">
            <h1>USER id: {id}</h1>
            <p>first name    : {user.firstName}</p>
            <p>last name     : {user.lastName}</p>
            <p>eMail         : {user.email}</p>
            <p>1st instrument: {getInstrumentById(user.mainPayingInstrumentId)} Level: {getPlayerLevelById(user.mainPayingInstrumentLevel)}</p>
            <p>2nd instrument: {getInstrumentById(user.secondPayingInstrumentId)} Level: {getPlayerLevelById(user.secondPayingInstrumentLevel)}</p>
            <p>Genre         : {getGenreById(user.musicGenres)}</p>
            <p>Region        : {getRegionById(user.region)}</p>
            <p>Age           : {getAgeClassById(user.ageClass)}</p>
        </div>
    );
}
