import{_ as s,o as a,c as n,a as o}from"./app-L8B23_-x.js";const e={},l=o(`<h1 id="作为-xposed-模块使用的相关配置" tabindex="-1"><a class="header-anchor" href="#作为-xposed-模块使用的相关配置" aria-hidden="true">#</a> 作为 Xposed 模块使用的相关配置</h1><blockquote><p>这里介绍了 <code>YukiHookAPI</code> 作为 Xposed 模块使用的相关配置方法。</p></blockquote><h2 id="依赖配置" tabindex="-1"><a class="header-anchor" href="#依赖配置" aria-hidden="true">#</a> 依赖配置</h2><blockquote><p>作为 Xposed 模块，<code>YukiHookAPI</code> 提供了一个自动处理程序。</p></blockquote><p>你需要在你的构建脚本中集成 <code>com.highcapable.yukihookapi:ksp-xposed</code> 依赖的最新版本。</p><h2 id="自定义处理程序" tabindex="-1"><a class="header-anchor" href="#自定义处理程序" aria-hidden="true">#</a> 自定义处理程序</h2><blockquote><p>你可以对 <code>YukiHookAPI</code> 将如何生成 <code>xposed_init</code> 入口进行相关配置。</p></blockquote><h3 id="injectyukihookwithxposed-注解" tabindex="-1"><a class="header-anchor" href="#injectyukihookwithxposed-注解" aria-hidden="true">#</a> InjectYukiHookWithXposed 注解</h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">annotation</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> sourcePath: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> modulePackageName: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> entryClassName: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isUsingXposedModuleStatus: </span><span style="color:#F69D50;">Boolean</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isUsingResourcesHook: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><code>@InjectYukiHookWithXposed</code> 注解是一个标记模块 Hook 入口的重要注解。</p><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p><strong>@InjectYukiHookWithXposed</strong> 注解的 <strong>Class</strong> 必须实现 <strong>IYukiHookXposedInit</strong> 接口。</p><p>在你当前项目中的所有 <strong>Class</strong> 标记中<strong>只能存在一次</strong>，若存在多个声明自动处理程序<u><strong>会在编译时抛出异常</strong></u>，你可以自定义其相关参数。</p></div><h4 id="sourcepath-参数" tabindex="-1"><a class="header-anchor" href="#sourcepath-参数" aria-hidden="true">#</a> sourcePath 参数</h4><p><code>sourcePath</code> 参数决定了自动处理程序自动查找并匹配你当前项目路径的重要标识，此参数的内容为相对路径匹配，默认参数为 <code>src/main</code>。</p><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>如果你的项目不在 <strong>../src/main..</strong> 或你手动使用 <strong>sourceSets</strong> 设置了项目路径，你就需要手动设置 <strong>sourcePath</strong> 参数，否则自动处理程序将无法识别你的项目路径并<u><strong>会在编译时抛出异常</strong></u>。</p></div><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(sourcePath </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;src/custom&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>sourcePath</code> 使用的文件路径分隔符写法根据 <code>Windows</code> 和 <code>Unix</code> 将自动进行识别，使用 <code>/</code> 或 <code>\\</code> 均可。</p><h4 id="modulepackagename-参数" tabindex="-1"><a class="header-anchor" href="#modulepackagename-参数" aria-hidden="true">#</a> modulePackageName 参数</h4><p><code>modulePackageName</code> 是你当前项目的 <code>applicationId</code>，也就是你的模块包名 (最终生成的应用包名)，留空或不填时自动处理程序将对当前项目文件进行分析并生成。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>若你想使用模块包名自动生成，你需要确保你的项目命名空间在 <strong>AndroidManifest.xml</strong>、<strong>build.gradle</strong> 或 <strong>build.gradle.kts</strong> 中存在如下任意定义方式。</p></div><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>在 Android Gradle Plugin <strong>8+</strong> 版本中，你需要手动在项目的 <strong>build.gradle</strong> 或 <strong>build.gradle.kts</strong> 中启用 <strong>buildConfig</strong>。</p><blockquote><p>Groovy DSL</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">android {</span></span>
<span class="line"><span style="color:#ADBAC7;">    buildFeatures {</span></span>
<span class="line"><span style="color:#ADBAC7;">        buildConfig </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">android</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">buildFeatures</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        buildConfig </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>示例命名空间 <code>com.example.demo</code>，以下定义方式任选其一。</p><p>以下定义方式仅供参考，通常情况下<strong>只要你的项目能够正常生成 <code>BuildConfig.java</code> 文件，就不需要做额外操作</strong>。</p><blockquote><p><code>AndroidManifest.xml</code> 示例</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">manifest</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">xmlns:android</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;http://schemas.android.com/apk/res/android&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">package</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>build.gradle</code> 示例</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">android {</span></span>
<span class="line"><span style="color:#ADBAC7;">    namespace </span><span style="color:#96D0FF;">&#39;com.example.demo&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>build.gradle.kts</code> 示例</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">android</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    namespace </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若你的模块包名是非常规手段进行自动生成的，或你认为有必要手动定义模块包名，那么你可以直接设置 <code>modulePackageName</code> 的参数。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(modulePackageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>请不要在 <strong>modulePackageName</strong> 中填写 <strong>BuildConfig.APPLICATION_ID</strong>，这会在编译过程中获取到空字符串，这取决于 Android Gradle Plugin 的行为。</p></div><p>只要你自定义了 <code>modulePackageName</code> 的参数，你就会在编译时收到警告。</p><blockquote><p>示例如下</p></blockquote><div class="language-text" data-ext="text"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#adbac7;">You set the customize module package name to &quot;com.example.demo&quot;, please check for yourself if it is correct</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>手动定义的模块包名除了格式之外，自动处理程序将不会再检查模块包名是否正确，需要你自行确认其有效性。</p></div><h4 id="entryclassname-参数" tabindex="-1"><a class="header-anchor" href="#entryclassname-参数" aria-hidden="true">#</a> entryClassName 参数</h4><p><code>entryClassName</code> 决定了自动处理程序如何生成 <code>xposed_init</code> 中的入口类名，默认会使用你的入口类包名插入 <code>_YukiHookXposedInit</code> 后缀进行生成。</p><p>假设这是你的入口类。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span></span>
<span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IYukiHookXposedInit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Xposed 入口类处理如下。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry_YukiHookXposedInit</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">, IXposedHookLoadPackage, </span><span style="color:#F47067;">..</span><span style="color:#ADBAC7;">.</span></span>
<span class="line"></span></code></pre></div><p>编译后的类名结构如下。</p><blockquote><p>示例如下</p></blockquote><div class="language-text" data-ext="text"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#adbac7;">...hook.HookEntry ← 你的入口类</span></span>
<span class="line"><span style="color:#adbac7;">...hook.HookEntry_Impl ← 自动生成的 Impl 类</span></span>
<span class="line"><span style="color:#adbac7;">...hook.HookEntry_YukiHookXposedInit ← 自动生成的 Xposed 入口类</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><p>我们现在定义入口类名称为 <code>HookXposedEntry</code>。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(entryClassName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;HookXposedEntry&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IYukiHookXposedInit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Xposed 入口类处理如下。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookXposedEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">, IXposedHookLoadPackage, </span><span style="color:#F47067;">..</span><span style="color:#ADBAC7;">.</span></span>
<span class="line"></span></code></pre></div><p>编译后的类名结构如下。</p><blockquote><p>示例如下</p></blockquote><div class="language-text" data-ext="text"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#adbac7;">...hook.HookEntry ← 你的入口类</span></span>
<span class="line"><span style="color:#adbac7;">...hook.HookEntry_Impl ← 自动生成的 Impl 类</span></span>
<span class="line"><span style="color:#adbac7;">...hook.HookXposedEntry ← 自动生成的 Xposed 入口类</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">小提示</p><p>入口类可以使用 <strong>class</strong> 或 <strong>object</strong> 定义，但是建议使用 <strong>object</strong> 定义来保证每一个注入的进程都是单例运行。</p></div><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>你定义的 <strong>entryClassName</strong> 不可与 <strong>xposed_init</strong> 中的类名相同，否则自动处理程序<u><strong>会在编译时抛出异常</strong></u>。</p></div><h4 id="isusingxposedmodulestatus-参数" tabindex="-1"><a class="header-anchor" href="#isusingxposedmodulestatus-参数" aria-hidden="true">#</a> isUsingXposedModuleStatus 参数</h4><p><code>isUsingXposedModuleStatus</code> 决定了自动处理程序是否生成针对 Xposed 模块激活等状态功能的相关代码，此功能默认启用。</p><p>生成后你将可以在模块进程中使用 <code>YukiHookAPI.Status</code> 的相关功能。</p><p>如果你不希望生成相关代码，你可以手动关闭此功能，仅对模块进程生效。</p><h4 id="isusingresourceshook-参数" tabindex="-1"><a class="header-anchor" href="#isusingresourceshook-参数" aria-hidden="true">#</a> isUsingResourcesHook 参数</h4><p><code>isUsingResourcesHook</code> 决定了自动处理程序是否生成针对 Resources Hook 的相关代码，此功能默认不启用。</p><p>默认情况下生成的入口类将为如下所示。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">_YukiHookXposedInit</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">, </span><span style="color:#DCBDFB;">IXposedHookLoadPackage</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">initZygote</span><span style="color:#ADBAC7;">(sparam: </span><span style="color:#F69D50;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">.StartupParam?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">handleLoadPackage</span><span style="color:#ADBAC7;">(lpparam: </span><span style="color:#F69D50;">XC_LoadPackage</span><span style="color:#ADBAC7;">.LoadPackageParam?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><p>若你当前的项目需要用到 Resources Hook，可以设置 <code>isUsingResourcesHook = true</code> 来启用自动生成。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>此功能在 <strong>1.2.0</strong> 版本后将不再默认启用，如需使用请手动启用。</p></div><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(isUsingResourcesHook </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启用后生成的入口类将为如下所示。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">_YukiHookXposedInit</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">, IXposedHookLoadPackage, </span><span style="color:#DCBDFB;">IXposedHookInitPackageResources</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">initZygote</span><span style="color:#ADBAC7;">(sparam: </span><span style="color:#F69D50;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">.StartupParam?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">handleLoadPackage</span><span style="color:#ADBAC7;">(lpparam: </span><span style="color:#F69D50;">XC_LoadPackage</span><span style="color:#ADBAC7;">.LoadPackageParam?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">handleInitPackageResources</span><span style="color:#ADBAC7;">(resparam: </span><span style="color:#F69D50;">XC_InitPackageResources</span><span style="color:#ADBAC7;">.InitPackageResourcesParam?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">小提示</p><p>由于 Xposed 入口类是被 <strong>YukiHookAPI</strong> 动态生成的，它会同时生成如下两个文件。</p><ul><li><p><strong>assets/xposed_init</strong></p></li><li><p><strong>resources/META-INF/yukihookapi_init</strong></p></li></ul><p>如果你正在使用 <strong>Git</strong> 代码控制系统，你可以将这两个文件添加到 <strong>.gitignore</strong> 文件中。</p></div><h3 id="iyukihookxposedinit-接口" tabindex="-1"><a class="header-anchor" href="#iyukihookxposedinit-接口" aria-hidden="true">#</a> IYukiHookXposedInit 接口</h3><p><code>IYukiHookXposedInit</code> 接口为你的 Hook 入口类必须实现的接口，这是你的模块开始 Hook 的起点。</p><div class="custom-container tip"><p class="custom-container-title">小提示</p><p>更多功能请参考 <a href="../api/public/com/highcapable/yukihookapi/hook/xposed/proxy/IYukiHookXposedInit">IYukiHookXposedInit</a>。</p></div><p>当你的模块被 Xposed 装载后，<code>onHook</code> 方法将会被回调，你需要在此方法中开始使用 <code>YukiHookAPI</code>。</p><blockquote><p>基本的调用流程为 <code>_YukiHookXposedInit</code> → <code>IYukiHookXposedInit.onXposedEvent</code> → <code>IYukiHookXposedInit.onInit</code> → <code>IYukiHookXposedInit.onHook</code></p></blockquote><p>详情请参考 <a href="../config/api-example">API 基本配置</a>。</p><h2 id="原生-xposed-api-事件" tabindex="-1"><a class="header-anchor" href="#原生-xposed-api-事件" aria-hidden="true">#</a> 原生 Xposed API 事件</h2><p>若你当前的 Xposed 模块使用了第三方的资源，但是短时间内可能无法转移它们，此时，你可以使用 <code>onXposedEvent</code> 实现监听原生 Xposed API 的全部装载事件。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span></span>
<span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IYukiHookXposedInit</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onHook</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onXposedEvent</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// 监听原生 Xposed API 的装载事件</span></span>
<span class="line"><span style="color:#ADBAC7;">        YukiXposedEvent.</span><span style="color:#DCBDFB;">events</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#DCBDFB;">onInitZygote</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// it 对象即 [StartupParam]</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#DCBDFB;">onHandleLoadPackage</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// it 对象即 [LoadPackageParam]</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#DCBDFB;">onHandleInitPackageResources</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// it 对象即 [InitPackageResourcesParam]</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>onXposedEvent</code> 与 <code>onHook</code> 方法完全独立存在，互不影响，你可以继续在 <code>onHook</code> 方法中使用 <code>YukiHookAPI</code>。</p><div class="custom-container tip"><p class="custom-container-title">小提示</p><p>更多功能请参考 <a href="../api/public/com/highcapable/yukihookapi/hook/xposed/proxy/IYukiHookXposedInit#onxposedevent-method">IYukiHookXposedInit.onXposedEvent</a> 方法。</p></div>`,88),p=[l];function c(t,i){return a(),n("div",null,p)}const d=s(e,[["render",c],["__file","xposed-using.html.vue"]]);export{d as default};
