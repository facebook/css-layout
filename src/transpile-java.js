function __transpileToJavaCommon(code) {
  return code
    .replace(/CSS_UNDEFINED/g, 'CSSConstants.UNDEFINED')
    .replace(/css_flex_direction_t/g, 'CSSFlexDirection')
    .replace(/CSS_FLEX_DIRECTION_/g, 'CSSFlexDirection.')
    .replace(/css_align_t/g, 'CSSAlign')
    .replace(/CSS_ALIGN_/g, 'CSSAlign.')
    .replace(/CSS_POSITION_/g, 'CSSPositionType.')
    .replace(/css_justify_t/g, 'CSSJustify')
    .replace(/CSS_JUSTIFY_/g, 'CSSJustify.')
    .replace(/css_dim_t/g, 'MeasureOutput')
    .replace(/bool/g, 'boolean')
    .replace(/^(\s+)([^\s]+)\s+\+=/gm, '$1$2 = $2 +') // Expand +=
    .replace(/leading\[([^\]]+)\]/g, 'getLeading($1)')
    .replace(/trailing\[([^\]]+)\]/g, 'getTrailing($1)')
    .replace(/pos\[([^\]]+)\]/g, 'getPos($1)')
    .replace(/dim\[([^\]]+)\]/g, 'getDim($1)')

    // Since Java doesn't store its attributes in arrays, we need to use setters/getters to access
    // the appropriate layout/style fields
    .replace(
        /(\w+)\.layout\[((?:getLeading|getPos)\([^\)]+\))\]\s+=\s+([^;]+);/gm,
        'setLayoutPosition($1, $2, $3);')
    .replace(/(\w+)\.layout\[((?:getLeading|getPos)\([^\]]+\))\]/g, 'getLayoutPosition($1, $2)')
    .replace(
        /(\w+)\.layout\[(getDim\([^\)]+\))\]\s+=\s+([^;]+);/gm,
        'setLayoutDimension($1, $2, $3);')
    .replace(/(\w+)\.layout\[(getDim\([^\]]+\))\]/g, 'getLayoutDimension($1, $2)')
    .replace(/(\w+)\.style\[((?:getLeading|getPos)\([^\]]+\))\]/g, 'getStylePosition($1, $2)')
    .replace(/(\w+)\.style\[(getDim\([^\]]+\))\]/g, 'getStyleDimension($1, $2)');
}

function __transpileSingleTestToJava(code) {
  return __transpileToJavaCommon(code)
    .replace(/new_test_css_node/g, 'new CSSNode')
    .replace( // style.dimensions[CSS_WIDTH] => style.width
        /(style|layout)\.dimensions\[CSS_(WIDTH|HEIGHT)\]/g,
        function (str, match1, match2) {
            return match1 + '.' + match2.toLowerCase();
        })
    .replace( // layout.position[CSS_TOP] => layout.y
        /layout\.position\[CSS_(TOP|LEFT)\]/g,
        function (str, match1) {
            return 'layout.' + (match1 == 'TOP' ? 'y' : 'x');
        })
    .replace( // style.position[CSS_TOP] => style.positionTop
        /style\.(position|margin|border|padding)\[CSS_(TOP|BOTTOM|LEFT|RIGHT)\]/g,
        function (str, match1, match2) {
            return 'style.' + match1 + match2[0] + match2.substring(1).toLowerCase();
        })
    .replace(/get_child\(.*context\,\s([^\)]+)\)/g, 'getChildAt($1)')
    .replace(/init_css_node_children/g, 'addChildren')
    .replace(/css_node_t(\s)\*/g, 'CSSNode$1')
    .replace(/\->/g, '.')
    .replace(/(\d+\.\d+)/g, '$1f')
    .replace( // style.flex_direction => style.flexDirection
        /style\.([^_\s]+)_(\w)(\w+)/g,
        function (str, match1, match2, match3) {
            return 'style.' + match1 + match2.toUpperCase() + match3;
        });
}

function transpileLayoutEngineToJava(code) {
  return __transpileToJavaCommon(code)
    .replace('node.style.measure', 'node.measure')
    .replace(/\.children\.length/g, '.getChildCount()')
    .replace(/node.children\[i\]/g, 'node.getChildAt(i)')
    .replace(/fmaxf/g, 'Math.max')
    .replace(/\/\*\([^\/]+\*\/\n/g, '') // remove comments for other languages
    .replace(/var\/\*([^\/]+)\*\//g, '$1')
    .replace(/ === /g, ' == ')
    .replace(/\n  /g, '\n')
    .replace(/\/[*]!([^*]+)[*]\//g, '$1')
    .replace(/css_node_t\*/g, 'CSSNode');
}

function transpileCTestsArrayToJava(allTestsInC) {
  var allTestsInJava = [];
  for (var i = 0; i < allTestsInC.length; i++) {
    allTestsInJava[i] =
        "@Test\n" +
        "public void testCase" + i + "()\n" +
        __transpileSingleTestToJava(allTestsInC[i]);
  }
  return allTestsInJava.join('\n\n');
}