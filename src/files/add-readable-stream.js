'use strict'

const SendFilesStream = require('../utils/send-files-stream')
const FileStreamConverter = require('../utils/file-stream-converter')

module.exports = (send) => {
  return (options) => {
    options = options || {}
    options.converter = FileStreamConverter
    return SendFilesStream(send, 'add')(options)
  }
}
