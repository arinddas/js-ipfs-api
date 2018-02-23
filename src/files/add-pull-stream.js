'use strict'

const SendFilesStream = require('../utils/send-files-stream')
const FileStreamConverter = require('../utils/file-stream-converter')
const toPull = require('stream-to-pull-stream')

module.exports = (send) => {
 return (options) => {
   options = options || {}
   options.converter = FileStreamConverter
   return toPull(SendFilesStream(send, 'add')(options))
 }
}
