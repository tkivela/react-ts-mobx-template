import AppStore from './index'

describe('AppStore', () => {
  it('addCounterNote should add new note to notes array beginning', () => {
    const store = new AppStore()

    expect(store.counter).toEqual(0)
    expect(store.notes).toEqual([])
    store.addCounterNote()
    expect(store.counter).toEqual(1)
    expect(store.notes.length).toEqual(1)
    expect(store.notes[0].title).toEqual('Counter: 1')
    store.addCounterNote()
    expect(store.counter).toEqual(2)
    expect(store.notes.length).toEqual(2)
    expect(store.notes[0].title).toEqual('Counter: 2')
  })

  it('addLatinNoteAsync should add new note to notes array beginning', async () => {
    const store = new AppStore()

    expect(store.counter).toEqual(0)
    expect(store.notes).toEqual([])
    await store.addLatinNoteAsync()
    expect(store.counter).toEqual(0)
    expect(store.notes.length).toEqual(1)
    await store.addLatinNoteAsync()
    expect(store.notes.length).toEqual(2)

    expect(store.notes[0]).not.toEqual(store.notes[1])
  })
})
