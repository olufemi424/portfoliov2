import type { Configuration } from 'webpack';
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [],
  },
  assetPrefix: '/', // Fixed asset prefix
  basePath: '', // Keep this empty for root path
  webpack(config: Configuration) {
    if (!config.module) {
      config.module = {
        rules: []
      };
    }
    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/[path][name][ext]'
      }
    });
    return config;
  }
};

export default nextConfig;
