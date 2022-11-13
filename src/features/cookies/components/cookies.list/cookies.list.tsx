import { Cookie } from '../../../cookies/types/cookie';
import { CookieItem } from '../../../cookies/components/cookie.item/cookie.item';

export function CookiesList({ item }: { item: Cookie[] }) {
    return (
        <>
            <h2>Cookies List</h2>
            <ul>
                {item.map((item) => (
                    <li key={item.id}>
                        <CookieItem item={item}></CookieItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
