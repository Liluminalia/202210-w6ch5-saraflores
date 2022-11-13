import { Link } from 'react-router-dom';
import { Cookie } from '../../../cookies/types/cookie';

export function CookieItem({ item }: { item: Cookie }) {
    return (
        <>
            <div>
                <h3>
                    {item.brand} {item.kind}
                </h3>
                <Link to={'/Details/' + item.id} key={item.id}>
                    <img
                        src={item.img}
                        alt={'hola ' + item.brand + ' ' + item.kind}
                        height="300"
                    />
                </Link>
                <p> PVP: {item.price}€</p>
            </div>
        </>
    );
}
