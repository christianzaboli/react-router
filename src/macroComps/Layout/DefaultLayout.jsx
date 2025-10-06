import { Outlet } from "react-router-dom"
import MyHeader from "../MyHeader"
import MyFooter from "../MyFooter"

export default function DefaultLayout() {
    return (
        <>
        <MyHeader/>
        <Outlet/>
        <MyFooter/>
        </>
    )
}