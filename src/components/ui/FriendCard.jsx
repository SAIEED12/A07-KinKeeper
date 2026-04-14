import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({friend}) => {
    return (
<Link href={`/friends/${friend.id}`} className="card bg-base-100 shadow-sm">
  <figure className="px-10 pt-10">
    <Image
      src={friend.picture}
      alt={friend.name}
      width={100}
      height={100}
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p>{friend.days_since_contact}d ago</p>
    <p>{friend.tags.map((tag) => (
      <span key={tag} className="badge bg-green-200 mr-2 uppercase">
        {tag}
      </span>
    ))}</p>
    <p className={`rounded-full px-3 py-1 mt-1 ${
      friend.status === 'Overdue' ? 'bg-red-500 text-white' :
      friend.status === 'On-track' ? 'bg-green-800 text-white' :
      friend.status === 'Almost Due' ? 'bg-[#EFAD44] text-white' :
      'bg-gray-300 text-gray-700'
    }`}>
      {friend.status}
    </p>
  </div>
</Link>
    );
};

export default FriendCard;