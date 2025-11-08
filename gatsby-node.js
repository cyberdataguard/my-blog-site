exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type ContentfulComponentSeo implements Node @dontInfer {
      # تعریف فیلدها را اینجا اضافه کن
      title: String
      description: String
      # ...
    }
  `)
}
exports.createPages = require('./src/gatsby/node/createPages')
