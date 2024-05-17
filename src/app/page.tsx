import Animation from "@/components/Animation";
import Greet from "./greet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  console.log()
  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center p-24 text-broken-white ">
      <Avatar>
        <AvatarImage src="https://github.com/codesan-git.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="text-8xl">HEAR<span className="font-semibold">THE</span><span className="font-extrabold">MOMENT</span></p>
      <Animation />
      <Greet />
      <div>
        <p className="text-8xl">HEAR<span className="font-semibold">THE</span><span className="font-extrabold">MOMENT</span></p>
      </div>
      <div>
        <p className="text-8xl">HEAR<span className="font-semibold">THE</span><span className="font-extrabold">MOMENT</span></p>
      </div>
      <div>
        <p className="text-8xl">HEAR<span className="font-semibold">THE</span><span className="font-extrabold">MOMENT</span></p>
      </div>
      <div>
        <p className="text-8xl">HEAR<span className="font-semibold">THE</span><span className="font-extrabold">MOMENT</span></p>
      </div>
      <div>
        <p className="text-8xl">HEAR<span className="font-semibold">THE</span><span className="font-extrabold">MOMENT</span></p>
      </div>
      <div>
        <p className="text-8xl">HEAR<span className="font-semibold">THE</span><span className="font-extrabold">MOMENT</span></p>
      </div>
      <div>
        <p className="text-8xl">HEAR<span className="font-semibold">THE</span><span className="font-extrabold">MOMENT</span></p>
      </div>
      <div>
        <p className="text-8xl">HEAR<span className="font-semibold">THE</span><span className="font-extrabold">MOMENT</span></p>
      </div>
    </main>
  );
}
