var IS_DEV_MODE = ((process.env.MODE || process.env.NEXT_PUBLIC_MODE) === 'development');

module.exports = {
    reactStrictMode: true,
    assetPrefix: IS_DEV_MODE ? process.env.NEXT_DOMAIN : undefined,
}
