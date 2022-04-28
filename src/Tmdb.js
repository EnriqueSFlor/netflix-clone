const API_KEY = "70c1c78ab7ae6f82f6cd31b404f57f9f";
const API_BASE = "https://api.themoviedb.org/3";

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: [],
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: [],
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: [],
      },
      {
        slug: "action",
        title: "Ação",
        items: [],
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: [],
      },
      {
        slug: "horror",
        title: "Terror",
        items: [],
      },
      {
        slug: "romance",
        title: "Romance",
        items: [],
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: [],
      },
    ];
  },
};
