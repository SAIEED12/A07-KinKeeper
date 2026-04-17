import FriendCard from "@/components/ui/FriendCard";

const friendsPromise = async function () {
  const res = await fetch("https://kinkeeper-tau.vercel.app//data.json");
  const data = await res.json();
   await new Promise((resolve) => setTimeout(resolve, 1000));
  return data;
};

const FriendsPage = async() => {

    const friends = await friendsPromise();

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold text-[#1F2937] mb-6 mt-8">
        Your Friends
      </h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {
      friends.map((friend,ind) => (
        <FriendCard key={ind} friend={friend} />
      ))
      }
    </div>
    </div>
  );
};

export default FriendsPage;
