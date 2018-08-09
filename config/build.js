const developmentOverrides = (config) => ({
    globals: {
        ...config.globals
    }
})

const productionOverrides = (config) => ({
    globals: {
        ...config.globals
    }
})

export default {
    development: developmentOverrides,
    production: productionOverrides
}
