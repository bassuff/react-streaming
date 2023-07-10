import React, {lazy, Suspense} from 'react';
import {Html} from './Html.jsx';
import {Loading} from './components/Loading.jsx';

const Red = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./components/Red.jsx' /* webpackPrefetch: true */)), 1000);
    })
);
const Green = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./components/Green.jsx' /* webpackPrefetch: true */)), 2000);
    })
);
const Blue = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./components/Blue.jsx' /* webpackPrefetch: true */)), 3000);
    })
);

export const App = () => {
  return (
    <Html>
      <Suspense fallback={<Loading />}>
        <div className="d-flex justify-content-center align-items-center app">
          <Red />
          <Suspense fallback={<Loading />}>
            <Green />
            <Suspense fallback={<Loading />}>
              <Blue />
            </Suspense>
          </Suspense>
        </div>
      </Suspense>
    </Html>
  );
};
