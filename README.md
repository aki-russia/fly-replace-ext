<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>

> [replace-ext](https://github.com/aki-russia/fly-replace-ext) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](PLUGIN_DOCUMENTATION) to see the available options.

### Install

```a
npm install -D fly-replace-ext
```

### Example

```js
export build = function* () {
  yield this
    .source("src/**/*.coffee")
    .coffee()
    .replaceExtension('.js')
    .target("dist/")
}
```

# License

[MIT][mit] © [Dmitriy Kharchenko][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/aki-russia
[contributors]: https://github.com/aki-russia/fly-replace-ext/graphs/contributors
[releases]:     https://github.com/aki-russia/fly-replace-ext/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-replace-ext
[npm-ver-link]: https://img.shields.io/npm/v/fly-replace-ext.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-replace-ext.svg?style=flat-square
[travis-link]:  https://travis-ci.org/aki-russia/fly-replace-ext
[travis-badge]: http://img.shields.io/travis/aki-russia/fly-replace-ext.svg?style=flat-square
