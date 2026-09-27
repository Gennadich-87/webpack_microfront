import path from "path";
import {buildWeppack} from "./config/build/buildWebpack";
import {BuildMode, BuildPath, BuildPlatform} from "./config/build/types/types";
import webpack from "webpack";


interface  EnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) =>  {

    const paths : BuildPath= {
        output: path.resolve(__dirname, "build"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        public: path.resolve(__dirname, "public"),
        src: path.resolve(__dirname, "src"),
    }

    const config: webpack.Configuration = buildWeppack({
        port: env.port ?? 3000,
        mode: env.mode ?? "development",
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? "desktop"
    });
    return config;
}