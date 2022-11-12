import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ProtoMilk, Milk } from '../types/milk';
import * as ac from '../reducer/action.creators';
import { MilkRepository } from '../services/milk.repository';

export const useTasks = () => {
    const milks = useSelector((state: rootState) => state.milks);
    const dispatcher = useDispatch();
    const repositoryMilk = useMemo(() => new MilkRepository(), []);

    useEffect(() => {
        repositoryMilk
            .getAllMilks()
            .then((milks) => dispatcher(ac.loadActionCreator(milks)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [repositoryMilk, dispatcher]);

    const handleAdd = (newMilk: ProtoMilk) => {
        repositoryMilk
            .createMilk(newMilk)
            .then((milk: Milk) => dispatcher(ac.addActionCreator(milk)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateMilk: Partial<Milk>) => {
        repositoryMilk
            .updateMilk(updateMilk)
            .then((milk: Milk) => dispatcher(ac.updateActionCreator(milk)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (milk: Milk) => {
        repositoryMilk
            .deleteMilk(milk.id)
            .then(() => dispatcher(ac.deleteActionCreator(milk)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        milks,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
