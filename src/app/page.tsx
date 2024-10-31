export default function Home() {
  return (
    <div className="w-[55%] p-5 rounded-2xl bg-[#F1D3CE]">
       <h1 className="font-bold text-5xl">paradas_petin</h1>
       <div className="grid grid-cols-4 items-center justify-around font-semibold text-3xl my-5 text-center">
        <div className="justify-self-start">
          <img src="./profile-picture.jpg" className="rounded-full" height={180} width={180}/>
        </div>
        <div className="w-[100px] mx-5">
          <h3>100</h3>
          <h4 className="text-xl">posts</h4>
        </div>
        <div className="w-[100px] mx-5">
          <h3>100</h3>
          <h4 className="text-xl">followers</h4>
        </div>
        <div className="w-[100px] mx-5">
          <h3>100</h3>
          <h4 className="text-xl">following</h4>
        </div>
       </div>
       <h3 className="text-xl font-semibold">Fh Lk</h3>
       <p>KMUTT || SIT || IT26 🌸🌸🌸</p>
       <p>YOU HAVE YOUR LIFE. I HAVE MY LIFE. WE ARE DIFFERENT.</p>
    </div>
  );
}
