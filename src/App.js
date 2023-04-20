import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import './App.css';
import BookListComponent from './components/BookList';
import CategoryComponent from './components/Category';
import RootLayoutComponent from './components/Rootlayout';

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayoutComponent />}>
    <Route index element={<BookListComponent />} />
    <Route path="category" element={<CategoryComponent />} />
  </Route>,
);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
