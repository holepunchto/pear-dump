'use strict'
const ref = require('pear-ref')
module.exports = function dump (link, opts) {
  const ipc = global.Pear?.[global.Pear?.constructor.IPC]
  if (!ipc) throw new Error('pear-dump is designed for Pear - IPC missing')
  ref.ref()
  const stream = ipc.dump({ ...opts, link })
  stream.on('close', () => ref.unref())
  return stream
}
