import { Route, Routes } from "react-router-dom";
// import ServicesTable from "./tableservices/";
import AddServices from "./addservices/AddServices";
import DetailServices from "./detailservices/DetailServices";

const Services = () => {
    return (
        <Routes>
            {/* <Route path="/add">
                <AddServices />
            </Route>
            <Route path="/edit">
                <AddServices />
            </Route>
            <Route path="/detail">
                <DetailServices />
            </Route>
            <Route path="/table">
                <ServicesTable />            
            </Route> */}
        </Routes>
    );
};

export default Services;