import axios from 'axios';
import { useState, useEffect } from 'react';
import Body from '../components/Body/Body';
import { HeaderSearch } from '../components/Header/Header';

export default function HomePage() {
  const [vods, setVods] = useState([]);
  const [autocompleteData, setAutocompleteData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/api/vod');
        setVods(res.data);
        const autocomplete = res.data.map((vod: any) => vod?.title);
        setAutocompleteData(autocomplete);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const getVods = async (search: string) => {
    try {
      const res = await axios.get(`/api/vod?search=${search}`);
      setVods(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HeaderSearch autocompleteData={autocompleteData} getVods={getVods} />
      <Body vods={vods} />
    </>
  );
}
