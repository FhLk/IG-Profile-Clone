import Bio from "./components/Information/Bio";
import Infor from "./components/Information/Infor";

export default function Home() {
  return (
    <div className="w-[55%] p-5 rounded-2xl bg-[#F1D3CE]">
       <h1 className="font-bold text-5xl">paradas_petin</h1>
       <Infor/>
       <Bio/>
    </div>
  );
}
