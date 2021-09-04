import devConfig from './default.json';
import prodConfig from './production.json';

const config = {
    ...devConfig,
    ...(process.env.NODE_ENV === 'production' ? prodConfig : {})
};

export default function getConfig(key) {
    return key ? config[key] : config;
}