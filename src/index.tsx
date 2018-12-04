import { Bashme, BashmeOptions } from 'bashme';
import * as React from 'react';

import { IProvider } from './provider';

import 'bashme/dist/xterm.css';

export interface BashmeProps {
	options?: BashmeOptions,
	providers: Array<IProvider>,
	onInput: (cmd: string, args: object) => void 
}

export default class extends React.Component<BashmeProps, any> {

	private bashme: Bashme;

	constructor(props: any) {
		super(props);

		this.bashme = new Bashme(this.props.options);
		this.registerBashmeListeners();
	}

	public componentDidMount() {
		this.props.providers.forEach(provider => {
			this.bashme.use(provider);
		});

		this.bashme.show(document.getElementById('bashme')!);
	}

	private registerBashmeListeners() {
		if (this.props.onInput) {
			this.bashme.on('input', this.props.onInput);
		}
	}

	public render() {
		return (
			<div id='bashme' />
		);
	}

}
