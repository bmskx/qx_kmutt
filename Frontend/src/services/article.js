import http from "./http-common";
import qs from "qs";

// Article APIs
export default new (class ArticleService {
  // Get all articles
  async getArticles(pageSize) {
    const query = qs.stringify({
      sort: ['published_date:desc'],
      fields: ['slug', 'title', 'published_date'],
      populate: {
        cover: {
          fields: ['url'],
        },
      },
      pagination: {
        page: 1,
        pageSize: pageSize,
      },
    }, {
      encodeValuesOnly: true,
    })

    return await http
      .get("/articles?" + query)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
  }

  // Get article by slug
  async getArticleBySlug(slug) {
    const query = qs.stringify({
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        cover: {
          fields: ['url'],
        },
      },
    }, {
      encodeValuesOnly: true,
    })

    return await http
      .get("/articles?" + query)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
  }
})();