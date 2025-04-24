import { getProjects } from "../../sanity/queries.js";
import Image from "next/image.js";
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div> 
      {projects.map((project) => (
      <div key={project._id}>
        <p>{project.title}</p>
        <Link href={`/projects/${project.slug}`} key={project._id}>
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
            />
          </Link>
      </div>
      ))}
    </div>
  );
}