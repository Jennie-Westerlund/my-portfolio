import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project", 
  title: "Projects", 
  type: "document", 
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug", // a slug is the last part of a url
      description:
        "This field is the project page name at my-portfolio.com/projects/<name>.",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true }, //to have a image preview in the studio
    }),
  ],
});