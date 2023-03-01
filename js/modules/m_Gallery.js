export const m_Gallery = ({_me, findAll, first}) => {
	const triggers_ = findAll('trigger')
	const _photo = first('photo')
	const closes_ = findAll('close')
	triggers_.forEach(_trigger=>_trigger.addEventListener('click', ()=>{
		_me.classList.add('active')
		console.log(_trigger.getAttribute('data-trigger'))
		_photo.style.backgroundImage = `url(${_trigger.getAttribute('data-trigger')})`
	}))
	closes_.forEach(_close=>_close.addEventListener('click', ()=>_me.classList.remove('active')))
}
