/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ShopLazyImport = createFileRoute('/shop')()
const DashboardLazyImport = createFileRoute('/dashboard')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ShopLazyRoute = ShopLazyImport.update({
  id: '/shop',
  path: '/shop',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/shop.lazy').then((d) => d.Route))

const DashboardLazyRoute = DashboardLazyImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/dashboard.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardLazyImport
      parentRoute: typeof rootRoute
    }
    '/shop': {
      id: '/shop'
      path: '/shop'
      fullPath: '/shop'
      preLoaderRoute: typeof ShopLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/dashboard': typeof DashboardLazyRoute
  '/shop': typeof ShopLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/dashboard': typeof DashboardLazyRoute
  '/shop': typeof ShopLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/dashboard': typeof DashboardLazyRoute
  '/shop': typeof ShopLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/dashboard' | '/shop'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/dashboard' | '/shop'
  id: '__root__' | '/' | '/dashboard' | '/shop'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  DashboardLazyRoute: typeof DashboardLazyRoute
  ShopLazyRoute: typeof ShopLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  DashboardLazyRoute: DashboardLazyRoute,
  ShopLazyRoute: ShopLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/shop"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.lazy.tsx"
    },
    "/shop": {
      "filePath": "shop.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
