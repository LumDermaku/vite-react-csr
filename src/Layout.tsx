import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { StyledEngineProvider } from "@mui/material";

export const Layout = () => {
    return (
        <StyledEngineProvider injectFirst>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flexGrow: 1, padding: "20px" }}>
                    <Outlet />
                </div>
            </div>
        </StyledEngineProvider>
    );
};
