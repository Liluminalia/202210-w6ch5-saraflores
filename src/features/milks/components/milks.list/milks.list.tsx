import { Milk } from '../../types/milk';
import { MilkItem } from '../milk.item/milk.item';

export function MilksList({ item }: { item: Milk[] }) {
    return (
        <>
            <h2>Milks List</h2>
            <ul>
                {item.map((item) => (
                    <li key={item.id}>
                        <MilkItem item={item}></MilkItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
