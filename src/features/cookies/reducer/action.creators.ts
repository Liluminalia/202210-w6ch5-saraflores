import { createAction } from '@reduxjs/toolkit';
import { Cookie } from '../types/cookie';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Array<Cookie>>(actionTypes.load);

export const addActionCreator = createAction<Cookie>(actionTypes.add);

export const updateActionCreator = createAction<Cookie>(actionTypes.update);

export const deleteActionCreator = createAction<Cookie>(actionTypes.delete);
