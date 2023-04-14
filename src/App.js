import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import BookList from './components/BookList/BookList';
import Category from './components/Category';
import Rootlayout from './components/Rootlayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Rootlayout />}
    >
      <Route
        index
        element={<BookList />}
      />

      <Route
        path="category"
        element={<Category />}
      />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
