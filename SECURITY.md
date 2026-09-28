# Security maintenance

This is a public, static marketing website. It has no customer database or
customer login. Completed quotes belong in private storage, never in Git,
`public/`, or an unprotected deployment.

## Dependencies and deployments

- Dependabot proposes weekly npm updates; Next.js and its ESLint configuration
  are grouped, as are React and React DOM. Review and test updates before merging.
- Enable Dependabot alerts and security updates in GitHub's repository security
  settings. The configuration file alone does not enable those account settings.
- Before publishing, run `npm ci`, `npm audit`, `npm run lint`, and `npm run build`.
- Check the homepage, images, YouTube player, contact links, sitemap and robots.
- Ensure `/devis` returns 404. Quotes are now edited in a standalone offline file.
- Protect preview and historical deployment URLs in Vercel. The public production
  domain must remain public for customers and search engines.

## Browser policy

`next.config.ts` restricts resource origins and prohibits framing, plugins,
inline event handlers, base URL changes, and form submissions. YouTube is the
only allowed external frame provider. Vercel supplies HTTPS and HSTS.

Static Next.js hydration still requires `script-src 'unsafe-inline'`. This is
not a full defence against inline-script injection. Do not add untrusted HTML
or user-generated content without revisiting this policy and rendering model.
Production does not allow `unsafe-eval`. Development allows it for debugging.

## Accounts and secrets

- Protect GitHub, Vercel, the domain registrar and the recovery mailbox with
  MFA/passkeys. Store recovery codes separately and review connected apps.
- Keep API tokens and completed quotes out of this public repository.
- If a secret is exposed, revoke or rotate it; deleting a file is insufficient.
- Check domain renewal, registrar transfer lock and Vercel usage alerts.

## Recovery

Keep an independent local backup of source and assets. If a release fails,
revert its commit on GitHub and let Vercel deploy the revert. Do not roll back
to an older vulnerable dependency version without an explicit risk review.
