import { type NextPage } from "next";
import NewPostForm from "~/components/NewPostForm";

const Home: NextPage = () => {
  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-slate-50 pt-2">
        <h1 className="mb-2 px-4 text-xl font-bold">Home</h1>
      </header>
      <NewPostForm />
    </>
  );
};

export default Home;
