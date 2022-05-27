import {useGetUsersQuery} from './Api';

export const Test000 = ()=>{
	const { data, currentData } = useGetUsersQuery();
	return (
		<div style={{display: 'flex'}}>
			<pre>
				{JSON.stringify(data, null, 2)}
			</pre>
			<pre>
				{JSON.stringify(currentData, null, 2)}
			</pre>
		</div>
	);
};