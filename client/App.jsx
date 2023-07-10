import React, {lazy, Suspense} from 'react';
import {Html} from './Html.jsx';
import {Loading} from './components/Loading.jsx';

const Sidebar = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./components/Sidebar.jsx' /* webpackPrefetch: true */)), 1000);
    })
);
const Main = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./components/Main.jsx' /* webpackPrefetch: true */)), 2000);
    })
);
const Extra = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./components/Extra.jsx' /* webpackPrefetch: true */)), 3000);
    })
);

export const App = () => {
  return (
    <Html>
      <Suspense fallback={<Loading />}>
        <Sidebar></Sidebar>
        <Suspense fallback={<Loading />}>
          <Main></Main>
          <Suspense fallback={<Loading />}>
            <Extra></Extra>
          </Suspense>
        </Suspense>
      </Suspense>
    </Html>
  );
};
