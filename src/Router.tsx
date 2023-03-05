import { Route, Routes } from "react-router-dom"
import { RouterLayout } from "./common"
import { HomePage, LoginPage } from "./pages"

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout/>}>
                <Route path="/" element={<HomePage/>}/>
            </Route>
                <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}