import { useEffect, useState } from "react";
import { DashboardAllProjects } from "../../components/Dashboard/DashboardAllProjects";
import { firestore } from "../../services/firebase";

export default function Projects() {
  const [showProjects, setShowProjects] = useState([])

  async function fetchProjects() {
    firestore.collection("projects").get().then((querySnapshot) => {
    querySnapshot.forEach(element => {
        const data = element.data();
        setShowProjects(arr => [...arr, data]);
      });
  })
}

  useEffect(() => {
    fetchProjects();
  }, []);
  
  return (
    <DashboardAllProjects fetchProjects={fetchProjects} showProjects={showProjects}/>
  )
}