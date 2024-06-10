import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, GroupForm, GroupList, EditGroupForm } from './pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <GroupForm />,
      },
      {
        path: '/groups',
        element: <GroupList />,
      },
      {
        path: '/edit-group/:id',
        element: <EditGroupForm />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
