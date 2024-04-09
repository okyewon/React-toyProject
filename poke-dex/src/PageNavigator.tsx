import { Route, Routes } from "react-router";
import PokeDetail from "./Detail/PokeDetail";
import PokeCardList from "./List/PokeCardList"

const PageNavigator = () => {
    return (
        <Routes>
            <Route path="/" element={<PokeCardList />} />
            <Route path="/pokemon/:name" element={<PokeDetail />} />
        </Routes>
    )
}

export default PageNavigator;