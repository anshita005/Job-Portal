
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Button } from './components/ui/button';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import JobLsting from './pages/job-listing';
import JobPage from './pages/job';
import PostJob from './pages/post-job';
import SavedJobs from './pages/saved-job';
import MyJobs from './pages/my-jobs';
import { ThemeProvider } from './components/theme-provider';
import ProtectedRoute from './components/ui/protected-router';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element:
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>

      },
      {
        path: '/jobs',
        element:
          <ProtectedRoute>
            <JobLsting />
          </ProtectedRoute>

      },
      {
        path: '/job/:id',
        element:
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
      },
      {
        path: '/post-job',
        element: 
        <ProtectedRoute>
          <PostJob />
        </ProtectedRoute>
      },
      {
        path: '/saved-job',
        element: 
        <ProtectedRoute>
          <SavedJobs />
        </ProtectedRoute>
      },
      {
        path: '/my-jobs',
        element:
        <ProtectedRoute>
           <MyJobs />
        </ProtectedRoute>
      },
    ]
  }
])
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>

  )
}

export default App;
