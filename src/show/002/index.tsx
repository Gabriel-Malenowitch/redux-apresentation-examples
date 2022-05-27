import {useGetUsersQuery, useSetUsersMutation, useLazyGetUsersQuery} from './Api';

export const Show002 = ()=>{
	const { data, currentData } = useGetUsersQuery();
	const [ setUsersUpgradeInBackEnd ] = useSetUsersMutation();
	const [ func ] = useLazyGetUsersQuery();
	return (
		<>
			<button onClick={() => setUsersUpgradeInBackEnd({user: 'Cleiton'})}>
				Adicionar Cleiton
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