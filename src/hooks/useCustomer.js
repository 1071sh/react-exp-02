import { useState, useEffect } from "react";
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_SHEET_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
const SHEET_NAME = "test";

const useCustomer = () => {
  // 1.スプレッドシートAPIのデータを保持したのでuseStateを準備する
  const [data, setData] = useState([]);

  // 2.useEffectを使ってAPIのデータを取得します
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
      const res = await fetch(url);
      const json = await res.json();

      // jsの処理を使って画面の表示するデータを整形します
      if (json.values) {
        const mapped = json.values.map((row) => ({
          id: Number(row[0]),
          title: row[1],
          date: row[2],
          tel: row[3],
        }));
        // console.log(mapped, "mapped");
        setData(mapped);
        // このif文の綴じなので下は消さない
      }

      // console.log(json, "スプレッドシートAPI");
    };

    // fetchDataを実行する
    fetchData();
  }, []);

  return {
    data,
  };
};

export default useCustomer;
