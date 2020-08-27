import { useStaticQuery, graphql } from "gatsby";

const ghostContentApiKey = "02aad9b71614c7b780596966d3";
const serverUrl = "https://blog.softup.co/ghost/api/v3";

export const getBlogArticles = async (setPosts) => {
  try {
    const response = await fetch(
      `${serverUrl}/content/posts/?key=${ghostContentApiKey}&order=published_at%20desc&limit=5`
    );

    const data = await response.json();

    setPosts(() => data.posts);

    return data.posts;
  } catch (e) {
    return e;
  }
};

export const getMediumArticles = () => {
  return useStaticQuery(graphql`
    query Medium {
      allMediumPost(limit: 5, sort: { fields: createdAt, order: DESC }) {
        totalCount
        edges {
          node {
            id
            uniqueSlug
            title
            createdAt(formatString: "MMM YYYY")
          }
        }
      }
    }
  `);
};
