import { Suspense } from "react";
import ClientComponent from "./client";
import ServerComponent from "./server";

export default function Page() {
  return (
    <ClientComponent>
      <Suspense>
        {/* @ts-ignore */}
        <ServerComponent />
      </Suspense>
    </ClientComponent>
  );
}
