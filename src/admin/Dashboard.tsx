import { AdminSidebar } from "./components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Toaster } from "@/components/ui/sonner";

export function Dashboard() {
  const navigate = useLocation();
  const bread = navigate.pathname.split("/");
  bread.shift();

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
          <Outlet />
          <Toaster />
        </div>
      </div>
    </section>
  );
}
