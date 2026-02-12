/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'thumbs.dreamstime.com',
				pathname: '/**'
			}
			,
			{
				protocol: 'https',
				hostname: 'tse1.mm.bing.net',
				pathname: '/**'
			}
			,
			{
				protocol: 'https',
				hostname: 'visualdesignjourney.com',
				pathname: '/**'
			}
			,
			{
				protocol: 'https',
				hostname: 'media.licdn.com',
				pathname: '/**'
			}
			,
			{
				protocol: 'https',
				hostname: 'tse2.mm.bing.net',
				pathname: '/**'
			}
			,
			{
				protocol: 'https',
				hostname: 'tse3.mm.bing.net',
				pathname: '/**'
			}
			,
			{
				protocol: 'https',
				hostname: 'tse4.mm.bing.net',
				pathname: '/**'
			}
		]
	}
};

export default nextConfig;
