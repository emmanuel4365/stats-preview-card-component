import Image from "next/image";

function Homepage() {
  return (
    <div className="stats-container">
      <div className="writeup-container w-1/2">
        <div className="stat-center min-w-[403px] min-h-[232px] flex flex-col gap-y-3 items-center justify-center">
          <h1 className="heading w-[403px] h-[88px] text-[#FFFFFF] text-[36px] font-bold">Get <span className="insight-text text-[#AB5CDB] ">insights</span> that help your business grow.</h1>
          <p className="paragraph w-[374px] h-[75px]">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
          <div className="stats min-w-[374px] min-h-[75px] flex items-center justify-center">
            <div className="company-stat w-[66px] h-[56px]"><span className="number">10K+</span><span className="stat-text">COMPANIES</span></div>
            <div className="template-stat w-[66px] h-[56px]"><span className="number">314</span><span className="stat-text">TEMPLATES</span></div>
            <div className="query-stat w-[66px] h-[56px]"><span className="number">12M+</span><span className="stat-text">QUERIES</span></div>
          </div>
        </div>
      </div>
      <div className="image-container relative h-[446px] w-1/2">
        <Image src="/office-image.png" alt="office image" fill priority />
      </div>
    </div>
  );
}
export default Homepage;