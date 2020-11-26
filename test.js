const tape = require('tape')
const BigSparseArray = require('./')

tape('basic', function (t) {
  const b = new BigSparseArray()

  b.set(42, true)
  t.same(b.get(42), true)

  b.set(42, 42)
  t.same(b.get(42), 42)

  b.set(42424242424242, 'big')
  t.same(b.get(42424242424242), 'big')
  t.same(b.get(42424242424243), undefined)
  t.same(b.get(42), 42)

  t.end()
})

tape('grow', function (t) {
  const b = new BigSparseArray()

  for (let i = 0; i < 10000; i++) {
    b.set(i, i)
  }

  let missing = 10000

  for (let i = 0; i < 10000; i++) {
    if (b.get(i) === i) missing--
  }

  t.same(missing, 0)
  t.end()
})
