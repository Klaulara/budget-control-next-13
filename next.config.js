/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "w7.pngwing.com",
            },
            {
                protocol: 'https',
                hostname: "img2.freepng.es",
            },
            {
                protocol: 'https',
                hostname: "url",
            }
        ],
    },
}

module.exports = nextConfig
