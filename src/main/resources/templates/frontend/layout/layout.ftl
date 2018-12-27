<#import  "../about.ftl" as about>
<#macro layout pageTitle bodyClass="" containerClass="" showSidebar=false showBanner=false>
<!doctype html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119549991-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-119549991-1');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><#if pageTitle?has_content>${pageTitle} - </#if>${blog.title}</title>
  <link rel="icon" href="${assetPath('favicon.png')}">
  <@assetHelper.stylesheets 'semantic-ui'/>
  <@assetHelper.stylesheets 'highlight-js'/>
  <@assetHelper.stylesheets 'jssocials'/>
  <link rel="stylesheet" href="${assetPath('application.css')}">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
  <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body class="${bodyClass}">
<header class="ui top fixed borderless menu">
  <div class="page-width container">
    <a class="item" href="/"><img src="${assetPath('logo.png')}" alt="LOGO"></a>
    <a class="item ${(request.requestUri == "/")?then("active", "")}" href="/">Home</a>
    <a class="item ${(request.requestUri == "/cv")?then("active", "")}" href="/cv">CV</a>
  </div>
</header>

<main class="page-width page-main ${containerClass} ${showSidebar?then('with-sidebar', '')}">

  <#if showBanner>
    <aside class="page-sidebar ui padded segment" style="margin: 0 1rem 0 1rem; width: 360px;">
      <section>
        <h2 class="ui header">About</h2>
        <div class="ui divider"></div>
          <@about.about></@about.about>
      </section>
    </aside>
  </#if>
    <#nested>
  <#if showSidebar>
    <aside class="page-sidebar ui padded segment">
      <section>
        <h2 class="ui header">Tags</h2>
        <div class="ui divider"></div>
        <div class="tag-cloud">
          <#list tagCloud.items as item>
            <a href="/tags/${item.tag.name?url}" style="font-size: ${item.fontSize}rem;">${item.tag.name}</a>
          </#list>
        </div>
      </section>
    </aside>
  </#if>
</main>

<@assetHelper.javascripts 'jquery'/>
<@assetHelper.javascripts 'semantic-ui'/>
<@assetHelper.javascripts 'highlight-js'/>
<@assetHelper.javascripts 'jssocials'/>
<@assetHelper.javascripts 'showdown'/>
<script src="${assetPath('application.js')}"></script>
</body>
</html>
</#macro>
