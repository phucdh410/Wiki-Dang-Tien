import { PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="max-w-4xl m-auto border border-solid border-secondary my-10 rounded-xl">
      <div className="p-4 border-b border-solid border-secondary bg-neutral-secondary-soft rounded-t-xl">
        Some thing header
      </div>
      <div className="p-4 flex mb-100">
        <Sidebar />
        <div className="p-6 bg-neutral-secondary text-medium text-black rounded-base w-full">
          {children}
        </div>
      </div>
    </main>
  );
};
