export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60b0d243ea11ecf29aecd865",
                  title: "Sanity Studio",
                  name: "jamstack-japan-2-studio",
                  apiId: "009ded62-b4e0-491d-b23f-3816bc7241ea",
                },
                {
                  buildHookId: "60b0d24497acf7e0d5b064ac",
                  title: "Blog Website",
                  name: "jamstack-japan-2",
                  apiId: "7d788944-bf17-45e8-b215-da51e943f53f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/chrispecoraro/jamstack-japan-2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://jamstack-japan-2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
