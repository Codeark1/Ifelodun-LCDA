import { createClient } from "contentful";

// Ensure environment variables are set
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT ; 
const CONTENT_TYPE_ID = "ifelodun_blog";

if (!space || !accessToken) {
  throw new Error("Missing Contentful environment variables!");
}

// Initialize Contentful client
const client = createClient({
  space,
  accessToken,
  environment,
});

// Fetch all blog posts
export async function getBlogPosts() {
  try {
    const response = await client.getEntries({ content_type: CONTENT_TYPE_ID });

    return response.items.map((post) => ({
      sys: { id: post.sys.id },
      fields: {
        slug: post.fields.slug || "",
        title: post.fields.title || "Untitled Post",
        content: post.fields.content ? JSON.parse(JSON.stringify(post.fields.content)) : null,
        image: post.fields.image?.map((img) => ({
          url: img.fields.file.url,
          title: img.fields.title || "Blog Image",
        })),
      },
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug) {
  try {
    const response = await client.getEntries({
      content_type: CONTENT_TYPE_ID,
      "fields.slug": slug,
    });

    // console.log("Contentful response:", JSON.stringify(response, null, 2));

    return response.items.length > 0
      ? {
          sys: { id: response.items[0].sys.id },
          fields: {
            slug: response.items[0].fields.slug,
            title: response.items[0].fields.title || "Untitled Post",
            content: response.items[0].fields.content
              ? JSON.parse(JSON.stringify(response.items[0].fields.content))
              : null,
            featuredImages: response.items[0].fields.featuredImages?.map((img) => ({
              url: img.fields.file.url,
              title: img.fields.title || "Featured Image",
            })),
            publishedAt: response.items[0].fields.publishedAt || null,
          },
        }
      : null;
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    return null;
  }
}
