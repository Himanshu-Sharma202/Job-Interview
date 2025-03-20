
import { Metadata } from "next";
import "@/Styles/global.css"; // Ensure the correct file path and naming convention
import Nav from "@/Modules/Navbar";
import Sidebar from "@/Modules/Sidebar";

const BASE_URL = "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
};

export default async function PageLayout(props: { children: React.ReactNode }) {
    
  return (
    <div className="">
      <div className="flex  bg-gray-50">
        {/* Sidebar */}
        <Sidebar   />
        {/* Main Content */}
        <main className=" w-full">
          <Nav   />
          <div className=" ">{props.children}</div>
        </main>
      </div>
    </div>
  );
}
