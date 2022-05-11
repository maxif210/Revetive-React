import { useContext } from "react";
import LayoutContent from "../context/LayoutContent";

const useLayout = () => {
    return useContext(LayoutContent)
}

export default useLayout;