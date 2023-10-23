import React, { useEffect, useState } from "react";
import ProjectContainer from "./ProjectContainer";
import ProjectSkeleton from "./ProjectSkeleton";
import "../styles/project.scss";
import Filter from "./Filter";
import { Client, Databases, Query } from "appwrite";
// import { fetchDocuments } from "./DataHandler.jsx";

const Projects = () => {
  const numSkeletons = 5;
  const [currentFilter, setCurrentFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [fetchedProjects, setFetchedProjects] = useState([]); // Declare fetchedProjects
  const [isMounted, setIsMounted] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  //fetch data from appwrite

  function fetchDocuments() {
    const client = new Client()
      .setEndpoint(import.meta.env.PUBLIC_API_ENDPOINT)
      .setProject(import.meta.env.PUBLIC_PROJECT_ID);

    const databases = new Databases(client);

    return databases.listDocuments(
      import.meta.env.PUBLIC_DATABASE_ID,
      import.meta.env.PUBLIC_COLLECTION_ID,
      [Query.limit(50)]
    );
  }
  useEffect(() => {
    setIsMounted(true);

    // Fetch the data and update fetchedProjects
    if (isMounted) {
      fetchDocuments(import.meta.env.PUBLIC_DATABASE_ID).then((data) => {
        const fetchedProjects = data.documents.map((doc) => ({
          title: doc.title,
          description: doc.description,
          category: doc.category,
          ghLink: doc.ghLink,
          liveLink: doc.liveLink,
          image: doc.image,
        }));
        setFetchedProjects(fetchedProjects);
        setIsFetched(true);
      });
    }
  }, [isMounted]);

  useEffect(() => {
    if (currentFilter === "all") {
      setFilteredProjects(fetchedProjects); // Reset to all projects
    } else {
      const filtered = fetchedProjects.filter(
        (project) => project.category === currentFilter
      );
      setFilteredProjects(filtered);
      setIsFetched(true);
    }
  }, [currentFilter, fetchedProjects]);

  const skeletons = [];
  for (let i = 0; i < numSkeletons; i++) {
    skeletons.push(
      <ProjectSkeleton title="Loading..." description="Loading..." />
    );
  }

  return (
    <div className="h-screen pt-12">
      <div className="bg-lightBackground dark:bg-darkBackground h-full p-4">
        <Filter
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(208px, 220px))",
            gridGap: "0px",
            gridAutoFlow: "dense",
            gap: "1rem",
            gridColumnGap: "1rem",
          }}
          className="project-panel"
        >
          {filteredProjects.map((project, index) => (
            <ProjectContainer
              key={index}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              ghLink={project.ghLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
        {!isFetched && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(208px, 220px))",
              gridGap: "0px",
              gridAutoFlow: "dense",
              gap: "1rem",
              gridColumnGap: "1rem",
            }}
            className="project-panel "
          >
            {[...Array(numSkeletons)].map((e, i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
