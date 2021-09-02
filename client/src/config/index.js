import config from './default.json';

export default (key) => {
    return key ? config[key] : config
}