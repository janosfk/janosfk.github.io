import{_ as a,c as n,o as s,d as e}from"./app.9a5f7b00.js";const b='{"title":"Hello VitePress","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of Contents","slug":"table-of-contents"},{"level":2,"title":"Heading 2","slug":"heading-2"},{"level":3,"title":"Heading 3","slug":"heading-3"},{"level":2,"title":"Basic Text Formatting","slug":"basic-text-formatting"},{"level":2,"title":"Links","slug":"links"},{"level":2,"title":"Ordered List","slug":"ordered-list"},{"level":2,"title":"Unordered List","slug":"unordered-list"},{"level":2,"title":"Code Fences","slug":"code-fences"},{"level":2,"title":"Image","slug":"image"},{"level":2,"title":"Block Quotes","slug":"block-quotes"},{"level":2,"title":"Table","slug":"table"},{"level":2,"title":"Markdown-it Specific Extensions","slug":"markdown-it-specific-extensions"},{"level":3,"title":"Emoji","slug":"emoji"},{"level":3,"title":"Custom Containers","slug":"custom-containers"}],"relativePath":"indexold.md"}',t={},i=e(`<h1 id="hello-vitepress" tabindex="-1">Hello VitePress <a class="header-anchor" href="#hello-vitepress" aria-hidden="true">#</a></h1><p>This is a sample markdown file</p><h2 id="table-of-contents" tabindex="-1">Table of Contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><p><div class="table-of-contents"><ul><li><a href="#table-of-contents">Table of Contents</a></li><li><a href="#heading-2">Heading 2</a><ul><li><a href="#heading-3">Heading 3</a></li></ul></li><li><a href="#basic-text-formatting">Basic Text Formatting</a></li><li><a href="#links">Links</a></li><li><a href="#ordered-list">Ordered List</a></li><li><a href="#unordered-list">Unordered List</a></li><li><a href="#code-fences">Code Fences</a></li><li><a href="#image">Image</a></li><li><a href="#block-quotes">Block Quotes</a></li><li><a href="#table">Table</a></li><li><a href="#markdown-it-specific-extensions">Markdown-it Specific Extensions</a><ul><li><a href="#emoji">Emoji</a></li><li><a href="#custom-containers">Custom Containers</a></li></ul></li></ul></div></p><h2 id="heading-2" tabindex="-1">Heading 2 <a class="header-anchor" href="#heading-2" aria-hidden="true">#</a></h2><h3 id="heading-3" tabindex="-1">Heading 3 <a class="header-anchor" href="#heading-3" aria-hidden="true">#</a></h3><h4 id="heading-4" tabindex="-1">Heading 4 <a class="header-anchor" href="#heading-4" aria-hidden="true">#</a></h4><h2 id="basic-text-formatting" tabindex="-1">Basic Text Formatting <a class="header-anchor" href="#basic-text-formatting" aria-hidden="true">#</a></h2><p><strong>Bold</strong> <em>Italic</em> <s>strikethough</s> <code>Inline Code</code></p><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-hidden="true">#</a></h2><p><a href="https://google.com" target="_blank" rel="noopener noreferrer">https://google.com</a></p><p><a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a></p><h2 id="ordered-list" tabindex="-1">Ordered List <a class="header-anchor" href="#ordered-list" aria-hidden="true">#</a></h2><ol><li>One</li><li>Two</li><li>Three <ol><li>a</li><li>b</li><li>c</li></ol></li><li>Four</li></ol><h2 id="unordered-list" tabindex="-1">Unordered List <a class="header-anchor" href="#unordered-list" aria-hidden="true">#</a></h2><ul><li>One</li><li>Two</li><li>Three <ul><li>Three A</li><li>Three B</li><li>Three C</li></ul></li><li>Four</li></ul><h2 id="code-fences" tabindex="-1">Code Fences <a class="header-anchor" href="#code-fences" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ todo.text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-csharp line-numbers-mode"><pre><code><span class="token comment">// Add services to the container.</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddGrpc</span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span>

<span class="token punctuation">{</span>

    options<span class="token punctuation">.</span>MaxReceiveMessageSize <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>

    options<span class="token punctuation">.</span>MaxSendMessageSize <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddGrpcReflection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IGreeter<span class="token punctuation">,</span> GreeterRepo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> app <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="image" tabindex="-1">Image <a class="header-anchor" href="#image" aria-hidden="true">#</a></h2><p><img src="http://upload.wikimedia.org/wikipedia/en/b/bc/Wiki.png" alt="" title="Wikipedia"></p><h2 id="block-quotes" tabindex="-1">Block Quotes <a class="header-anchor" href="#block-quotes" aria-hidden="true">#</a></h2><blockquote><p>Text block quote Another line</p><blockquote><p>Nested Line</p></blockquote><p>Final line</p></blockquote><h2 id="table" tabindex="-1">Table <a class="header-anchor" href="#table" aria-hidden="true">#</a></h2><table><thead><tr><th>Column 1</th><th>Column 2</th><th>Column 3</th><th style="text-align:center;">Center</th><th style="text-align:right;">Right</th></tr></thead><tbody><tr><td>1</td><td>R1C2</td><td>R1C3</td><td style="text-align:center;">one</td><td style="text-align:right;">$1600</td></tr><tr><td>2</td><td>R2C2</td><td>R2C3</td><td style="text-align:center;">two</td><td style="text-align:right;">$12</td></tr><tr><td>3</td><td>R3C2</td><td>R3C3</td><td style="text-align:center;">three</td><td style="text-align:right;">$147</td></tr></tbody></table><h2 id="markdown-it-specific-extensions" tabindex="-1">Markdown-it Specific Extensions <a class="header-anchor" href="#markdown-it-specific-extensions" aria-hidden="true">#</a></h2><h3 id="emoji" tabindex="-1">Emoji <a class="header-anchor" href="#emoji" aria-hidden="true">#</a></h3><p>\u{1F389} \u{1F4AF} \u{1F986} \u{1F355}</p><p>See <a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noopener noreferrer">Markdown-it</a> for full list of supported emoji</p><h3 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning</p></div><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>This is a dangerous warning</p></div><details class="details custom-block"><p>This is a details block, which does not work in Internet Explorer or old versions of Edge.</p></details>`,36),l=[i];function o(p,r,c,d,u,h){return s(),n("div",null,l)}var m=a(t,[["render",o]]);export{b as __pageData,m as default};
