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
                    "6303e9dd4b7f44009da843b2",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-demo-studio-2evdrbqk",
                  apiId: "d95e5b3e-895d-4920-a51a-1afbae1adcf2",
                },
                {
                  buildHookId: "6303e9de1b166c00badd35b5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-demo-web-j9n9frj6",
                  apiId: "a55be35f-dbf2-47f7-b708-55e2bff1bec1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/caldwmark/sanity-gatsby-blog-demo",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-demo-web-j9n9frj6.netlify.app",
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
