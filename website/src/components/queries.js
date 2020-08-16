import { useStaticQuery, graphql } from "gatsby";

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
