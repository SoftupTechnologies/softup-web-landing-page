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
    const pagePath = title.slice(0, -1)
    createPage({
      path: pagePath,
      component: template,
      context: {
        showTitleInBody: true,
        accordionSlugs,
        title,
        link,
        content,
        menuItems,
      },
    })
  })

  const portfolioContent = data.find(item => item.title === "portfolio.")
  const portfolioItems = portfolioContent.content.find(
    item => item.component === "presentationTiles"
  )
  const portfolioPages = portfolioItems.data
  portfolioPages.forEach(({ title, link, content }) => {
    createPage({
      path: link,
      component: template,
      context: {
        showTitleInBody: false,
        title,
        menuItems,
      },
    })
  })
}
