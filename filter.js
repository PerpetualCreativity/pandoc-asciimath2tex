#!/usr/bin/env node
"use strict";

import pandoc from 'pandoc-filter';
import AsciiMathParser from 'asciimath2tex';

const parser = new AsciiMathParser()

function action({ t: type, c: value }, _format, _meta) {
    if (type==='Math' && value.length==2) {
        return pandoc.Formula(
            value[0],
            parser.parse(value[1])
        )
    }
}

pandoc.stdio(action);
