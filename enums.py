# Copyright (c) 2014-present, Facebook, Inc.
# All rights reserved.
#
# This source code is licensed under the BSD-style license found in the
# LICENSE file in the root directory of this source tree. An additional grant
# of patent rights can be found in the PATENTS file in the same directory.

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals
import os

ENUMS = {
    'CSSDirection': [
        'Inherit',
        'LTR',
        'RTL',
    ],
    'CSSFlexDirection': [
        'Column',
        'ColumnReverse',
        'Row',
        'RowReverse',
    ],
    'CSSJustify': [
        'FlexStart',
        'Center',
        'FlexEnd',
        'SpaceBetween',
        'SpaceAround',
    ],
    'CSSOverflow': [
        'Visible',
        'Hidden',
        'Scroll',
    ],
    'CSSAlign': [
        'Auto',
        'FlexStart',
        'Center',
        'FlexEnd',
        'Stretch',
    ],
    'CSSPositionType': [
        'Relative',
        'Absolute',
    ],
    'CSSWrap': [
        'NoWrap',
        'Wrap',
    ],
    'CSSMeasureMode': [
        'Undefined',
        'Exactly',
        'AtMost',
    ],
    'CSSDimension': [
        'Width',
        'Height',
    ],
    'CSSEdge': [
        'Left',
        'Top',
        'Right',
        'Bottom',
        'Start',
        'End',
        'Horizontal',
        'Vertical',
        'All',
    ],
    'CSSLogLevel': [
        'Error',
        'Warn',
        'Info',
        'Debug',
        'Verbose',
    ],
    'CSSExperimentalFeature': [],
    'CSSPrintOptions': [
        ('Layout', 1),
        ('Style', 2),
        ('Children', 4),
    ],
}

LICENSE = """/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

"""

def to_java_upper(symbol):
    symbol = str(symbol)
    out = ''
    for i in range(0, len(symbol)):
        c = symbol[i]
        if str.istitle(c) and i is not 0 and not str.istitle(symbol[i - 1]):
            out += '_'
        out += c.upper()
    return out


root = os.path.dirname(__file__)

# write out C header
with open(root + '/CSSLayout/CSSEnums.h', 'w') as f:
    f.write(LICENSE)
    remaining = len(ENUMS)
    for name, values in ENUMS.items():
        f.write('typedef enum %s {\n' % name)
        for value in values:
            if isinstance(value, tuple):
                f.write('  %s%s = %d,\n' % (name, value[0], value[1]))
            else:
                f.write('  %s%s,\n' % (name, value))
        f.write('  %sCount,\n' % name)
        f.write('} %s;\n' % name)
        if remaining > 1:
            f.write('\n')
        remaining = remaining - 1

# write out java files
for name, values in ENUMS.items():
    with open(root + '/java/com/facebook/csslayout/%s.java' % name, 'w') as f:
        f.write(LICENSE)
        f.write('package com.facebook.csslayout;\n\n')
        f.write('public enum %s {\n' % name)
        if len(values) > 0:
            for value in values:
                if isinstance(value, tuple):
                    f.write('  %s(%d)' % (to_java_upper(value[0]), value[1]))
                else:
                    f.write('  %s(%d)' % (to_java_upper(value), values.index(value)))
                if values.index(value) is len(values) - 1:
                    f.write(';\n')
                else:
                    f.write(',\n')
        else:
            f.write('__EMPTY(-1);')
        f.write('\n')
        f.write('  private int mIntValue;\n')
        f.write('\n')
        f.write('  %s(int intValue) {\n' % name)
        f.write('    mIntValue = intValue;\n')
        f.write('  }\n')
        f.write('\n')
        f.write('  public int intValue() {\n')
        f.write('    return mIntValue;\n')
        f.write('  }\n')
        f.write('\n')
        f.write('  public static %s fromInt(int value) {\n' % name)
        f.write('    switch (value) {\n')
        for value in values:
            if isinstance(value, tuple):
                f.write('      case %d: return %s;\n' % (value[1], to_java_upper(value[0])))
            else:
                f.write('      case %d: return %s;\n' % (values.index(value), to_java_upper(value)))
        f.write('      default: throw new IllegalArgumentException("Unkown enum value: " + value);\n')
        f.write('    }\n')
        f.write('  }\n')
        f.write('}\n')

# write out csharp files
for name, values in ENUMS.items():
    with open(root + '/csharp/Facebook.CSSLayout/%s.cs' % name, 'w') as f:
        f.write(LICENSE)
        f.write('namespace Facebook.CSSLayout\n{\n')
        f.write('    public enum %s\n    {\n' % name)
        for value in values:
            if isinstance(value, tuple):
                f.write('        %s = %d,\n' % (value[0], value[1]))
            else:
                f.write('        %s,\n' % value)
        f.write('    }\n')
        f.write('}\n')
