import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Homepage" }
  ];
};

export default function Index() {
  return (

  

   <div className="flex items-center justify-center h-screen text-center bg-gradient-to-b from-mainpurple from-10% to-purple-400">
    <div>
      <h2 className="text-white text-4xl">Trusted Global Currency Converter & Money Transfer Solutions</h2>
      <span className="text-white text-lg">Best source for currency conversion, sending money online and tracking exchange rates</span>
      <br />
      <br />
      
      <Link to="/exchange">
      <button className="px-20 py-5 bg-lila rounded-xl shadow-lg">Convert</button>
      </Link>
    </div>
   </div>

  //  <div className="exchangeContainer">
  //     <input type="text" name="" id="" />
  //  </div>

    
  );
}
