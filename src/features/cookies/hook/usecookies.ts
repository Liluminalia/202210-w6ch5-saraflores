import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ProtoCookie, Cookie } from '../types/cookie';
import * as ac from '../reducer/action.creators';
import { CookieRepository } from '../services/cookie.repository';

export const useCookies = () => {
    const cookies = useSelector((state: rootState) => state.cookies);
    const dispatcher = useDispatch();
    const repositoryCookie = useMemo(() => new CookieRepository(), []);

    useEffect(() => {
        repositoryCookie
            .getAllCookies()
            .then((cookies) => dispatcher(ac.loadActionCreator(cookies)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [repositoryCookie, dispatcher]);

    const handleAdd = (newCookie: ProtoCookie) => {
        repositoryCookie
            .createCookie(newCookie)
            .then((cookie: Cookie) => dispatcher(ac.addActionCreator(cookie)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateCookie: Partial<Cookie>) => {
        repositoryCookie
            .updateCookie(updateCookie)
            .then((cookie: Cookie) =>
                dispatcher(ac.updateActionCreator(cookie))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (cookie: Cookie) => {
        repositoryCookie
            .deleteCookie(cookie.id)
            .then(() => dispatcher(ac.deleteActionCreator(cookie)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        cookies,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
