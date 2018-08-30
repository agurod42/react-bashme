import Bashme from 'bashme';
import * as React from 'react';

import { InfoProvider } from './providers';

import 'bashme/dist/xterm.css';

interface BashmeProps {
	providers: Array<InfoProvider>
}

export default class extends React.Component<BashmeProps, any> {

	public componentDidMount() {
		this.props.providers.forEach(provider => {
			Bashme.use(provider);
		});

		Bashme
			.show(document.getElementById('bashme')!);
	}

	public render() {
		return (
			<div id='bashme' />
		);
	}

}
