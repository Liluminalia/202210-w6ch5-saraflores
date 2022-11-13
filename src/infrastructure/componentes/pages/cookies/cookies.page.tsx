import React from 'react';
import { CookiesList } from '../../../../features/cookies/components/cookies.list/cookies.list';
import { useCookies } from '../../../../features/cookies/hook/usecookies';

function CookiesPage() {
    const { cookies } = useCookies();

    return (
        <main>
            <CookiesList item={cookies} />
        </main>
    );
}

export default CookiesPage;
