import { AlertColor } from "@mui/material";
import React, { useState } from "react";
import { Notification } from "../components";

type ContextProps = {
    getError: (msg:string) => void
}

const NotificationContect = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{children: JSX.Element}> = ({
    children
}) => {
    const [msg, setMsg] = useState("")
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState<AlertColor | undefined>(undefined)

    const getError = (msg: string) => {
        setSeverity("error")
        setOpen(true);
        setMsg(msg);
    };

    const handleClose = () => {
        setOpen(false)
    };

    const value = {
        getError
    }
    return (
        <NotificationContect.Provider value={value}>
            <Notification
                handleClose={handleClose}
                open={open}
                severity={severity}
                msg={msg}
            />
            {children}
        </NotificationContect.Provider>
    )
}

export const useNotification = () => {
    const context = React.useContext(NotificationContect);
    if(!context) throw new Error("No existe contexto");
    return context;
}