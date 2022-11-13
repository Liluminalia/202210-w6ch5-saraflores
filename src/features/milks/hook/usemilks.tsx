import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ProtoMilk, Milk } from '../types/milk';
import * as ac from '../reducer/action.creators';
import { MilkRepository } from '../services/milk.repository';

export const useMilks = () => {
    const milks = useSelector((state: rootState) => state.milks);
    const dispatcher = useDispatch();
    const repositoryMilk = useMemo(() => new MilkRepository(), []);

    useEffect(() => {
        repositoryMilk
            .getAllMilks()
            .then((milks) => dispatcher(ac.loadActionCreator(milks)));
    }, [repositoryMilk, dispatcher]);

    const handleAdd = (newMilk: ProtoMilk) => {
        repositoryMilk
            .createMilk(newMilk)
            .then((milk: Milk) => dispatcher(ac.addActionCreator(milk)));
    };

    const handleUpdate = (updateMilk: Partial<Milk>) => {
        repositoryMilk
            .updateMilk(updateMilk)
            .then((milk: Milk) => dispatcher(ac.updateActionCreator(milk)));
    };

    const handleDelete = (milk: Milk) => {
        repositoryMilk
            .deleteMilk(milk.id)
            .then(() => dispatcher(ac.deleteActionCreator(milk)));
    };

    return {
        milks,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
