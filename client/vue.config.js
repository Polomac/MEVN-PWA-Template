module.exports = {
  outputDir: process.env.NODE_ENV === 'production'
    ? '../server/public/'
    : '/dist'
}