import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://uvybqulkppefqiugpljz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2eWJxdWxrcHBlZnFpdWdwbGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2MTA5NDMsImV4cCI6MjAyOTE4Njk0M30.fL7HpdnrH3aQAsKAZuJetV1tpUbSktoC9GPPuN_7xBk"
);

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;
