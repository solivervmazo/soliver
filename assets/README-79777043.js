import{q as i,o,c as a,v as e}from"./index-08bad59c.js";const n={class:"markdown-body"},r=e(`<h1>✨ vue3-markdown-it demo ✨</h1><blockquote><p>Welcome to the <b>demo</b> Feel free to type anything in the textarea!</p><blockquote><p><em>Psst, enable the <code>html</code> option!</em> 😛</p></blockquote></blockquote><p><a href="https://github.com/JanGuillermo/vue3-markdown-it">https://github.com/JanGuillermo/vue3-markdown-it</a> (<em>Enable the <code>linkify</code> option!~</em>)</p><hr><h2>This is a h2 tag</h2><p>Freaky, right? Oh yeah, have you seen this <s>horrible</s> <strong>amazing</strong> repository <a href="https://github.com/JanGuillermo/vue3-markdown-it">here</a>?!</p><p>So far, it supports the following plugins:</p><ul><li><a href="https://github.com/markdown-it/markdown-it-abbr">markdown-it-abbr</a> - Add abbreviations</li><li><a href="https://github.com/valeriangalliat/markdown-it-anchor">markdown-it-anchor</a> - Add anchors</li><li><a href="https://github.com/markdown-it/markdown-it-deflist">markdown-it-deflist</a> - Add definition lists</li><li><a href="https://github.com/markdown-it/markdown-it-emoji">markdown-it-emoji</a> - Add emojis</li><li><a href="https://github.com/markdown-it/markdown-it-footnote">markdown-it-footnote</a> - Add footnotes</li><li><a href="https://github.com/valeriangalliat/markdown-it-highlightjs">markdown-it-highlightjs</a> - Add highlighting for code blocks</li><li><a href="https://github.com/markdown-it/markdown-it-ins">markdown-it-ins</a> - Add <code>&lt;ins&gt;</code> tags</li><li><a href="https://github.com/markdown-it/markdown-it-mark">markdown-it-mark</a> - Add marking/highlighting</li><li><a href="https://github.com/markdown-it/markdown-it-sub">markdown-it-sub</a> - Add subscript</li><li><a href="https://github.com/markdown-it/markdown-it-sup">markdown-it-sup</a> - Add superscript</li><li><a href="https://github.com/revin/markdown-it-task-lists">markdown-it-task-lists</a> - Add task lists</li><li><a href="https://github.com/nagaozen/markdown-it-toc-done-right">markdown-it-toc-done-right</a> - Add table of contents</li></ul><h3>This is a h3 tag</h3><h4>This is a h^4^ tag.</h4><p>Enable the <code>typographer</code> option to see the magic.</p><p>© © ® ® ™ ™ (p) (P) ±</p><hr><h2>Basic stuff</h2><h2>Lists</h2><p>Sometimes you want numbered lists:</p><ol><li>One</li><li>Two</li><li>Three</li></ol><p>Sometimes you want bullet points:</p><ul><li>Start a line with a star</li><li>Profit!</li></ul><p>Alternatively,</p><ul><li>Dashes work just as well</li><li>And if you have sub points, put two spaces before the dash or star: <ul><li>Like this</li><li>And this</li></ul></li></ul><h2>Blockquotes</h2><p>As Abraham Lincoln once said:</p><blockquote><p>vue3-markdown-it is pretty amazing!</p></blockquote><h2>Tables</h2><table><thead><tr><th>First Header</th><th>Second Header</th></tr></thead><tbody><tr><td>Content from cell 1</td><td>Content from cell 2</td></tr><tr><td>Content in the first column</td><td>Content in the second column</td></tr></tbody></table><hr><h1>Anyway, guess what?!</h1><p><img src="https://cdn.frankerfacez.com/emoticon/305343/4" alt="pog"></p><p>We support plugging in external <code>markdown-it</code> plugins! <a href="https://github.com/tylingsoft/markdown-it-icons">markdown-it-icons</a> was added as an external plugin. Let’s test it out!</p><p>A :fa-car: runs!</p><h1>Ok, plugin showcase time!</h1><h2><a href="https://github.com/markdown-it/markdown-it-abbr">markdown-it-abbr</a></h2><p>*[HTML]: Hyper Text Markup Language<br> *[W3C]: World Wide Web Consortium<br> The HTML specification<br> is maintained by the W3C.</p><h2><a href="https://github.com/valeriangalliat/markdown-it-anchor">markdown-it-anchor</a></h2><p>Hard to display this, but if you view the source, you can see that all headings have an id generated from this plugin!</p><h2><a href="https://github.com/markdown-it/markdown-it-deflist">markdown-it-deflist</a></h2><p>First Term<br> : This is the definition of the first term.</p><p>Second Term<br> : This is one definition of the second term.<br> : This is another definition of the second term.</p><h2><a href="https://github.com/markdown-it/markdown-it-emoji">markdown-it-emoji</a></h2><p>😮 😃 ✨ 😎</p><h2><a href="https://github.com/markdown-it/markdown-it-footnote">markdown-it-footnote</a></h2><p>Here is a footnote reference,[^1] and another.[^longnote]</p><h2><a href="https://github.com/valeriangalliat/markdown-it-highlightjs">markdown-it-highlightjs</a></h2><pre class="hljs"><code><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Hello World! This is Python.&quot;</span>)
</code></pre><pre class="hljs"><code><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;Hello World! This is JavaScript.&quot;</span>);
</code></pre><h2><a href="https://github.com/markdown-it/markdown-it-ins">markdown-it-ins</a></h2><p>++this is inserted++</p><h2><a href="https://github.com/markdown-it/markdown-it-mark">markdown-it-mark</a></h2><p>==Oh hi, Mark.==</p><h2><a href="https://github.com/markdown-it/markdown-it-sub">markdown-it-sub</a></h2><p>C~7~H~14~O~2~</p><h2><a href="https://github.com/markdown-it/markdown-it-sup">markdown-it-sup</a></h2><p>Friday the 13^th^</p><h2><a href="https://github.com/revin/markdown-it-task-lists">markdown-it-task-lists</a></h2><ul><li>[ ] Homework</li><li>[x] Procrastinating</li></ul><h2><a href="https://github.com/nagaozen/markdown-it-toc-done-right">markdown-it-toc-done-right</a></h2><p>[toc]</p><p>[^1]: Here is the footnote.</p><p>[^longnote]: Here’s one with multiple blocks.</p><pre><code>Subsequent paragraphs are indented to show that they
</code></pre><p>belong to the previous footnote.</p>`,62),h=[r],u=[],k={__name:"README",setup(s,{expose:t}){return t({frontmatter:{meta:[]}}),i({meta:[]}),(m,p)=>(o(),a("div",n,h))}};export{k as default,u as meta};