// import { getBlogPostBySlug } from "../../../lib/contentfulClient";
// import { notFound } from "next/navigation";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import Image from "next/image";
// import { format } from "date-fns";

// export default async function BlogPostPage({ params }) {
//   const { slug } = params;
//   const post = await getBlogPostBySlug(slug);

//   if (!post || !post.fields) {
//     return notFound();
//   }

//   const { title, content, featuredImages, publishedAt } = post.fields;

//   // Format Date & Time
//   const formattedDate = publishedAt
//     ? format(new Date(publishedAt), "EEEE, MMMM d, yyyy 'at' h:mm a")
//     : "Unknown Date";

//   return (
//     <article className="max-w-3xl mx-auto py-10 px-5">
//       {/* Title & Date */}
//       <header className="mb-8">
//         <h1 className="text-4xl font-bold text-gray-900 mb-3">{title}</h1>
//         <p className="text-sm text-gray-500">Published on {formattedDate}</p>
//       </header>

//       {/* Featured Images (if available) */}
//       {featuredImages?.length > 0 && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//           {featuredImages.map((image, index) => (
//             <Image
//               key={index}
//               src={`https:${image.fields.file.url}`}
//               alt={image.fields.title || `Image ${index + 1}`}
//               width={800}
//               height={500}
//               className="rounded-lg shadow-md"
//               priority={index === 0} // Prioritize the first image
//             />
//           ))}
//         </div>
//       )}

//       {/* Blog Content */}
//       <section className="prose prose-lg max-w-none">
//         {documentToReactComponents(content)}
//       </section>
//     </article>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page