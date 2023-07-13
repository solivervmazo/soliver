import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Markdown from 'vite-plugin-vue-markdown'
import code from '@yankeeinlondon/code-builder'
import markdownitEmoji from 'markdown-it-emoji';
import md from 'markdown-it'
import hljs from 'highlight.js'


// https://vitejs.dev/config/
export default defineConfig({
  base: "/soliver/",
  // base: "",
  resolve: {
    alias: {
      '~@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/] 
    }),
    Markdown({
      headEnabled: true,
      markdownItOptions: {
        breaks: true,
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return '<pre class="hljs"><code>' +
                     hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                     '</code></pre>';
            } catch (__) {}
          }
          return '';
        },

      },
      builders: [code()],
      markdownItSetup(md) {
        md.use(markdownitEmoji)
      }
    }),
  ],
})
