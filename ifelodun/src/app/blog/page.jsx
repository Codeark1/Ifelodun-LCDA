
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "../../lib/contentfulClient"; // Adjust the import based on your setup

export default async function BlogPage() {
  const posts = await getBlogPosts();

  if (!posts || posts.length === 0) {
    return <p className="text-center text-gray-500">No blog posts found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Blog</h1>

      {/* Grid Layout for Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const { sys, fields } = post;
          const postDate = post.sys?.createdAt;  
          // console.log("Post Created At:", postDate);
          
          

          const { slug, title, content, image } = fields;

          // Format createdAt date
          // const formattedDate = sys.createdAt
          //   ? format(new Date(sys.createdAt), "MMMM d, yyyy")
          //   : "Unknown Date";

          return (
            <article key={sys.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Blog Image(s) */}
              {Array.isArray(image) && image.length > 0 && (
                <div className={`grid ${image.length > 1 ? "grid-cols-2 gap-2" : "grid-cols-1"}`}>
                  {image.map((img, index) => (
                    <Image
                      key={index}
                      src={`https:${img.url}`}
                      alt={title || "Blog Image"}
                      width={800}
                      height={500}
                      className={`object-cover ${image.length > 1 ? "w-full h-40" : "w-full h-60"}`}
                      priority
                    />
                  ))}
                </div>
              )}

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold">
                  <Link href={`/blog/${slug}`} className="hover:text-blue-500 transition-colors">
                    {typeof title === "string" ? title : "Untitled Post"}
                  </Link>
                </h2>

                {/* <p className="text-gray-500 text-sm mt-2">Published on: {formattedDate}</p> */}

                <h3 className="text-gray-600 mt-2 line-clamp-3">
                  {content && typeof content === "object" ? (
                    <div>{documentToReactComponents(content)}</div>
                  ) : (
                    "No content available."
                  )}
                </h3>

                <Link href={`/blog/${slug}`} className="text-green-600 hover:underline mt-4 inline-block">
                  Read More →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
