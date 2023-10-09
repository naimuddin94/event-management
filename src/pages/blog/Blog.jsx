import { useLoaderData } from "react-router-dom";
import Content from "../../components/others/blog/Content";
import BlogBanner from "../../components/others/blog/BlogBanner";
import Packages from "../../components/others/service/Packages";
import BlogSection from "../../components/others/blog/BlogSection";

const Blog = () => {
  const packages = useLoaderData();

  return (
    <div className="background">
      <BlogBanner />
      <Content />
      <BlogSection />
      <Packages packages={packages} />
    </div>
  );
};

export default Blog;
