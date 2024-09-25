import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import AboutBrand from "./AboutBrand";
import RecentArticles from "./RecentArticles";

const Blog = () => {
  return (
    <div>
      <BlogHeader />

      <div className="container grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-3">
          <BlogContent />
        </div>
        <div className="space-y-12">
          <AboutBrand />
          <RecentArticles />
        </div>
      </div>
    </div>
  );
};

export default Blog;
