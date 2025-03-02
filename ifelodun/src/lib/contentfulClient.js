import { createClient } from "contentful";

// Environment variables setup
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master";
const CONTENT_TYPE_ID = "ifelodun_blog";

if (!space || !accessToken) {
  throw new Error("Missing Contentful environment variables!");
}

const client = createClient({
  space,
  accessToken,
  environment,
});

// Enhanced getBlogPosts with better error handling
export async function getBlogPosts() {
  try {
    const response = await client.getEntries({
      content_type: CONTENT_TYPE_ID,
      include: 2, // Include linked assets
      order: "-sys.createdAt" // Newest first
    });

    return response.items.map((post) => ({
      sys: {
        id: post.sys.id,
        createdAt: post.sys.createdAt
      },
      fields: {
        slug: post.fields.slug || "",
        title: post.fields.title || "Untitled Post",
        content: post.fields.content ? JSON.parse(JSON.stringify(post.fields.content)) : null,
        image: post.fields.image?.map((img) => ({
          url: img.fields?.file?.url ? `https:${img.fields.file.url}` : '',
          title: img.fields.title || "Blog Image",
          description: img.fields.description || "",
        })).filter(img => img.url) // Filter out images without URLs
      }
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// Improved getBlogPostBySlug with consistent field names
export async function getBlogPostBySlug(slug) {
  try {
    const response = await client.getEntries({
      content_type: CONTENT_TYPE_ID,
      "fields.slug": slug,
      include: 2
    });

    if (!response.items.length) return null;

    const post = response.items[0];
    return {
      sys: { id: post.sys.id },
      fields: {
        slug: post.fields.slug,
        title: post.fields.title || "Untitled Post",
        content: post.fields.content ? JSON.parse(JSON.stringify(post.fields.content)) : null,
        image: post.fields.image?.map((img) => ({
          url: img.fields?.file?.url ? `https:${img.fields.file.url}` : '',
          title: img.fields.title || "Featured Image",
          description: img.fields.description || "",
        })).filter(img => img.url),
        publishedAt: post.fields.publishedAt || post.sys.createdAt
      }
    };
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    return null;
  }
}