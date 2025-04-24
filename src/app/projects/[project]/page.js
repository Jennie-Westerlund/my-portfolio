import Image from "next/image.js";
import { getProject } from "../../../../sanity/queries.js";

export default async function Project({ params }) {
  const slug = await params.project; // Next.js automatically gives your page component a prop called params.
  const project = await getProject(slug); //params contains all the dynamic segments from the URL.
  return (
    <div>
      <h1>{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={720}
        height={580}
      />
    </div>
  );
}