const babel = require('babel-core');
var assert = require('power-assert');


var str = `hello === world;`;
var out = `babel === plugin;`;

describe('babel-plugin-hello-wrold', () => {
  it('Nope.', () => {
    var result = babel.transform(str, {
      presets: ['es2015'],
      plugins: ['./lib/index.js']
    });
    // console.log(result.code);
    // console.log(str);
    // console.log(out);
    assert(result.code.match('hello === world;') === null);
    assert(result.code !== out);
  })
})
