/* eslint-env jest */
import mapQueryToObject from './mapQueryToObject'

describe('mapQueryToObject', () => {
  const match = res => () => expect(res).toMatchSnapshot()

  it('should map the query param of a path to an object', match(mapQueryToObject({ search: '&should=be&an=object&with=4&parameters=true' })))

  it('should returns an empty object when just the ?', match(mapQueryToObject({ search: '?' })))
  it('should returns an empty object when no query', match(mapQueryToObject({ search: '' })))
})
