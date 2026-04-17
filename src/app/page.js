import Banner from "@/components/homepage/Banner";
import FriendsPage from "./friends/page";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-[#F8FAFC]">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between py-32 px-16 sm:items-start bg-[#F8FAFC]">
        <Banner></Banner>
<div className="flex justify-center items-center min-h-[400px] w-full">
  <Suspense fallback={<LoadingSpinner />}>
    <FriendsPage />
  </Suspense>
</div>
      </main>
    </div>
  );
}
