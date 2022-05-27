import {useGetUsersQuery, useSetUsersMutation} from './Api';

export const Show001 = ()=>{
	const { data, currentData } = useGetUsersQuery();
	const [ setUsers ] = useSetUsersMutation();
	return (
		<>
			<button onClick={() => setUsers({user: 'Cleiton'})}>
				Adicionar objeto vazio
			</button>
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