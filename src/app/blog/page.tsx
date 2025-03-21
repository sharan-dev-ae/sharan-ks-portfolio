// app/blog/page.tsx (Blog Listing Page)
import Link from "next/link";

const BlogPage = () => {
    const blogs = [
        {
          id: 1,
          title: "Blog Post 1",
          excerpt: "This is a short excerpt of the first blog post.",
          image: "https://via.placeholder.com/400x200",
        },
        {
          id: 2,
          title: "Blog Post 2",
          excerpt: "This is a short excerpt of the second blog post.",
          image: "https://via.placeholder.com/400x200",
        },
        {
          id: 3,
          title: "Blog Post 3",
          excerpt: "This is a short excerpt of the third blog post.",
          image: "https://via.placeholder.com/400x200",
        },
        {
          id: 4,
          title: "Blog Post 4",
          excerpt: "This is a short excerpt of the fourth blog post.",
          image: "https://via.placeholder.com/400x200",
        },
        {
          id: 5,
          title: "Blog Post 5",
          excerpt: "This is a short excerpt of the fifth blog post.",
          image: "https://via.placeholder.com/400x200",
        },
        {
          id: 6,
          title: "Blog Post 6",
          excerpt: "This is a short excerpt of the sixth blog post.",
          image: "https://via.placeholder.com/400x200",
        },
        {
          id: 7,
          title: "Blog Post 7",
          excerpt: "This is a short excerpt of the seventh blog post.",
          image: "https://via.placeholder.com/400x200",
        },
        {
          id: 8,
          title: "Blog Post 8",
          excerpt: "This is a short excerpt of the eighth blog post.",
          image: "https://via.placeholder.com/400x200",
        },
      ];
      

  return (
    <section className="py-24 text-white bg-gradient-to-b from-[#1D1841] to-[#2B2B63]">
      <div className="container mx-auto px-8 text-center">
        <h2 className="section-title text-4xl mb-12">Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#2C2C60] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 h-full">
                <h3 className="text-xl font-semibold text-[#FFBC1C]">{blog.title}</h3>
                <p className="text-lg text-gray-300 mt-4">{blog.excerpt}</p>
                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-block mt-6 text-lg text-[#FFBC1C] hover:underline transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-block text-xl text-[#FFBC1C] hover:underline transition-all duration-300"
          >
            View More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
