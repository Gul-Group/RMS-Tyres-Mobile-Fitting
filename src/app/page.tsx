import { TvIcon } from "@heroicons/react/16/solid";
import { Button } from "@heroui/react";

export default function Home() {  
  return (
    <main>
      <p>Here is Text</p>
      <TvIcon className="size-5 text-blue-500"/>
      <Button color="primary">Button</Button>
    </main>
  );
}
