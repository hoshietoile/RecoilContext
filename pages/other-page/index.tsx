import StoreContextProvider from "@/provider/store.provider";
import ChildComponent from "../components/ChildComponent";
import GrandChildComponent from "../components/GrandChildComponent";
import useListRecoil from "@/store/useList.recoil";

const OtherPage = () => {
  const listStore = useListRecoil();
  return (
    <StoreContextProvider store={listStore}>
      <ChildComponent>
        <GrandChildComponent />
      </ChildComponent>
    </StoreContextProvider>
  )
}

export default OtherPage;