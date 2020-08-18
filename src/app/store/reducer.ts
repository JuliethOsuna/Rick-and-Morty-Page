import { createReducer, on } from '@ngrx/store';
import { filterFor, filterPage, paginator } from './actions';
import { MdStore } from 'src/app/models/store';

export const initialState:MdStore = {
    show : "character",
    filter: "",
    prevPage: "",
    nextPage: ""
}

const _contentReducer = createReducer(initialState,
    on(filterFor, (state, {show}) => (
            {
                ...state,
                show
            }
        )
    ),
    on(filterPage, (state, {filter}) => (
            {
                ...state,
                filter
            }
        )
    ),
    on(paginator, (state, {prevPage, nextPage}) => (
            {
                ...state,
                prevPage,
                nextPage
            }
        )
    )
);

export function contentReducer(state, action){
    return _contentReducer(state, action);
};
