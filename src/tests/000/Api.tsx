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
		setUsers: builder.query<FetchUsersResult[], void>({
			query: () => ({ 
				method: 'POST',
				body: {},
				url: 'users'
			}),
			
		})
	}),    
});

export const store = configureStore({
	reducer: {
		[Api.reducerPath]: Api.reducer
	},
	middleware: getDefault => getDefault().concat(Api.middleware)
});

export const {
	useGetUsersQuery
} = Api;