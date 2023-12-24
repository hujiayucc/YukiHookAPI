import{_ as o,o as e,c as s,a as n}from"./app-L8B23_-x.js";const a={},p=n(`<h1 id="iyukihookxposedinit-interface" tabindex="-1"><a class="header-anchor" href="#iyukihookxposedinit-interface" aria-hidden="true">#</a> IYukiHookXposedInit <span class="symbol">- interface</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">interface</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">IYukiHookXposedInit</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><code>v1.0.80</code> <code>修改</code> <code>作废</code></p><p>作废了 <s><code>YukiHookXposedInitProxy</code></s> 名称但保留接口</p><p>迁移到 <code>IYukiHookXposedInit</code> 新名称</p><p><strong>功能描述</strong></p><blockquote><p>YukiHookAPI 的 Xposed 装载 API 调用接口。</p></blockquote><h2 id="oninit-method" tabindex="-1"><a class="header-anchor" href="#oninit-method" aria-hidden="true">#</a> onInit <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onInit</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.5</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>配置 <code>YukiHookAPI.Configs</code> 的初始化方法。</p></blockquote><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>在这里只能进行初始化配置，不能进行 Hook 操作。</p></div><p>此方法可选，你也可以选择不对 <a href="../../../YukiHookAPI#configs-object">YukiHookAPI.Configs</a> 进行配置。</p><h2 id="onhook-method" tabindex="-1"><a class="header-anchor" href="#onhook-method" aria-hidden="true">#</a> onHook <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onHook</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>Xposed API 的模块装载调用入口方法。</p></blockquote><h2 id="onxposedevent-method" tabindex="-1"><a class="header-anchor" href="#onxposedevent-method" aria-hidden="true">#</a> onXposedEvent <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onXposedEvent</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.80</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>监听 Xposed 原生装载事件。</p></blockquote><p>若你的 Hook 事件中存在需要兼容的原生 Xposed 功能，可在这里实现。</p><p>请在这里使用 <a href="../bridge/event/YukiXposedEvent">YukiXposedEvent</a> 创建回调事件监听。</p><p>可监听的事件如下：</p><p><code>YukiXposedEvent.onInitZygote</code></p><p><code>YukiXposedEvent.onHandleLoadPackage</code></p><p><code>YukiXposedEvent.onHandleInitPackageResources</code></p><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>此接口仅供监听和实现原生 Xposed API 的功能，请不要在这里操作 <strong>YukiHookAPI</strong>。</p></div><h1 class="deprecated">YukiHookXposedInitProxy - interface</h1><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><code>v1.0.80</code> <code>作废</code></p><p>请迁移到 <code>IYukiHookXposedInit</code></p>`,41),d=[p];function t(c,i){return e(),s("div",null,d)}const r=o(a,[["render",t],["__file","IYukiHookXposedInit.html.vue"]]);export{r as default};
