var replaceExt = require('replace-ext');
var R = require('ramda');

module.exports = function (){
  this.replaceExtension = function(options){
    this.unwrap().then((files) => {
      return R.map(function(file){
        file.file = replaceExt(file.file, options)
        return file
      }, files)
    })
    return this
  }
}
