const path = require('path')
const fs = require('fs-extra')
const { html } = require('htm/preact')
const renderToString = require('preact-render-to-string')

const ROOT_DIR = path.resolve(__dirname, '../')
const STATIC_DIR = path.resolve(ROOT_DIR, 'static/')
const SRC_DIR = path.resolve(ROOT_DIR, 'src/')
const OUTPUT_DIR = path.resolve(ROOT_DIR, 'public/')

main()

async function main() {
  process.stdout.write('\033c')

  await fs.emptyDir(OUTPUT_DIR)

  await fs.copy(STATIC_DIR, OUTPUT_DIR)

  const routes = {
    index: false,
    about: false,
    tools: false,
    cheatsheets: false,
    awesomes: false,
    blog: {
      'what-and-why-automated-testing': false,
      series: {
        testing: false,
      }
    }
  }

  console.log('Building routes...')
  await buildRoutes('/', routes)
  console.log('done')
}

async function buildRoutes(basePath, routes) {
  for (let [ name, currentRoutes ] of Object.entries(routes)) {
    const routePath = basePath + '/' + name

    const depth = basePath.split('/').length - 1

    if (currentRoutes) {
      console.log(`${'  '.repeat(depth)}📂 ${name}/`)
      await buildRoutes(routePath, currentRoutes)
    } else {
      const component = require(path.join(SRC_DIR, routePath)).Renderable
      try {
        await buildRoute(routePath, component)
        console.log(`${'  '.repeat(depth)}✔️ ${name}`)
      } catch (err) {
        console.log(`${'  '.repeat(depth)}❌ ${name}`)
        console.log(`${err}`)
      }
    }
  }
}

async function buildRoute(routePath, PageComponent) {
  const filePath = path.join(OUTPUT_DIR, routePath + '.html')
  const content = renderToString(html`<${PageComponent} />`)
  await fs.outputFile(filePath, '<!DOCTYPE html>' + content)
}
