import devConfig from './default.json';
import prodConfig from './production.json';
import prodServerConfig from './prod-server.json';

const config = {
    ...devConfig,
    ...(process.env.REACT_APP_ENV === 'production' ? prodConfig : {}),
    ...(process.env.REACT_APP_ENV === 'prod-server' ? prodServerConfig : {}),
};

export default function getConfig(key) {
    return key ? config[key] : config;
}