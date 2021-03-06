/* eslint-disable no-undef */
import expect from 'expect'

import { generateMessage } from './message'

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    var from = 'Jerry'
    var text = 'Hello there!'
    var message = generateMessage(from, text)

    expect(typeof message.createdAt).toBe('number')
    expect(message).toMatchObject({ from, text })
  })
})
