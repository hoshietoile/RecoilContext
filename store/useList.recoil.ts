import { atom, useRecoilValue, useRecoilCallback } from 'recoil'

const listAtom = atom<string[]>({
  key: 'list',
  default: [],
});

const useListRecoil = () => {
  const name = "UseListRecoil";

  const source = useRecoilValue<string[]>(listAtom);
  
  const add = useRecoilCallback(({ set }) => (item: string) => {
    set(listAtom, (prev: string[]) => {
      return [...prev, item];
    })
  }, [listAtom])

  const modify = useRecoilCallback(({ set }) => (idx?: number, item?: string) => {
    set(listAtom, (prev: string[]) => {
      return prev.map((i, ix) => {
        if (ix === idx) {
          return item || '';
        }
        return i;
      })
    })
  }, [listAtom])

  const remove = useRecoilCallback(({ set }) => (idx?: number) => {
    set(listAtom, (prev: string[]) => {
      return prev.filter((_, i) => i !== idx);
    })
  }, [listAtom])
  
  return {
    name,
    source,
    add,
    modify,
    remove,
  }
}

export default useListRecoil;