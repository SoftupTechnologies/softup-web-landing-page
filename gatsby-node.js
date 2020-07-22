/* eslint-disable */
const path = require("path")
const data = require("./content/page-data.json")

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators

  // Your component that should be rendered for every item in JSON.
  const template = path.resolve(`src/templates/site-template.js`)

  const menuItems = data.map(current => ({
    title: current.title,
    link: current.link,
  }))
  // Create pages for each JSON entry.
  data.forEach(({ title, link, content }) => {
    const path = title.slice(0, -1)
    createPage({
      path,
      component: template,
      context: {
        title,
        link,
        content,
        menuItems,
      },
    })
  })
}
