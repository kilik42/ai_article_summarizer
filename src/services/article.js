import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
    
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/'
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (url) => `article/summary?url=${url}`,
        })
    }),
 
});
