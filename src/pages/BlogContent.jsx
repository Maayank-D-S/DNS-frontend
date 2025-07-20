import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogComp from '../components/BlogComp'
import { useLocation, useParams } from "react-router-dom";
import blogs from "../data/blogs"; // ✅ Import blog list

const BlogContent = ({content}) => {
  const { id } = useParams();
  const blogId = parseInt(id, 10); // convert string to number
  const blog = blogs.find((b) => b.id === blogId); // ✅ lookup blog from static data

  if (!blog) {
    return (
      <div className="text-center py-20 text-red-600">
        Blog not found
      </div>
    );
  }
  



  return (
    <div>
      <Header/>
      <BlogComp blog={blog}/>
      <Footer/>
    </div>
  )
}

export default BlogContent