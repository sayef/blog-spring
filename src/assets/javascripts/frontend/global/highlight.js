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

$(function() {
  // override highlight.js default code background color
  $('.hljs').css('background-color', '#456');
});
