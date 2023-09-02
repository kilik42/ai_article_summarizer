import {configureStore} from '@reduxjs/toolkit';
import {articleApi} from './article';

export const store = configureStore({
    reducer: {
        // Add reducers here
        [articleApi.reducerPath]: articleApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(articleApi.middleware), // Add middleware here))

});
