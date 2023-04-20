import { atom, useRecoilValue, useRecoilCallback } from 'recoil'

const tableAtom = atom<string[]>({
  key: 'table',
  default: [],
});

const useTableRecoil = () => {
  const name = "UseTableRecoil";

  const source = useRecoilValue<string[]>(tableAtom);
  
  const add = useRecoilCallback(({ set }) => (item: string) => {
    set(tableAtom, (prev: string[]) => {
      const mid: number = prev.length / 2;
      return [...prev.slice(0, mid), item, ...prev.slice(mid)];
    })
  }, [tableAtom])

  const modify = useRecoilCallback(({ set }) => () => {
    set(tableAtom, (prev: string[]) => {
      return prev.map((i, idx) => {
        if (idx === prev.length - 1) {
          return "modified";
        }
        return i;
      })
    })
  }, [tableAtom])

  const remove = useRecoilCallback(({ set }) => () => {
    set(tableAtom, []);
  }, [tableAtom])

  
  return {
    name,
    source,
    add,
    modify,
    remove,
  }
}

export default useTableRecoil;