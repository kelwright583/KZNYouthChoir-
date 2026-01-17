# Fix for @kzn-youth-choir/db Module Resolution

## Issue
Next.js couldn't resolve `@kzn-youth-choir/db` package.

## Solution Applied

1. **Updated `packages/db/package.json`:**
   - Changed `main` from `./dist/index.js` to `./src/index.ts`
   - Changed `types` from `./dist/index.d.ts` to `./src/index.ts`
   - Added `exports` field pointing to source files
   - This allows Next.js to transpile TypeScript directly (since it's in `transpilePackages`)

2. **Fixed `packages/db/tsconfig.json`:**
   - Excluded `prisma` folder from TypeScript compilation (it's not needed for the build)

3. **Next.js Configuration:**
   - Already has `transpilePackages: ['@kzn-youth-choir/db']` in `next.config.js`
   - This tells Next.js to transpile the package's TypeScript files

## Next Steps

**Restart the dev server** to pick up the package.json changes:

1. Stop the current dev server (Ctrl+C)
2. Run `pnpm dev` again

The package should now resolve correctly.

## Why This Works

- Next.js can transpile TypeScript packages directly
- By pointing to source files, we avoid needing a separate build step
- The `transpilePackages` config tells Next.js to handle the TypeScript compilation
- Prisma Client is generated separately and doesn't need to be in the build output





