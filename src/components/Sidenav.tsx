import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Sidenav() {
  const seasson = useSession();
  const user = seasson.data?.user;
  return (
    <nav className=" sticky top-0 px-2 py-4 text-lg">
      Twiket
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        {user != null && (
          <li>
            <Link href={`/profiles/${user.id}`}>Profile</Link>
          </li>
        )}
        {user == null ? (
          <li>
            <button onClick={() => void signIn()}>Log Out</button>
          </li>
        ) : (
          <li>
            <button onClick={() => void signOut()}>Log In</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
