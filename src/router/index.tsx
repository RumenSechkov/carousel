import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider as Router } from 'react-router';

const MainLayout = React.lazy(() => import('@layouts/main'));
const NotFoundPage = React.lazy(() => import('@pages/not-found'));
const ImagesPage = React.lazy(() => import('@pages/images'));
const AboutPage = React.lazy(() => import('@pages/about'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<span>LoADing..</span>}>
        <MainLayout>
          <ImagesPage />
        </MainLayout>
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<span>LoADing..</span>}>
        <NotFoundPage />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<span>LoADing..</span>}>
        <MainLayout>
          <AboutPage />
        </MainLayout>
      </Suspense>
    ),
  },
]);

const RouterProvider = () => <Router router={router} />;

export default RouterProvider;
