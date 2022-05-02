import isArray from 'is-array'
const Dropdown = await import('teamb/dropdown')
const store = await import('teamb/store')
const LoginModal = await import('./loginModal')

console.log('store', store.default.getState())

export default `(HomePage[${Dropdown.default}][${LoginModal.default}][${isArray.name}])`
 