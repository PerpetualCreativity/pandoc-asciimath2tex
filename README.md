# pandoc filter: asciimath -> tex

This [pandoc](https://pandoc.org/) [filter](https://pandoc.org/filters.html) converts [http://asciimath.org/](AsciiMath) to LaTeX (and targets [KaTeX](https://katex.org/)'s feature set specifically). It is a small wrapper around [asciimath2tex](https://github.com/christianp/asciimath2tex).

## installation and usage

Clone the repository:

```sh
git clone https://github.com/PerpetualCreativity/pandoc-asciimath2tex.git
```

Then run pandoc:

```sh
pandoc --filter [path to pandoc-asciimath2tex]/filter.js --standalone --katex [FILENAME]
```

I suggest you alias the above to something that's easier to type. I've aliased this to `pandoc-am`.

If you need to type pure LaTeX, type a `@` immediately after the math wrapper symbols (either `$@...$` or `$$@ ... $$`). This is useful if asciimath is not expressive enough, e.g. for nested matrices.

## issues

Please open an issue if you find a bug *in this filter*.

- If Pandoc changes its filter API, pandoc-filter-node might not work - create an issue there.
- If AsciiMath adds a new shortcut and it is not being converted, it has most likely not been added to asciimath2tex - you should consider creating an issue there.
- An example of when this filter would break is when pandoc-filter-node changes its API.

