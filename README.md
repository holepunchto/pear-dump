# pear-dump

> Synchronize files from link to dir peer-to-peer or from-disk

## Usage

```js
import dump from 'pear-dump'
```

```js
function status (info) { console.log(info) }
const link = 'pear://....'
const stream = dump(link, opts)
stream.on('data', status)
```

## License

Apache-2.0