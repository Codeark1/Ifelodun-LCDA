import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const CONTENT_TYPE_ID = "ifelodun_blog"; // <--- Add this constant

if (!space || !accessToken) {
  throw new Error("Missing Contentful environment variables!");
}

const client = createClient({
  space,
  accessToken,
});

// Fetch all blog postsexport async function getBlogPosts() {
  export async function getBlogPosts() {
    const response = await client.getEntries({
      content_type: CONTENT_TYPE_ID,

    });
    return response.items;
  }


// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug) {
  const response = await client.getEntries({
    content_type: CONTENT_TYPE_ID,
    "fields.slug": slug,

  });

  console.log("Contentful response:", response.items);
  return response.items.length > 0 ? response.items[0] : null;
}
