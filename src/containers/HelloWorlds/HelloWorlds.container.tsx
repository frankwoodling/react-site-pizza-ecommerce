import * as React from 'react';
import { HelloWorld} from '../../components';

export const HelloWorlds: React.FunctionComponent = () => {
    return (
    <div>
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
    </div>
    )
}

export default HelloWorlds
