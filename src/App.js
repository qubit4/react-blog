import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NewBlog from './pages/NewBlog';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import useFetch from './useFetch';

const App = () => {
  const url_users = "https://jsonplaceholder.typicode.com/users"
  const { data: users } = useFetch(url_users)
 
  return (
    <Layout> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<BlogDetails users={users} />}/>
        <Route path="/new-blog" element={<NewBlog />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Layout>
  );
}

export default App;
