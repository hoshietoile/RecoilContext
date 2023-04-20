import { StoreContext } from '@/provider/store.provider';
import React, { useContext, useMemo } from 'react';

const GrandChildComponent = () => {
  const { storeName, source } = useContext(StoreContext);
  
  const joined = useMemo(() => {
    return source.join(', ');
  }, [source])

  return <div>
    GrandChildComponent
    <p>{storeName}:{joined}</p>
  </div> 
}

export default GrandChildComponent;