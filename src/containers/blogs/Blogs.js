import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [hashnodeBlogs, setHashnodeBlogs] = useState([]);
  const [hasFetchError, setHasFetchError] = useState(false);

  useEffect(() => {
    if (blogSection.displayHashnodeBlogs) {
      fetch("/blogs.json")
        .then(result => {
          if (!result.ok) {
            throw new Error("Unable to load blogs.json");
          }

          return result.json();
        })
        .then(response => {
          setHashnodeBlogs(Array.isArray(response.items) ? response.items : []);
        })
        .catch(error => {
          console.error(
            `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
          );
          setHasFetchError(true);
        });
    }
  }, []);

  if (!blogSection.display) {
    return null;
  }

  const shouldUseFallbackBlogs =
    !blogSection.displayHashnodeBlogs || hasFetchError;
  const fallbackBlogs = blogSection.blogs.filter(
    blog => blog.url && (blog.title || blog.description)
  );
  const blogsToRender = shouldUseFallbackBlogs ? fallbackBlogs : hashnodeBlogs;

  if (!blogsToRender.length) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogsToRender.map((blog, i) => {
              return <BlogCard key={i} isDark={isDark} blog={blog} />;
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
