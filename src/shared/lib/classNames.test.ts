import { classNames } from "shared/lib/classNames"

describe('classname', () => {
  test('with only 1 params', () => {
    expect(classNames(('kuku'))).toBe('kuku')
  })

  test('with additional parmas', () => {
    expect(classNames('kuku', {}, ['all', 'active'])).toBe('kuku all active')
  })

  test('with all params', () => {
    expect(classNames('kuku', {"all": true}, ['all', 'active'])).toBe('kuku all active all')
  })

  test('with false params mods', () => {
    expect(classNames('kuku', {"all": false}, ['all', 'active'])).toBe('kuku all active')
  })

  test('without params', () => {
    expect(classNames()).toBe('')
  })
})
