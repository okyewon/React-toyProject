import { useLayoutEffect, useMemo } from "react";
import { useMap } from "../hooks/useMap";
import { PlactType } from "./mapTypes";

interface MapMarkerProps {
    place: PlactType
}

const MapMarker = (props:MapMarkerProps) => {
    const map = useMap();

    const marker = useMemo(() => {
        const marker = new kakao.maps.Marker({
            position: props.place.position
        });


        return marker;
    }, []);

    useLayoutEffect(() => {
        marker.setMap(map);

        return () => {
            marker.setMap(null);;
        }
    }, [map]);

    return (
        <>

        </>
    )
}

export default MapMarker;