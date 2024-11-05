import SidebarComp from "@/components/SidebarComp";

export default function AppHomeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <SidebarComp />

      {children}
    </section>
  );
}
