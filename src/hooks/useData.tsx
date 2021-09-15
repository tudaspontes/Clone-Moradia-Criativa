import { useState, useContext, createContext, ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid'
interface DataProviderProps {
  children: ReactNode;
}

interface DataContextType {
  setValues: any;
  data: any;
}

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
)

export function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState({
    id: uuidv4(),
    image: [],
    necessidades:"",
    project: "",
    saveOption: "",
    quanto: "",
    quem: "",
    para: "",
    sobre:"",
    estilo: "",
    user: {},
    time: new Date()
    });

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext)
  return context
}