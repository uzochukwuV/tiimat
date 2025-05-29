import { AdminSidebar } from "./components/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";

export function Dashboard() {
  const navigate = useLocation();
  const bread = navigate.pathname.split("/");
  bread.shift();

  const route = useNavigate()


  useEffect(()=>{
    
    authenticate();
    
  },[])

  function authenticate() {
    let authKey = window.localStorage.getItem("auth");
    console.log(authKey);
  
    if (authKey !== "productivity") {
      let key: string|null;
      do {
        key = prompt("Authentication key:");
        if (key === "" || key == null) {
          alert("Authentication cancelled.");
          route("/")
        }
        key = key!.trim();
        if (key === "productivity") {
          window.localStorage.setItem("auth", key);
          window.location.reload();
          break;
        } else {
          alert("Incorrect key. Please try again.");
          route("/")
        }
      } while (true);
    }
  }
  
 
  

  return (
    <section id="dashboard" className=" bg-white absolute top-0 left-0 right-0 bottom-0">
      <div className="flex ">
        <AdminSidebar />
        <div className="flex-1   rounded">
          <div className=" h-20 border-b mb-2 flex items-center px-6">
            <Breadcrumb>
              <BreadcrumbList>
                {bread.map((crumb, i) => (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        className=" text-base hover:text-black"
                        href={"/" + bread.slice(0, i + 1).join("/")}
                      >
                        {crumb.toLocaleUpperCase()}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className=" bg-white">
            <Outlet />
          </div>
          <Toaster />
        </div>
      </div>
    </section>
  );
}
