const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // GitHub Pages user sites are hosted at the root of the username.github.io domain,
  // so we do not add a repository subpath or empty asset prefix.
  ...(isProd ? { trailingSlash: true } : {}),
};