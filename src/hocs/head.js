import React from 'react';
import dynamic from 'next/dynamic';

const Head = dynamic(import('components/head'));
export default (Component) => () => (
	<div>
		<Head />
		<Component />
	</div>
);
