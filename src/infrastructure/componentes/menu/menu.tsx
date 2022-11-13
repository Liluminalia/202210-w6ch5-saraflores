import { Link } from 'react-router-dom';

export function Menu() {
    const menuOptions = [
        { id: '1', path: 'Home', label: 'Home' },
        { id: '2', path: 'Milks', label: 'Milks' },
        { id: '3', path: 'Cookies', label: 'Cookies' },
        { id: '4', path: 'Sales', label: 'Sales' },
    ];
    return (
        <nav className="tabs">
            <ul className="tabs__options">
                {menuOptions.map((item) => (
                    <li className="tabs__label" key={item.id}>
                        <Link className="tabs__link" to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
