import { createAction, props } from '@ngrx/store';

export const filterFor = createAction('[NAV_BAR] FilterFor', props<{show:string}>());

export const filterPage = createAction('[CHARACTER_FILTER] FilterPage', props<{filter:string}>());

export const paginator = createAction('[PAGINATOR] SetPaginator', props<{prevPage:string, nextPage:string}>())

