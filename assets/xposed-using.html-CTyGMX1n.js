import{_ as s,o as e,c as a,a as n}from"./app-L8B23_-x.js";const o={},l=n(`<h1 id="use-as-xposed-module-configs" tabindex="-1"><a class="header-anchor" href="#use-as-xposed-module-configs" aria-hidden="true">#</a> Use as Xposed Module Configs</h1><blockquote><p>Here are the related configuration methods used by <code>YukiHookAPI</code> as an Xposed Module.</p></blockquote><h2 id="dependency-configs" tabindex="-1"><a class="header-anchor" href="#dependency-configs" aria-hidden="true">#</a> Dependency Configs</h2><blockquote><p>As an Xposed Module, <code>YukiHookAPI</code> provides an automatic builder.</p></blockquote><p>You need to integrate the latest version of the <code>com.highcapable.yukihookapi:ksp-xposed</code> dependency in your build script.</p><h2 id="custom-automatic-builder" tabindex="-1"><a class="header-anchor" href="#custom-automatic-builder" aria-hidden="true">#</a> Custom Automatic Builder</h2><blockquote><p>You can configure how <code>YukiHookAPI</code> will generate the <code>xposed_init</code> entry point.</p></blockquote><h3 id="injectyukihookwithxposed-annotation" tabindex="-1"><a class="header-anchor" href="#injectyukihookwithxposed-annotation" aria-hidden="true">#</a> InjectYukiHookWithXposed Annotation</h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">annotation</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> sourcePath: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> modulePackageName: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> entryClassName: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isUsingXposedModuleStatus: </span><span style="color:#F69D50;">Boolean</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isUsingResourcesHook: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p>The <code>@InjectYukiHookWithXposed</code> annotation is an important annotation to mark the entry point of a Module App&#39;s Hook.</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>The <strong>Class</strong> of the <strong>@InjectYukiHookWithXposed</strong> annotation must implements <strong>IYukiHookXposedInit</strong> interface.</p><p>All <strong>Class</strong> tags in your current project can <strong>only exist once</strong>, if there are multiple declaration automatic builder <u><strong>will throw an exception at compile time</strong></u>, you can customize its related parameters.</p></div><h4 id="sourcepath-parameter" tabindex="-1"><a class="header-anchor" href="#sourcepath-parameter" aria-hidden="true">#</a> sourcePath Parameter</h4><p>The <code>sourcePath</code> parameter determines the important identifier for the automatic builder to automatically find and match your current project path.</p><p>The content of this parameter is a relative path match, and the default parameter is <code>src/main</code>.</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>If your project is not in <strong>../src/main..</strong> or you set the project path manually using <strong>sourceSets</strong>, you need to set the <strong>sourcePath</strong> parameter manually, otherwise the automatic builder will not recognize your project path and <u><strong>will throw an exception at compile time</strong></u>.</p></div><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(sourcePath </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;src/custom&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The file path separator used by <code>sourcePath</code> will be automatically recognized according to <code>Windows</code> and <code>Unix</code>, either <code>/</code> or <code>\\</code> can be used.</p><h4 id="modulepackagename-parameter" tabindex="-1"><a class="header-anchor" href="#modulepackagename-parameter" aria-hidden="true">#</a> modulePackageName Parameter</h4><p><code>modulePackageName</code> is the <code>applicationId</code> of your current project, which is your module package name (the final generated application package name).</p><p>If left blank or not filled, the automatic builder will analyze and generate the current project file.</p><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>If you want to use the module package name to be automatically generated, you need to ensure that your project namespace has any of the following definitions in <strong>AndroidManifest.xml</strong>, <strong>build.gradle</strong> or <strong>build.gradle.kts</strong>.</p></div><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>In Android Gradle Plugin <strong>8+</strong> versions, you need to manually enable <strong>buildConfig</strong> in the project&#39;s <strong>build.gradle</strong> or <strong>build.gradle.kts</strong>.</p><blockquote><p>Groovy DSL</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">android {</span></span>
<span class="line"><span style="color:#ADBAC7;">    buildFeatures {</span></span>
<span class="line"><span style="color:#ADBAC7;">        buildConfig </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">android</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">buildFeatures</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        buildConfig </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>Example namespace <code>com.example.demo</code>, any one of the following definitions.</p><p>The following definitions are for reference only, usually <strong>as long as your project can generate the <code>BuildConfig.java</code> file normally, no additional operations are required</strong>.</p><blockquote><p><code>AndroidManifest.xml</code> example</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">manifest</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">xmlns:android</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;http://schemas.android.com/apk/res/android&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">package</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>build.gradle</code> example</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">android {</span></span>
<span class="line"><span style="color:#ADBAC7;">    namespace </span><span style="color:#96D0FF;">&#39;com.example.demo&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>build.gradle.kts</code> example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">android</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    namespace </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If your module package name is automatically generated by unconventional means, or you think it is necessary to manually define the module package name, then you can directly set the <code>modulePackageName</code> parameter.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(modulePackageName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>Please do not fill in <strong>BuildConfig.APPLICATION_ID</strong> in <strong>modulePackageName</strong>, this will get an empty string during compilation, depending on the behavior of the Android Gradle Plugin.</p></div><p>As long as you customize the <code>modulePackageName</code> parameter, you will get a warning at compile time.</p><blockquote><p>The following example</p></blockquote><div class="language-text" data-ext="text"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#adbac7;">You set the customize module package name to &quot;com.example.demo&quot;, please check for yourself if it is correct</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>In addition to the format of the manually defined module package name, the automatic builder will no longer check whether the module package name is correct, and you need to confirm its validity by yourself.</p></div><h4 id="entryclassname-parameter" tabindex="-1"><a class="header-anchor" href="#entryclassname-parameter" aria-hidden="true">#</a> entryClassName Parameter</h4><p><code>entryClassName</code> determines how the automatic builder generates the entry class name in <code>xposed_init</code>.</p><p>By default, it will use your entry class package name to insert the <code>_YukiHookXposedInit</code> suffix for generation.</p><p>Suppose this is your entry class.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span></span>
<span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IYukiHookXposedInit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The Xposed entry class is handled as follows.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry_YukiHookXposedInit</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">, IXposedHookLoadPackage, </span><span style="color:#F47067;">..</span><span style="color:#ADBAC7;">.</span></span>
<span class="line"></span></code></pre></div><p>The compiled class name structure is as follows.</p><blockquote><p>The following example</p></blockquote><div class="language-text" data-ext="text"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#adbac7;">...hook.HookEntry ← Your entry class</span></span>
<span class="line"><span style="color:#adbac7;">...hook.HookEntry_Impl ← Auto-generated Impl class</span></span>
<span class="line"><span style="color:#adbac7;">...hook.HookEntry_YukiHookXposedInit ← Automatically generated Xposed entry class</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><p>We now define the entry class name as <code>HookXposedEntry</code>.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(entryClassName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;HookXposedEntry&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IYukiHookXposedInit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The Xposed entry class is handled as follows.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookXposedEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">, IXposedHookLoadPackage, </span><span style="color:#F47067;">..</span><span style="color:#ADBAC7;">.</span></span>
<span class="line"></span></code></pre></div><p>The compiled class name structure is as follows.</p><blockquote><p>The following example</p></blockquote><div class="language-text" data-ext="text"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#adbac7;">...hook.HookEntry ← Your entry class</span></span>
<span class="line"><span style="color:#adbac7;">...hook.HookEntry_Impl ← Auto-generated Impl class</span></span>
<span class="line"><span style="color:#adbac7;">...hook.HookXposedEntry ← Automatically generated Xposed entry class</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>The entry class can be defined using <strong>class</strong> or <strong>object</strong>, but it is recommended to use <strong>object</strong> definition to ensure that each injected process is a single instance.</p></div><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>The <strong>entryClassName</strong> you define must not be the same as the class name in <strong>xposed_init</strong>, otherwise the automatic builder <u><strong>throws an exception at compile time</strong></u>.</p></div><h4 id="isusingxposedmodulestatus-parameter" tabindex="-1"><a class="header-anchor" href="#isusingxposedmodulestatus-parameter" aria-hidden="true">#</a> isUsingXposedModuleStatus Parameter</h4><p><code>isUsingXposedModuleStatus</code> determines whether the automatic builder generates relevant code for status functions such as Xposed Module activation, this feature is enabled by default.</p><p>After generation, you will be able to use the related functions of <code>YukiHookAPI.Status</code> in the Module App&#39;s process.</p><p>If you do not want to generate related code, you can manually turn off this feature, which will only take effect for the Module App&#39;s process.</p><h4 id="isusingresourceshook-parameter" tabindex="-1"><a class="header-anchor" href="#isusingresourceshook-parameter" aria-hidden="true">#</a> isUsingResourcesHook Parameter</h4><p><code>isUsingResourcesHook</code> determines whether the automatic builder generates relevant code for the Resources Hook, this feature is not enabled by default.</p><p>By default the generated entry class will look like this.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">_YukiHookXposedInit</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">, </span><span style="color:#DCBDFB;">IXposedHookLoadPackage</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">initZygote</span><span style="color:#ADBAC7;">(sparam: </span><span style="color:#F69D50;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">.StartupParam?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">handleLoadPackage</span><span style="color:#ADBAC7;">(lpparam: </span><span style="color:#F69D50;">XC_LoadPackage</span><span style="color:#ADBAC7;">.LoadPackageParam?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><p>If your current project need to use Resources Hook, you can set <code>isUsingResourcesHook = true</code> to enable automatic generation.</p><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>This feature will no longer be enabled by default after version <strong>1.2.0</strong>, please enable it manually if you want to use it.</p></div><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(isUsingResourcesHook </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The resulting entry class after enabled will look like the following.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">_YukiHookXposedInit</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">, IXposedHookLoadPackage, </span><span style="color:#DCBDFB;">IXposedHookInitPackageResources</span><span style="color:#ADBAC7;"> {</span></span>
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
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Since the Xposed entry class is dynamically generated by <strong>YukiHookAPI</strong>, it will generate the following two files at the same time.</p><ul><li><p><strong>assets/xposed_init</strong></p></li><li><p><strong>resources/META-INF/yukihookapi_init</strong></p></li></ul><p>If you are using <strong>Git</strong> code control system, you can add these two files to <strong>.gitignore</strong> file.</p></div><h3 id="iyukihookxposedinit-interface" tabindex="-1"><a class="header-anchor" href="#iyukihookxposedinit-interface" aria-hidden="true">#</a> IYukiHookXposedInit Interface</h3><p>The <code>IYukiHookXposedInit</code> interface that your Hook entry class must implements it, which is the entry point for your Module App to start hooking.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>For more functions, please refer to <a href="../api/public/com/highcapable/yukihookapi/hook/xposed/proxy/IYukiHookXposedInit">IYukiHookXposedInit</a>.</p></div><p>When your Module App is loaded by Xposed, the <code>onHook</code> method will be called back, you need to start using <code>YukiHookAPI</code> in this method.</p><blockquote><p>The basic calling process is <code>_YukiHookXposedInit</code> → <code>IYukiHookXposedInit.onXposedEvent</code> → <code>IYukiHookXposedInit.onInit</code> → <code>IYukiHookXposedInit.onHook</code></p></blockquote><p>For details, please refer to <a href="../config/api-example">API Basic Configs</a>.</p><h2 id="native-xposed-api-events" tabindex="-1"><a class="header-anchor" href="#native-xposed-api-events" aria-hidden="true">#</a> Native Xposed API Events</h2><p>If your current Xposed Module uses third-party resources, but may not be able to transfer them in a short time, you can use <code>onXposedEvent</code> to monitor all loading events of the native Xposed API.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F69D50;">@InjectYukiHookWithXposed</span></span>
<span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IYukiHookXposedInit</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onHook</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onXposedEvent</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Listen to the loading events of the native Xposed API</span></span>
<span class="line"><span style="color:#ADBAC7;">        YukiXposedEvent.</span><span style="color:#DCBDFB;">events</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#DCBDFB;">onInitZygote</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// The it object is [StartupParam]</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#DCBDFB;">onHandleLoadPackage</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// The it object is [LoadPackageParam]</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#DCBDFB;">onHandleInitPackageResources</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// The it object is [InitPackageResourcesParam]</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>onXposedEvent</code> and <code>onHook</code> methods exist completely independently and do not affect each other. You can continue to use <code>YukiHookAPI</code> in the <code>onHook</code> method.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>For more functions, please refer to the <a href="../api/public/com/highcapable/yukihookapi/hook/xposed/proxy/IYukiHookXposedInit#onxposedevent-method">IYukiHookXposedInit.onXposedEvent</a> method.</p></div>`,91),t=[l];function p(i,c){return e(),a("div",null,t)}const d=s(o,[["render",p],["__file","xposed-using.html.vue"]]);export{d as default};
