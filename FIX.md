In order to use drizzle studio on a WSL machine, this hacky fix may be necessary.

https://github.com/drizzle-team/drizzle-kit-mirror/issues/185#issuecomment-2039170400

1. Open the `node_modules/drizzle-kit/bin.cjs` file.
2. Search for the line `const { key, cert } = await certs() || {};`
3. Replace the line with `const { key, cert } = {};`
