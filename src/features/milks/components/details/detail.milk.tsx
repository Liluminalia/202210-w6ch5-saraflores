import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Milk } from '../../types/milk';

export function MilkDetails() {
    const initialMilk: Milk = {
        id: 0,
        brand: '',
        kind: '',
        price: 0,
        description: '',
        selected: false,
        img: '',
    };
    const [milk, setMilk] = useState(initialMilk);
    const { id } = useParams();
    const getMilksById = async (id: string | undefined) => {
        const data = await fetch(
            `https://202211w6ch1saramireyapatricia-production.up.railway.app/milk${id}`
        );
        const milk = await data.json();
        setMilk(milk[0]);
    };

    useEffect(() => {
        getMilksById(id);
    }, [id]);

    return (
        <div>
            <h1>
                {milk.brand} + {milk.kind}
            </h1>
            <div>
                <img src={milk.img} alt={milk.brand} width="600" />
            </div>
            <div>
                <p>Descripción: {milk.description}</p>
                <p>PVP: {milk.price}</p>
            </div>
        </div>
    );
}
