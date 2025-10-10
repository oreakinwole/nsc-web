import SeoTemplate from "./components/view/SeoTemplate.vue";
import FAQs from "./components/FAQs.vue";

export const registeredComponents = [
  {
    component: SeoTemplate,
    name: "Seo Template",
    inputs: [
      {
        name: "captImage",
        type: "string",
        defaultValue: "https://www.modernyardz.com/cdn/shop/files/slider1.webp?v=1708160102&width=3280",

      },
      {
        name: "title",
        type: "string",
        defaultValue: "Input Title Here",
      },

      {
        name: "paragraph",
        type: "richText",
        defaultValue: "Type your paragraph",
      },

      {
        name: "content",
        type: "richText",
        defaultValue: "Type in your content",
      },
      {
        name: "moreContent",
        type: "richText",
        defaultValue: "Type in the rest of your content",
      },
    ],
  },
  {
    component: FAQs,
    name: "FAQs",
    inputs: [
      {
        name: "faqData",
        type: "object",
        defaultValue: {
          dataArray: [],
        },
      },
    ],
  },
];
