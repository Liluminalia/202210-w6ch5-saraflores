import { MilksList } from '../../../../features/milks/components/milks.list/milks.list';
import { useMilks } from '../../../../features/milks/hook/usemilks';

function MilksPage() {
    const { milks } = useMilks();

    return (
        <main className="main">
            <MilksList item={milks}></MilksList>
        </main>
    );
}

export default MilksPage;
