import React from "react";
import { Button } from "./Button";

export default function NewPostForm() {
  return (
    <>
      <form className="flex flex-col gap-2 border-b px-6 py-2">
        <div className="flex gap-4">
          {/* <ProfileImage src='#url' /> */}
          {/* form text and profile image goes here */}
          <textarea
            className="flex-grow resize-none overflow-hidden outline-none"
            placeholder="Rave, estatic. Type here ⚡️"
          />
        </div>
        <Button>Post</Button>
      </form>
    </>
  );
}
