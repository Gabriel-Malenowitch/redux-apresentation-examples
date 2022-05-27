import { useLazyGetUsersQuery, useSetUsersMutation } from './Api';

export const Show006 = ()=> {
	const [getUsers, { data, currentData }] = useLazyGetUsersQuery('Chave do useQuery');
	const [ setUsers ] = useSetUsersMutation('Chave do useMutation');
	return (
		<>
			<button onClick={() => getUsers()}>Executar o GET</button>
			<button onClick={() => setUsers({user: 'Cleiton'})}>Executar o POST</button>
			<div style={{display: 'flex'}}>
				<pre>
					{JSON.stringify(data, null, 2)}
				</pre>
				<pre>
					{JSON.stringify(currentData, null, 2)}
				</pre>
			</div>
		</>
	);
};