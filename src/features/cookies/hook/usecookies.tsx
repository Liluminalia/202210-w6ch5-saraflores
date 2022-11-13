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
            .then((cookies) => dispatcher(ac.loadActionCreator(cookies)));
    }, [repositoryCookie, dispatcher]);

    const handleAdd = (newCookie: ProtoCookie) => {
        repositoryCookie
            .createCookie(newCookie)
            .then((cookie: Cookie) => dispatcher(ac.addActionCreator(cookie)));
    };

    const handleUpdate = (updateCookie: Partial<Cookie>) => {
        repositoryCookie
            .updateCookie(updateCookie)
            .then((cookie: Cookie) =>
                dispatcher(ac.updateActionCreator(cookie))
            );
    };

    const handleDelete = (cookie: Cookie) => {
        repositoryCookie
            .deleteCookie(cookie.id)
            .then(() => dispatcher(ac.deleteActionCreator(cookie)));
    };

    return {
        cookies,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
