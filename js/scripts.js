import {_$} from "./library/myWrapper.js";
import {Peek} from "./modules/Peek.js";
import {m_VideoPlayer} from "./modules/m_VideoPlayer.js";
import {Tracker} from "./library/Tracker.js";
import {m_Gallery} from "./modules/m_Gallery.js";

const tracker = Tracker.set({oid: 48399, cid: 108})
tracker.trackImpression('blackbird-overall')

Object.entries({
	'video-player': m_VideoPlayer,
	'peek': Peek,
	'gallery': m_Gallery,
	'hero': ({_me, findAll}) => {
		const radios_ = Array.from(findAll('radio'))
		let _rando = radios_[Math.floor(Math.random() * (radios_.length))]
		console.log(_rando)
		_rando.checked = true
	}
}).forEach(([key, cb]) => _$(key).each(cb))
