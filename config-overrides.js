const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@containers': 'src/containers',
        '@constants': 'src/constants',
        '@hoc': 'src/hoc',
        '@services': 'src/services',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
    })(config)
    return config;
}