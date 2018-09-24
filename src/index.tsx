import Bashme from 'bashme';
import * as React from 'react';

import { InfoProvider } from './providers';

import 'bashme/dist/xterm.css';

interface BashmeProps {
	providers: Array<InfoProvider>,
	onCommand: (cmd: string, args: object) => void 
}

export default class extends React.Component<BashmeProps, any> {

	private bashme: Bashme;

	constructor(props: any) {
		super(props);

		this.bashme = new Bashme();
		this.registerBashmeListeners();
	}

	public componentDidMount() {
		this.props.providers.forEach(provider => {
			this.bashme.use(provider);
		});

		this.bashme.show(document.getElementById('bashme')!);
	}

	private registerBashmeListeners() {
		if (this.props.onCommand) {
			this.bashme.on('command', this.props.onCommand);
		}
	}

	public render() {
		return (
			<div id='bashme' />
		);
	}

}
