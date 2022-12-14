import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import vue from 'rollup-plugin-vue';
import json from '@rollup/plugin-json';

import packageJson from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            format: 'cjs',
            file: packageJson.main,
            sourcemap: true,
        },
        {
            format: 'esm',
            file: packageJson.module,
            sourcemap: true,
        },
    ],
    external: [
        '@consts/const',
        '@config/config_js.json',
        '@config/localization',
        'vue2-dropzone/dist/vue2Dropzone.min.css'
        // 'quill/dist/quill.core.css',
        // 'quill/dist/quill.snow.css',
        // 'quill/dist/quill.bubble.css'
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        vue(),
        json()
    ],
};
