import { FC, memo } from 'react';

import './Header.sass';

export const Header: FC = memo(() => (
        <header className='RIMO__header bg-info justify-content-center align-items-center d-flex text-white font-monospace'>
            Rick and Morty Widget
        </header>
));
