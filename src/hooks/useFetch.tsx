import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { firestore } from '../services/firebase';

//terminar o context para usar em todas as páginas do dashboard

interface DataFetchProviderProps {
  children: ReactNode;
}

interface DataContextType {
  fetchProjects: () => void;
  showProjects?: Projects;
}

type Projects = {
  title: string,
}

export const DataFetchContext = createContext<DataContextType>({} as DataContextType)

export function DataFetchContextProvider({ children }: DataFetchProviderProps) {
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
  },[])


  return (
  <DataFetchContext.Provider value={{fetchProjects}}>
    {children}
  </DataFetchContext.Provider>
  );
}

export function useFetch() {
  const context = useContext(DataFetchContext)
  return context;
}

