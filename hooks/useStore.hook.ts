type Props = {
  source: string[];
  add: (item: string) => void;
  modify: (idx?: number, item?: string) => void;
  remove: (idx?: number) => void;
}

const useStoreHook = ({
  source,
  add,
  modify,
  remove,
}: Props) => {
  const onAdd = (item: string) => {
    add(item); 
  }

  const onModify = (idx?: number, item?: string) => {
    modify(idx, item);
  }
  
  const onRemove = (idx?: number) => {
    remove(idx);
  }

  return {
    source,
    onAdd,
    onModify,
    onRemove,
  }
}

export default useStoreHook;