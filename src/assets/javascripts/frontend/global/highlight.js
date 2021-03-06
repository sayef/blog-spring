hljs.configure({
  languages: [
    'bash',
    'css',
    'dockerfile',
    'erb',
    'gradle',
    'groovy',
    'http',
    'ini',
    'java',
    'javascript',
    'json',
    'kotlin',
    'livescript',
    'makefile',
    'markdown',
    'nginx',
    'php',
    'python',
    'ruby',
    'scss',
    'shell',
    'sql',
    'typescript',
    'yaml',
  ]
});

hljs.initHighlightingOnLoad();


/*! showdown-table 17-06-2015 */

!function(){"use strict";var a=function(a){var b,c={},d="text-align:left;";return c.th=function(a){if(""===a.trim())return"";var b=a.trim().replace(/ /g,"_").toLowerCase();return'<th id="'+b+'" style="'+d+'">'+a+"</th>"},c.td=function(b){return'<td style="'+d+'">'+a.makeHtml(b)+"</td>"},c.ths=function(){var a="",b=0,d=[].slice.apply(arguments);for(b;b<d.length;b+=1)a+=c.th(d[b])+"\n";return a},c.tds=function(){var a="",b=0,d=[].slice.apply(arguments);for(b;b<d.length;b+=1)a+=c.td(d[b])+"\n";return a},c.thead=function(){var a,b=[].slice.apply(arguments);return a="<thead>\n",a+="<tr>\n",a+=c.ths.apply(this,b),a+="</tr>\n",a+="</thead>\n"},c.tr=function(){var a,b=[].slice.apply(arguments);return a="<tr>\n",a+=c.tds.apply(this,b),a+="</tr>\n"},b=function(a){var b,d,e=0,f=a.split("\n"),g=[];for(e;e<f.length;e+=1){if(b=f[e],b.trim().match(/^[|].*[|]$/)){b=b.trim();var h=[];if(h.push("<table>"),d=b.substring(1,b.length-1).split("|"),h.push(c.thead.apply(this,d)),b=f[++e],b.trim().match(/^[|][-=|: ]+[|]$/)){for(b=f[++e],h.push("<tbody>");b.trim().match(/^[|].*[|]$/);)b=b.trim(),h.push(c.tr.apply(this,b.substring(1,b.length-1).split("|"))),b=f[++e];h.push("</tbody>"),h.push("</table>"),g.push(h.join("\n"));continue}b=f[--e]}g.push(b)}return g.join("\n")},[{type:"lang",filter:b}]};"undefined"!=typeof window&&window.showdown&&window.showdown.extensions&&(window.showdown.extensions.table=a),"undefined"!=typeof module&&(module.exports=a)}();
//# sourceMappingURL=showdown-table.min.js.map

$(function() {
  // override highlight.js default code background color
  //$('.hljs').css('background-color', '#456');

  var converter = new showdown.Converter({extensions: ['table']});
  $( "textarea" ).each(function() {
    var html = converter.makeHtml($(this).val());
    html = html.replace(/\\pipe/g, "|")
    $(this).replaceWith(html);
  });

  $("table").css({
    "font-family": "\"Trebuchet MS\", Arial, Helvetica, sans-serif",
    "border-collapse": "collapse",
    "width": "100%",
    "float" :"center"
  });

  $("table td, .table th").css({
    "border": "1px solid #ddd",
    "padding": "8px",
    "text-align": "center",
  });

  $("table tr:nth-child(even)").css({
    "background-color": "#f2f2f2"
  });

  $("table tr:hover").css({
    "background-color": "#ddd"
  });

  $("table th").css({
    "padding-top": "12px",
    "padding-bottom": "12px",
    "text-align": "center",
    "background-color": "#4CAF50",
    "color": "white"
  });

});
