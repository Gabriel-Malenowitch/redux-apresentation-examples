import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchUsersResponse } from '../../models';

type FetchUsersResult = FetchUsersResponse

const baseUrl = 'https://jsonplaceholder.typicode.com';


const Api = createApi({
	reducerPath: 'json_placeholder_api',
	baseQuery: fetchBaseQuery({ baseUrl }),
	tagTypes: ['Users', 'cachorro'],
	endpoints: (builder) => ({
		getUsers: builder.query<FetchUsersResult[], void>({
			query: () => { 
				return 'users';
			},
			extraOptions: { 
				isError: true,
				delay: 5,
			},
			providesTags: ['Users', 'cachorro']
		}),
		setUsers: builder.mutation<void, {user: string}>({
			query: (user) => ({ 
				method: 'POST',
				body: { user: user },
				url: 'users'
			}),
			invalidatesTags: (result, error) => error ? [] : ['Users']
		}),    
	}),    
});

export const store = configureStore({
	reducer: {
		[Api.reducerPath]: Api.reducer
	},
	middleware: getDefault => getDefault().concat(Api.middleware)
});

export const {
	useGetUsersQuery,
	useSetUsersMutation,
	useLazyGetUsersQuery
} = Api;