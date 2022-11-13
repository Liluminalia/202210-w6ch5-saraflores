import { Cookie } from '../../../cookies/types/cookie';

export function CookieItem({ item }: { item: Cookie }) {
    return (
        <>
            <div>
                <h3>
                    {item.brand} {item.kind}
                </h3>
                <img
                    src={item.img}
                    alt={'hola ' + item.brand + ' ' + item.kind}
                    height="300"
                />
                <p> PVP: {item.price}€</p>
            </div>
        </>
    );
}
