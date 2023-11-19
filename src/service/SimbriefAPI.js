import axios from "axios";

class SimbriefAPI {
  getLastFP(PilotID){
    return axios.get(`https://www.simbrief.com/api/xml.fetcher.php?userid=${PilotID}&json=1`)
  }
}

export default new SimbriefAPI()