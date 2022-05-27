import {useLazyGetUsersQuery} from './Api';

export const Show005 = ()=> {
	const [getUsers, { data }] = useLazyGetUsersQuery();
	return (
		<>
			<button onClick={() => getUsers()}>Executar o GET</button>
			<div style={{display: 'flex'}}>
				<pre>
					{JSON.stringify(data, null, 2)}
				</pre>
			</div>
		</>
	);
};