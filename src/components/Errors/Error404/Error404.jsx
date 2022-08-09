import React from 'react';
import {Link} from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <p>Ошибка 404: Страница не найдена</p>
            <hr/>
            <Link to='/'>Перейти в каталог</Link>
        </div>
    );
};

export default Error404;