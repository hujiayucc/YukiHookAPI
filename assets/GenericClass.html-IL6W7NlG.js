import{_ as s,o as a,c as e,a as n}from"./app-L8B23_-x.js";const o={},l=n(`<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The English translation of this page has not been completed, you are welcome to contribute translations to us.</p><p>You can use the <strong>Chrome Translation Plugin</strong> to translate entire pages for reference.</p></div><h1 id="genericclass-class" tabindex="-1"><a class="header-anchor" href="#genericclass-class" aria-hidden="true">#</a> GenericClass <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">GenericClass</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> type: </span><span style="color:#F69D50;">ParameterizedType</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>当前 <code>Class</code> 的泛型父类操作对象。</p></blockquote><h2 id="argument-method" tabindex="-1"><a class="header-anchor" href="#argument-method" aria-hidden="true">#</a> argument <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">argument</span><span style="color:#ADBAC7;">(index: </span><span style="color:#F69D50;">Int</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Class</span><span style="color:#ADBAC7;">&lt;*&gt;?</span></span>
<span class="line"></span></code></pre></div><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">reified</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">&gt; </span><span style="color:#DCBDFB;">argument</span><span style="color:#ADBAC7;">(index: </span><span style="color:#F69D50;">Int</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Class</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">&gt;?</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><code>v1.1.5</code> <code>modified</code></p><p>新增泛型返回值 <code>Class&lt;T&gt;</code> 方法</p><p><code>v1.2.0</code> <code>modified</code></p><p>方法的返回值可为 <code>null</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获得泛型参数数组下标的 <code>Class</code> 实例。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>在运行时局部变量的泛型会被擦除，获取不到时将会返回 <strong>null</strong>。</p></div>`,19),t=[l];function c(p,r){return a(),e("div",null,t)}const i=s(o,[["render",c],["__file","GenericClass.html.vue"]]);export{i as default};