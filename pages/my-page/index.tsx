import StoreContextProvider from "@/provider/store.provider";
import ChildComponent from "../components/ChildComponent";
import GrandChildComponent from "../components/GrandChildComponent";
import useTableRecoil from "@/store/useTable.recoil";

const MyPage = () => {
  const tableStore = useTableRecoil();
  return (
    <StoreContextProvider store={tableStore}>
      <ChildComponent>
        <GrandChildComponent />
      </ChildComponent>
    </StoreContextProvider>
  )
}

export default MyPage;