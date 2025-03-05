"use client"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "../../lib/contentfulClient";
import { format } from 'date-fns';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  if (!posts?.length) {
    return <p className="text-center text-gray-500">No blog posts found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <h1 className="text-4xl font-bold text-center mb-10">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const { sys, fields } = post;
          const { slug, title, content, image } = fields;
          const postDate = sys.createdAt ? format(new Date(sys.createdAt), "MMMM d, yyyy") : '';

          return (
            <article key={sys.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {image?.length > 0 && (
                <div className={`grid ${image.length > 1 ? "grid-cols-2 gap-2" : "grid-cols-1"}`}>
                  {image.map((img, index) => (
                    <div key={index} className="relative aspect-video">
                      <Image
                        src={img.url}
                        alt={img.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  <Link 
                    href={`/blog/${slug}`} 
                    className="hover:text-blue-500 transition-colors"
                  >
                    {title}
                  </Link>
                </h2>

                {postDate && (
                  <p className="text-gray-500 text-sm mb-4">
                    Published on: {postDate}
                  </p>
                )}

                <div className="text-gray-600 line-clamp-3">
                  {content ? (
                    documentToReactComponents(content)
                  ) : (
                    "No content available."
                  )}
                </div>

                <Link 
                  href={`/blog/${slug}`}
                  className="mt-4 inline-block text-green-600 hover:underline"
                >
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