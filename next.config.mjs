import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  headers() {
    return [
      {
        source: '/apple-app-site-association',
        headers: [{ key: 'content-type', value: 'application/json' }],
      },
    ]
  },
}

export default withPayload(nextConfig)
