import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { FetchUsersResponse } from '../../models';

type FetchUsersResult = FetchUsersResponse

const baseUrl = 'https://jsonplaceholder.typicode.com';


const Api = createApi({
	reducerPath: 'json_placeholder_api',
	baseQuery: fetchBaseQuery({ baseUrl }),
	refetchOnMountOrArgChange: true,
	tagTypes: ['Users'],
	serializeQueryArgs: (a: any) => {
		console.log(a);

		return 'Esta é a key customizada';
	},
	extractRehydrationInfo: (action, state) => {
		// console.log('Action:', action);
		// console.log('State:', state);
		// if(action.type === HYDRATE){
		// 	console.log('Hello world!');
		// }
		// console.log('Hello world! Out');

		return undefined;
	},
	endpoints: (builder) => ({
		getUsers: builder.query<FetchUsersResult[], void>({
			query: () => { 
				return 'users';
			},
			providesTags: ['Users'],
			extraOptions: {
				
			}
		}),

		setUsers: builder.mutation<void, {user: string}>({
			query: (user) => ({ 
				method: 'POST',
				body: { user: user },
				url: 'users'
			}),
			invalidatesTags: (result, error) => {

				console.log({result, error});
				
				return result ? ['Users'] : [];
			}
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
	useLazyGetUsersQuery,
	useSetUsersMutation
} = Api;