import React, { Suspense, useState } from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import UseModel from "./components/i18n/UseModel";

const App = () => {
  const [language, setLanguage] = useState("en");
  return (
    <div>
      {/* <div className="bg-black py-4">
        <Header language={language} setLanguage={setLanguage} />
        <div className="text-white">
          <Services language={language} />
        </div>

      </div> */}
      <Suspense fallback="Loading...">
        <UseModel />
      </Suspense>
    </div>
  );
};

export default App;
