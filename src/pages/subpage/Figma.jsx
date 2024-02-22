import React from "react";
import Sidebar from "../../components/Sidebar";
import Mainhead from "../../components/Mainhead";
import Content from "../../components/Content";

const Figma = () => {
  return (
    <div className="sm:containers px-5 mt-20 h-screen flex">
      <Sidebar />
      <Mainhead
        head="Figma"
        title="Figma"
        subtitle="Every component recreated in Figma. With customizable props, typography and icons."
        paragraph="I am a married man with 2 children My wife traveled to UK after successfully scholarships  for 2years only.. But still now is 4yrs she has not yet returned back every time I ask her why she have not returned as we agreed she will complained about different challenges she is going through over there. Early this year, she met a white man who promised to help her have a stay and better life on a condition of divorcing me and getting married to him. My wife sent me a divorce letter which I need to sign to prove we are no more married . She told me I should act along because through the White man she will have more opportunities over there and also have financial stability and be given a stay in UK.and she will be sending me money to support our 2 children. But if I didnt sign it she might be deported anytime She also warned me not to tell anyone including our families because she told me we should make it a secret. I am confused. 
            "
      />
      <Content />
    </div>
  );
};

export default Figma;
