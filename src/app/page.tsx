import Story from "./components/Story/StoryCircle";
import Bio from "./components/Information/Bio";
import Infor from "./components/Information/Infor";
import Gallery from "./components/Gallery/Gallery";

export default function Home() {
  return (
    <div className="w-[55%] bg-[#F1D3CE]">
       <h1 className="font-bold text-5xl p-5">paradas_petin</h1>
       <Infor/>
       <Bio/>
       <Story/>
       <Gallery/>
    </div>
  );
}
