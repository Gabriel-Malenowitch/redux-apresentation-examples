import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchUsersResponse } from '../../models';

type FetchUsersResult = FetchUsersResponse

const baseUrl = 'https://jsonplaceholder.typicode.com';


const Api = createApi({
	reducerPath: 'json_placeholder_api',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getUsers: builder.query<FetchUsersResult[], void>({
			query: () => { 
				return 'users';
			},
		}),
	}),    
});

export const store = configureStore({
	reducer: {
		[Api.reducerPath]: Api.reducer
	},
	middleware: getDefault => getDefault().concat(Api.middleware),
	devTools: true
});

export const {
	useGetUsersQuery,
	useLazyGetUsersQuery
} = Api;