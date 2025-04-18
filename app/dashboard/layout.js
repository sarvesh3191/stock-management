import ThemeProvider from "@/components/theme/ThemeProvider";
import { Inter } from "next/font/google";
import DashboardTopNav from "@/components/navigations/DashboardTopNav";
import SideNav from "@/components/navigations/SideNav";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stock Manager Application",
  description:
    "Next JS App for managing the stocks in an easy and effective manner.",
};

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 relative min-h-screen flex flex-col ${inter.className}`}>
        <ThemeProvider>
          <DashboardTopNav />
          <div className="flex flex-row justify-between items-stretch gap-0 flex-1">
            <SideNav />
            <div className="w-full bg-base-200">
              <div className="container mx-auto p-5">{children}</div>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
