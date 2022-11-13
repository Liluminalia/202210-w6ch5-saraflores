import { Menu } from '../menu/menu';

export function Header() {
    return (
        <>
            <header>
                <h1 className="header__title">Milk & Cookies</h1>
                <Menu></Menu>
            </header>
        </>
    );
}
