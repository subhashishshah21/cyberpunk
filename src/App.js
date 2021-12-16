import "./App.css";
import { Header } from "./Components/Header";

import axios from "axios";
import { useEffect, useState } from "react";
import { PunkList } from "./Components/PunkList";
import Main from "./Components/Main";
function App() {
  const [punkListData, setpunListData] = useState([]);
  const [selectedPunk, setselectedPunk] = useState(0);
  useEffect(() => {
    const getNfts = async () => {
      const openseadata = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x9fab790Aa769c0b5d185F8B95921CBFf074a4F8b"
      );
      console.log(openseadata.data.assets);
      setpunListData(openseadata.data.assets);
    };
    return getNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <PunkList
            punkListData={punkListData}
            setselectedPunk={setselectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
