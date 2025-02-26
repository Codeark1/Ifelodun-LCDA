import { getBlogPosts } from "../../lib/contentfulClient";
import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export default async function BlogPage() {
  const posts = await getBlogPosts();

  if (!posts || posts.length === 0) {
    return <p className="text-center text-gray-500">No blog posts found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-10">
        {posts.map((post) => {
          const { sys, fields } = post;
          const { slug, title, content, image } = fields;

          return (
            <li key={sys.id} className="border-b pb-6">
           
              {post.fields.image && post.fields.image[0]?.fields?.file?.url ? (
  <Image 
    src={`https:${post.fields.image[0].fields.file.url}`} 
    alt={post.fields.title || "Blog Image"} 
    width={600} 
    height={400} 
    priority 
  />
) : (
  <p>No image available</p>
)}


              {/* Blog Title & Link */}
              <Link href={`/blog/${slug}`} className="text-xl font-semibold text-blue-600 hover:underline">
                {typeof title === 'string' ? title : "Untitled Post"}
              </Link>

              {/* Blog Content */}
              <div className="mt-2 text-gray-700">
                {content ? documentToReactComponents(content) : <p>No content available.</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
