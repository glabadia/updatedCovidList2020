import { useState, useEffect } from "react";
import axios from "axios";

const CountryInfoStats = url => {
  const [result, setResult] = useState({ data: "", status: 0, loading: true });
  useEffect(() => {
    let mounted = true;
    async function getData() {
      console.log(url);
      if (mounted) {
        const response = await axios(url)
          .then(r => {
            console.log("Response: ", r.data);
            //r.data, r.status
            // setResult({ data: r["data"], status: r["status"] });

            return { data: r["data"], status: r["status"] };
          })
          .catch(err => {
            console.log("Error: ", err["response"]["data"]["error"]["message"]);
            //err.response.data.status
            // setResult({
            //   data: err["response"]["data"]["error"]["message"],
            //   status: err["response"]["data"]["status"]
            // });
            return {
              data: err["response"]["data"]["error"]["message"],
              status: err["response"]["data"]["status"]
            };
          });
        setResult(response);
      }
    }
    getData();
    return () => (mounted = false);
  }, [url]);

  // if (!result) return null;

  return { ...result, loading: false };
};

export default CountryInfoStats;
