"use client"; //this means the content is rendered on the client, instead of Next default server side rendering.

import { NextStudio } from "next-sanity/studio";
import defineConfig from "../../../../sanity.config";

const config = defineConfig;

export default function StudioPage() {
  return <NextStudio config={config} />; 
}
