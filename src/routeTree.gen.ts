/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as HomeImport } from './routes/_home'
import { Route as IndexImport } from './routes/index'
import { Route as HomeReportImport } from './routes/_home/report'
import { Route as HomePersonnelImport } from './routes/_home/personnel'
import { Route as HomePatientImport } from './routes/_home/patient'
import { Route as HomeDashboardImport } from './routes/_home/dashboard'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const HomeRoute = HomeImport.update({
  id: '/_home',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const HomeReportRoute = HomeReportImport.update({
  id: '/report',
  path: '/report',
  getParentRoute: () => HomeRoute,
} as any)

const HomePersonnelRoute = HomePersonnelImport.update({
  id: '/personnel',
  path: '/personnel',
  getParentRoute: () => HomeRoute,
} as any)

const HomePatientRoute = HomePatientImport.update({
  id: '/patient',
  path: '/patient',
  getParentRoute: () => HomeRoute,
} as any)

const HomeDashboardRoute = HomeDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => HomeRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_home': {
      id: '/_home'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_home/dashboard': {
      id: '/_home/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof HomeDashboardImport
      parentRoute: typeof HomeImport
    }
    '/_home/patient': {
      id: '/_home/patient'
      path: '/patient'
      fullPath: '/patient'
      preLoaderRoute: typeof HomePatientImport
      parentRoute: typeof HomeImport
    }
    '/_home/personnel': {
      id: '/_home/personnel'
      path: '/personnel'
      fullPath: '/personnel'
      preLoaderRoute: typeof HomePersonnelImport
      parentRoute: typeof HomeImport
    }
    '/_home/report': {
      id: '/_home/report'
      path: '/report'
      fullPath: '/report'
      preLoaderRoute: typeof HomeReportImport
      parentRoute: typeof HomeImport
    }
  }
}

// Create and export the route tree

interface HomeRouteChildren {
  HomeDashboardRoute: typeof HomeDashboardRoute
  HomePatientRoute: typeof HomePatientRoute
  HomePersonnelRoute: typeof HomePersonnelRoute
  HomeReportRoute: typeof HomeReportRoute
}

const HomeRouteChildren: HomeRouteChildren = {
  HomeDashboardRoute: HomeDashboardRoute,
  HomePatientRoute: HomePatientRoute,
  HomePersonnelRoute: HomePersonnelRoute,
  HomeReportRoute: HomeReportRoute,
}

const HomeRouteWithChildren = HomeRoute._addFileChildren(HomeRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof HomeRouteWithChildren
  '/login': typeof LoginRoute
  '/dashboard': typeof HomeDashboardRoute
  '/patient': typeof HomePatientRoute
  '/personnel': typeof HomePersonnelRoute
  '/report': typeof HomeReportRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof HomeRouteWithChildren
  '/login': typeof LoginRoute
  '/dashboard': typeof HomeDashboardRoute
  '/patient': typeof HomePatientRoute
  '/personnel': typeof HomePersonnelRoute
  '/report': typeof HomeReportRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_home': typeof HomeRouteWithChildren
  '/login': typeof LoginRoute
  '/_home/dashboard': typeof HomeDashboardRoute
  '/_home/patient': typeof HomePatientRoute
  '/_home/personnel': typeof HomePersonnelRoute
  '/_home/report': typeof HomeReportRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/dashboard'
    | '/patient'
    | '/personnel'
    | '/report'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/login' | '/dashboard' | '/patient' | '/personnel' | '/report'
  id:
    | '__root__'
    | '/'
    | '/_home'
    | '/login'
    | '/_home/dashboard'
    | '/_home/patient'
    | '/_home/personnel'
    | '/_home/report'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  HomeRoute: typeof HomeRouteWithChildren
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  HomeRoute: HomeRouteWithChildren,
  LoginRoute: LoginRoute,
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
        "/_home",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_home": {
      "filePath": "_home.tsx",
      "children": [
        "/_home/dashboard",
        "/_home/patient",
        "/_home/personnel",
        "/_home/report"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_home/dashboard": {
      "filePath": "_home/dashboard.tsx",
      "parent": "/_home"
    },
    "/_home/patient": {
      "filePath": "_home/patient.tsx",
      "parent": "/_home"
    },
    "/_home/personnel": {
      "filePath": "_home/personnel.tsx",
      "parent": "/_home"
    },
    "/_home/report": {
      "filePath": "_home/report.tsx",
      "parent": "/_home"
    }
  }
}
ROUTE_MANIFEST_END */
