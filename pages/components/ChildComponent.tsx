import { StoreContext } from '@/provider/store.provider';
import React, { ReactNode, useCallback, useContext, useState } from 'react';

type Props = {
  children: ReactNode;
}

const ChildComponent = ({ children }: Props) => {
  const [value, setValue] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  const { onAdd, onModify, onRemove } = useContext(StoreContext);
  
  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
  }
  
  const onClickAdd = useCallback(() => {
    onAdd(value); 
    setValue('')
  }, [value, onAdd])
  
  const onChangeIndex = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setIndex(parseInt(v, 10));
  }
  
  const onClickModify = useCallback(() => {
    onModify(index, value)
  }, [index, value, onModify])
  
  const onClickRemove = useCallback(() => {
    onRemove(index)
  }, [index, onRemove])

  return <div>
    ChildComponent
    {children}
    <input value={value} onChange={onInput} placeholder='please input'></input>
    <p></p>
    <input value={String(index)} onChange={onChangeIndex} type='number'></input>
    <p></p>
    <button onClick={onClickAdd}>Add</button>
    <button onClick={onClickModify}>Modify</button>
    <button onClick={onClickRemove}>Remove</button>
  </div> 
}

export default ChildComponent;