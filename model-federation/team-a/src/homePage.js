import isArray from 'is-array'
const Dropdown = await import('teamb/dropdown')
const LoginModal = await import('./loginModal')

export default `(HomePage[${Dropdown.default}][${LoginModal.default}][${isArray.name}])`
