import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import todaySales from "./assets/TodaySales.png";
import visitor from "./assets/visitorInsights.png";
import total from "./assets/TotalRevenue.png";
import customer from "./assets/CustomerSatisfaction.png";
import target from "./assets/Target.png";
import top from "./assets/TopProducts.png";
import sales from "./assets/Sales.png";
import volume from "./assets/Volume.png";
function App() {
  return (
    <div className="bg-green-200 h-screen w-screen flex justify-center items-center ">
      <div className="bg-white w-[90%] h-[90%] rounded-lg shadow-lg flex">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] mt-1 ">
          <Navbar />
          <div className="w-[99.9%] h-[89.8%] bg-slate-50 rounded-lg ">
            <div className="w-[100%] h-[32%] flex pl-8 pt-3 gap-5">
              <img className="rounded-lg h-48 shadow-sm" src={todaySales} />
              <img className="rounded-lg h-48 shadow-sm" src={visitor} />
            </div>
            <div className="w-[100%] h-[32%] flex pl-8 pt-3 gap-5">
              <img className="rounded-lg w-96 h-48 shadow-sm" src={total} />
              <img className="rounded-lg h-48 shadow-sm" src={customer} />
              <img className="rounded-lg h-48 shadow-sm" src={target} />
            </div>
            <div className="w-[100%] h-[32%] flex pl-8 pt-3 gap-5">
              <img className="rounded-lg w-96 h-48 shadow-sm" src={top} />
              <img className="rounded-lg h-48 shadow-sm" src={sales} />
              <img className="rounded-lg h-48 shadow-sm" src={volume} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
