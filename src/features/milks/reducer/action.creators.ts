import { createAction } from '@reduxjs/toolkit';
import { Milk } from '../types/milk';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Array<Milk>>(actionTypes.load);

export const addActionCreator = createAction<Milk>(actionTypes.add);

export const updateActionCreator = createAction<Milk>(actionTypes.update);

export const deleteActionCreator = createAction<Milk>(actionTypes.delete);
