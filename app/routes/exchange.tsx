import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Currency Exchange" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (

  

   <div className="items-center justify-center h-screen text-center flex flex-col">

    <div className="mb-10">
      <h2 className="text-white text-4xl">Currency Converter</h2>
      <span className="text-white text-lg">Check live foreign currency exchange rates</span>
    </div>


    
    <div className="bg-black w-9/12 mx-auto py-10 shadow-lg rounded-lg">
        <div className="flex justify-center gap-5">
            <label className="text-white">
                <h2>Amount</h2>
                <input className="rounded-lg py-3 bg-lila px-3 text-black" type="text"/>
            </label>

            <label className="text-white">
                <h2>From</h2>
                <input className="rounded-lg py-3 bg-lila px-3 text-black" type="text"/>
            </label>

            <label className="text-white">
                <h2>To</h2>
                <input className="rounded-lg py-3 bg-lila px-3 text-black" type="text"/>
            </label>
        </div>
        <div className="flex justify-end mt-10">
        <button className="px-10 py-3 bg-lila rounded-lg">Convert</button>
        </div>
    </div>


   </div>    
  );
}
