import config from './default.json';


export default function getConfig(key) {
    return key ? config[key] : config;
}