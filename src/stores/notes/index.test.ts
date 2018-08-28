import NotesStore from './index'

describe('NotesStore', () => {
  it('addCounterNote should add new note to notes array beginning', () => {
    const store = new NotesStore()

    expect(store.counter).toEqual(0)
    // expect(store.notes).toEqual([]) // Skip until https://github.com/facebook/jest/issues/6392 is resolved
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
    const store = new NotesStore()

    expect(store.counter).toEqual(0)
    // expect(store.notes).toEqual([]) // Skip until https://github.com/facebook/jest/issues/6392 is resolved
    await store.addLatinNoteAsync()
    expect(store.counter).toEqual(0)
    expect(store.notes.length).toEqual(1)
    await store.addLatinNoteAsync()
    expect(store.notes.length).toEqual(2)
  })
})
