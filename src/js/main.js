export default class Main {

	constructor() {
		this.init();
	}

	init() {
		const body = document.querySelector('body');
		body.classList.add('ready');

		const mainContainerNode = document.querySelector('main .container');

		const messageNode = document.createElement('div');
		messageNode.innerHTML = /* html */ `<p>
			
		</p>`;
		mainContainerNode.appendChild(messageNode);
	}

}

const main = new Main();

