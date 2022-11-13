import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cookie } from '../../types/cookie';

export function CookieDetails() {
    const initialCookie: Cookie = {
        id: 0,
        brand: '',
        kind: '',
        price: 0,
        description: '',
        selected: false,
        img: '',
    };
    const [cookie, setCookie] = useState(initialCookie);
    const { id } = useParams();
    const getCookiesById = async (id: string | undefined) => {
        const data = await fetch(
            `https://202211w6ch1saramireyapatricia-production.up.railway.app/cookie${id}`
        );
        const cookie = await data.json();
        setCookie(cookie[0]);
    };

    useEffect(() => {
        getCookiesById(id);
    }, [id]);

    return (
        <div>
            <h1>
                {cookie.brand} + {cookie.kind}
            </h1>
            <div>
                <img src={cookie.img} alt={cookie.brand} width="600" />
            </div>
            <div>
                <p>Descripción: {cookie.description}</p>
                <p>PVP: {cookie.price}</p>
            </div>
        </div>
    );
}
