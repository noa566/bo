import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHalos from "@/components/PageHalos";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col flex-1 overflow-x-clip">
        <PageHalos />
        <main className="relative flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
