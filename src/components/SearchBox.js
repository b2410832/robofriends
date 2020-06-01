import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='search robots'
			onChange={searchChange} //HTML DOM event. 每當input有改變(有onchange event)就會啟動searchChange function
			/>
		</div>
	);
}

export default SearchBox;