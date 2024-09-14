import Dashboard from "@/Components/Dashboard";

export default function Layout({children}){
    return(
        <div className="flex">
            <Dashboard/> 
            <main className="flex-1">{children}</main>
        </div>
    )
}