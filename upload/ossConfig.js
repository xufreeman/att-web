module.exports = Object.freeze({
  development: {//测试
    'region': 'oss-cn-hangzhou',
    'accessKeyId': 'LTAI4G7n8rgf89BYmbTbfXqm',
    'accessKeySecret': 'KkjSLtxCH2nF5tk3S94rLgbXYypmCH',
    'localPath': './dist/**',
    'bucket': '',
    'ossPath': '/',
    'callbackUrl': 'http://nodejs.org/dist/index.json'
  },
  production: {//正式
    'region': 'oss-cn-hangzhou',
    'accessKeyId': 'LTAI4G5wYGUHTkgWREeoSrU1',
    'accessKeySecret': 'doWmLj6v8IPnTNKY2W5J1MraE7e2Xh',
    'localPath': './dist/**',
    'bucket': '',
    'ossPath': '/',
    'callbackUrl': 'http://nodejs.org/dist/index.json'
  }
})
