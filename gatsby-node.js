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
    number: current.number,
  }))

  // Create pages for each JSON entry.
  data.forEach(({ title, link, content, accordionContent }) => {
    const slugContainer = accordionContent.content.find(
      item => item.component === "slideLinks"
    )
    const accordionSlugs = slugContainer.data.map(el => el.link.split("#")[1])
    const path = title.slice(0, -1)
    createPage({
      path,
      component: template,
      context: {
        accordionSlugs,
        title,
        link,
        content,
        menuItems,
      },
    })
  })
}
