// next.config.mjs


const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: isProd ? "/referenceMiddle" : "",
    assetPrefix: isProd ? "/referenceMiddle/" : "",
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? "/referenceMiddle" : "",
    },
};

export default nextConfig;
