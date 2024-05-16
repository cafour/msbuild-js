import * as esbuild from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'

await esbuild.build({
    entryPoints: [
        'mod.ts'
    ],
    bundle: true,
    minify: true,
    format: 'esm',
    outdir: 'obj/client',
    plugins: [sassPlugin()]
})
