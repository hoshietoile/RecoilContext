import useStoreHook from "@/hooks/useStore.hook";
import { ReactNode, createContext } from "react";

type Props = {
  children: ReactNode;
  store: { 
    name: string;
    source: string[];
    add: (item: string) => void; 
    modify: (idx?: number, item?: string) => void; 
    remove: (idx?: number) => void; 
  }
}

type Accessor = {
  storeName: string;
  source: string[];
 onAdd: (item: string) => void; 
 onModify: (idx?: number, item?: string) => void; 
 onRemove: (idx?: number) => void;  
}

export const StoreContext = createContext<Accessor>({} as Accessor);

const StoreContextProvider = ({ children, store }: Props) => {
  const { source, onAdd, onModify, onRemove } = useStoreHook(store); 
  return (
    <StoreContext.Provider value={{
      storeName: store.name,
      source,
      onAdd,
      onModify,
      onRemove,
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;