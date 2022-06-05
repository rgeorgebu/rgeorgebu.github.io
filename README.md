# rgeorgebu.github.io

A repository for my personal website. Visit at: [rgeorgebu.github.io](https://rgeorgebu.github.io)

## Requirements

- [Deno](https://deno.land)

## Development

The repo is split into two sections: the rendering/output engine and the static
site content. The rendering engine is named `dreyfus` for Deno, React, and Fully Static
(as it describes the technology and design philosophy of the codebase). The site
content is derived from a set of react components, assets, and a site-map. Components
must be explicitly listed in the site map to be rendered as a page. Assets are copied
over verbatim to the ouput directory. `dreyfus` will accept a site-map object
and then perform a two step process of rendering the component to static HTML5
and then saving the text content to an appropriate file in the output directory.

### Run Locally

After cloning the repoistory locally:

```bash
deno task start
```

This will start a watched build and webserver accessible at: http://localhost:4507

### Build

```bash
deno task build
```

### Publish

Any push to master will trigger a GitHub action workflow that will setup
Deno on a shared runner, build, and then publish the output to the [`gh-pages`](https://github.com/rgeorgebu/rgeorgebu.github.io/tree/gh-pages) branch.
