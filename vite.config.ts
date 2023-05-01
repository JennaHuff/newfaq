import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const config2 = ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [react(), tsconfigPaths()],
        define: {
            __APP_ENV__: env.APP_ENV,
            "process.env": process.env,
        },
    };
};

// https://vitejs.dev/config/
export default defineConfig(config2);
