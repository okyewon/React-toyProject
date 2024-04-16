import { useState } from "react";
import DynamicMap from "./Map/DynamicMap";
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import MapMarkerController from "./Map/MapMarkerController";
import { PlactType } from "./Map/mapTypes";
import SearchLocation from "./Map/SearchLocation";

const App = () => {
    const [places, setPlaces] = useState<PlactType[]>([]);

    return (
        <KakaoMapScriptLoader>
            <DynamicMap>
                <MapMarkerController places={places} />
                <SearchLocation onUpdatePlaces={(places) => {
                    setPlaces(places);
                }} />
            </DynamicMap>
        </KakaoMapScriptLoader>
    )
}

export default App;