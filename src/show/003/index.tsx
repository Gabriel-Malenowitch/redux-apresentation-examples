import {useLazyGetUsersQuery} from './Api';

export const Show003 = ()=>{
	const [getUsers, { data, currentData }] = useLazyGetUsersQuery();
	return (
		<>
			<button onClick={() => getUsers()}>Executar o GET</button>
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