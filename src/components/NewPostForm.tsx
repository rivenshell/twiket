import React from "react";
import { Button } from "./Button";
import { ProfileImage } from "./Profileimage";
import { useSession } from "next-auth/react";

export default function NewPostForm() {
  const sesson = useSession();

  if (sesson.status !== "authenticated") return;

  return (
    <>
      <form className="flex flex-col gap-2 border-b px-6 py-2">
        <div className="flex gap-4">
          <ProfileImage src={sesson.data.user} />
          {/* form text and profile image goes here */}
          <textarea
            className="flex-grow resize-none overflow-hidden outline-none"
            placeholder="Rave, estatic. Type here ⚡️"
          />
        </div>
        <Button className=" self-end">Post</Button>
      </form>
    </>
  );
}
