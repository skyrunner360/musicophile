import PlayerComp from "@/components/PlayerComp";
import SidebarComp from "@/components/SidebarComp";

export default function AppHomeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div className="h-[100dvh] relative">
      {/* Include shared UI here e.g. a header or sidebar */}
      <SidebarComp />
      {children}
      <div className="ml-[245px] w-[calc(100%-245px)] p-2 absolute bottom-0">
        <PlayerComp />
      </div>
    </div>
  );
}
