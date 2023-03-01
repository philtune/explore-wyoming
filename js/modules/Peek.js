import {ScrollWatcher} from "../library/ScrollWatcher.js";

export const Peek = ({_me}) => {
	const bottomWatcher = new ScrollWatcher(_me, 'bottom')
	const watcher70 = new ScrollWatcher(_me, 0.7)
	const watcher85 = new ScrollWatcher(_me, 0.85)
	bottomWatcher
		.before(() => _me.classList.remove('bottomPeek'))
		.afterStarted(() => _me.classList.add('bottomPeek'))
	watcher70
		.before(() => _me.classList.remove('peek70'))
		.afterStarted(() => _me.classList.add('peek70'))
	watcher85
		.before(() => _me.classList.remove('peek85'))
		.afterStarted(() => _me.classList.add('peek85'))
}
