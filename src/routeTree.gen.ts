/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TemaTemaIdImport } from './routes/tema/$temaId'
import { Route as HendelserHendelseIdImport } from './routes/hendelser/$hendelseId'
import { Route as DistrikterDistriktIdImport } from './routes/distrikter/$distriktId'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const TemaIndexLazyImport = createFileRoute('/tema/')()
const NyhetssenterIndexLazyImport = createFileRoute('/nyhetssenter/')()
const HendelserIndexLazyImport = createFileRoute('/hendelser/')()
const DistrikterIndexLazyImport = createFileRoute('/distrikter/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const TemaIndexLazyRoute = TemaIndexLazyImport.update({
  path: '/tema/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/tema/index.lazy').then((d) => d.Route))

const NyhetssenterIndexLazyRoute = NyhetssenterIndexLazyImport.update({
  path: '/nyhetssenter/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/nyhetssenter/index.lazy').then((d) => d.Route),
)

const HendelserIndexLazyRoute = HendelserIndexLazyImport.update({
  path: '/hendelser/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/hendelser/index.lazy').then((d) => d.Route),
)

const DistrikterIndexLazyRoute = DistrikterIndexLazyImport.update({
  path: '/distrikter/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/distrikter/index.lazy').then((d) => d.Route),
)

const TemaTemaIdRoute = TemaTemaIdImport.update({
  path: '/tema/$temaId',
  getParentRoute: () => rootRoute,
} as any)

const HendelserHendelseIdRoute = HendelserHendelseIdImport.update({
  path: '/hendelser/$hendelseId',
  getParentRoute: () => rootRoute,
} as any)

const DistrikterDistriktIdRoute = DistrikterDistriktIdImport.update({
  path: '/distrikter/$distriktId',
  getParentRoute: () => rootRoute,
} as any)

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
    '/distrikter/$distriktId': {
      id: '/distrikter/$distriktId'
      path: '/distrikter/$distriktId'
      fullPath: '/distrikter/$distriktId'
      preLoaderRoute: typeof DistrikterDistriktIdImport
      parentRoute: typeof rootRoute
    }
    '/hendelser/$hendelseId': {
      id: '/hendelser/$hendelseId'
      path: '/hendelser/$hendelseId'
      fullPath: '/hendelser/$hendelseId'
      preLoaderRoute: typeof HendelserHendelseIdImport
      parentRoute: typeof rootRoute
    }
    '/tema/$temaId': {
      id: '/tema/$temaId'
      path: '/tema/$temaId'
      fullPath: '/tema/$temaId'
      preLoaderRoute: typeof TemaTemaIdImport
      parentRoute: typeof rootRoute
    }
    '/distrikter/': {
      id: '/distrikter/'
      path: '/distrikter'
      fullPath: '/distrikter'
      preLoaderRoute: typeof DistrikterIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/hendelser/': {
      id: '/hendelser/'
      path: '/hendelser'
      fullPath: '/hendelser'
      preLoaderRoute: typeof HendelserIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/nyhetssenter/': {
      id: '/nyhetssenter/'
      path: '/nyhetssenter'
      fullPath: '/nyhetssenter'
      preLoaderRoute: typeof NyhetssenterIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/tema/': {
      id: '/tema/'
      path: '/tema'
      fullPath: '/tema'
      preLoaderRoute: typeof TemaIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  DistrikterDistriktIdRoute,
  HendelserHendelseIdRoute,
  TemaTemaIdRoute,
  DistrikterIndexLazyRoute,
  HendelserIndexLazyRoute,
  NyhetssenterIndexLazyRoute,
  TemaIndexLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/distrikter/$distriktId",
        "/hendelser/$hendelseId",
        "/tema/$temaId",
        "/distrikter/",
        "/hendelser/",
        "/nyhetssenter/",
        "/tema/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/distrikter/$distriktId": {
      "filePath": "distrikter/$distriktId.tsx"
    },
    "/hendelser/$hendelseId": {
      "filePath": "hendelser/$hendelseId.tsx"
    },
    "/tema/$temaId": {
      "filePath": "tema/$temaId.tsx"
    },
    "/distrikter/": {
      "filePath": "distrikter/index.lazy.tsx"
    },
    "/hendelser/": {
      "filePath": "hendelser/index.lazy.tsx"
    },
    "/nyhetssenter/": {
      "filePath": "nyhetssenter/index.lazy.tsx"
    },
    "/tema/": {
      "filePath": "tema/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
