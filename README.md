# Sneaky SPA

The Sneaky Dashboard is a single-page application (SPA) that allows users to view their holdings in the Sneakyverse.

## Prerequisites

- Node.js (LTS version recommended)
- npm

## Installation

Install all dependencies by running:

```bash
npm i
```

## Available Commands

### Development Server

Start the development server:

```bash
npm start
```

### Code Generation

Generate Graz and GraphQL code:

```bash
npm codegen
```

## Configuration

The application configuration is managed in `src/config.ts`. This file needs to be updated when:

1. Adding new collection contract addresses
2. Adding art assets for open edition collections

### Collection Configuration Example

Collection addresses are organized into different arrays based on their type:

```typescript
// Plushie Collections
export const PLUSHIE_COLLECTION_ADDRS = [
  // Sneaky Plushies - Happy Pig
  "stars134kzejtqk2hpfzvzfh8lz9dreuf40lyz2ucz3qpls6mmczr2dwlqx3t0t8",
  // Sneaky Plushies - Bitgirl
  "stars170ff0vmv8adyp0gsxecpmaewfhg2w00pkdkpag3kwsh4yw8ftc4saxhy4x",
  // Sneaky Plushies - Jack Penguin
  "stars1ej3e2nhjgwhtmlsec3vkzw49566syyccl3f75ujr8m6t22ue07sqwz4vmp",
  // Sneaky Plushies - Celestine Sloth 884
  "stars1yrrhhz9k5tg9g76pfzu3px49urhyh7kn3tgp39n337chz29cpqqqqcaqcp",
  // Mad Scientist Plushie
  "stars18vf62p06ku5wzwqe2lr2jmzglhfvhdyal4p98emxf7x6q5v7u3cq5fxn23",
];

// Combined Collections (determines render order)
export const COLLECTION_ADDRS = [
  ...MAIN_COLLECTION_ADDRS,
  ...OPEN_EDITION_COLLECTION_ADDRS,
  ...PLUSHIE_COLLECTION_ADDRS,
];
```

### Open Edition Asset Configuration

For open edition collections, asset URLs must be configured in the `OE_ASSET_URLS` object:

```typescript
export const OE_ASSET_URLS: Record<OpenEditionCollectionAddr, string> = {
  stars1jfpej6sts325ww78u4m5g8gxdwuuw08rcspr707c43784jcrlqjs75ftxk: `${process.env.PUBLIC_URL}/oe/unluckypig-asset.jpg`,
  stars1zyh20slfdscdxdxqxmfhjnt3zdeh3hmv0zhlmtrp7p5zvntturasdhw057: `${process.env.PUBLIC_URL}/oe/sneakyworld-asset.jpg`,
  stars1n4vuu7kr5cv793jh8t0htnr5wvkjywg452yp6y03f7q6w3747aaqxfkjch: `${process.env.PUBLIC_URL}/oe/sneakyriddler-asset.jpg`,
  stars1fpyg089fandugsvc6yhv3dlqtuhk2prh6f3xmxydj7mhdacaqv5svngnlk: `${process.env.PUBLIC_URL}/oe/sneakyheaven-asset.jpg`,
  stars18ahxl5x0pmzg6hsrjy5d7kam9azxf53chm69pqn3trzx5as920vq20ts87: `${process.env.PUBLIC_URL}/oe/sneakyhell-asset.jpg`,
};
```

Make sure to place the corresponding asset files in the `public/oe/` directory.
