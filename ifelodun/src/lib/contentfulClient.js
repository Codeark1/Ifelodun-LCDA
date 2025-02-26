// import { createClient } from "contentful";

// // Ensure environment variables are set
// const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
// const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
// const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master"; // Default to master
// const CONTENT_TYPE_ID = "ifelodun_blog";

// if (!space || !accessToken) {
//   throw new Error("Missing Contentful environment variables!");
// }

// // Initialize Contentful client
// const client = createClient({
//   space,
//   accessToken,
//   environment, 
// });

// // Fetch all blog posts
// export async function getBlogPosts() {
//   try {
//     const response = await client.getEntries({ content_type: CONTENT_TYPE_ID });

//     return response.items;
//   } catch (error) {
//     console.error("Error fetching blog posts:", error);
//     return [];
//   }
// }

// // Fetch a single blog post by slug
// export async function getBlogPostBySlug(slug) {
//   try {
//     const response = await client.getEntries({
//       content_type: CONTENT_TYPE_ID,
//       "fields.slug": slug,
//     });

//     console.log("Contentful response:", JSON.stringify(response, null, 2)); 

//     return response.items.length > 0 ? response.items[0] : null;
//   } catch (error) {
//     console.error("Error fetching blog post by slug:", error);
//     return null;
//   }
// }
