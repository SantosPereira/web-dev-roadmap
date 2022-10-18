import FrontEndRoadmap from "./tracks/FrontEndRoadmap"
import BackEndRoadmap from "./tracks/BackEndRoadmap"
import DevOpsRoadmap from "./tracks/DevOpsRoadmap"

function TrackRoadmap({trilha}) {
    switch (trilha) {
        case 'front-end':
            return <FrontEndRoadmap />
        case 'back-end':
            return <BackEndRoadmap />
        case 'devops':
            return <DevOpsRoadmap />
        default:
            return <FrontEndRoadmap />
    }
}

export default TrackRoadmap;
