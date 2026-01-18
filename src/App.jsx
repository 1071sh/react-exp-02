import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("名前入力");
  const [email, setEmail] = useState("メールアドレス入力");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    // この中に書きます🤗
    // この下は消さない

    console.log("コンポーネントがマウントされました");
  }, []);

  console.log("コンポーネントがレンダリングされました");

  return (
    <>
      <div>
        <p>名前が入ります</p>
        <input type="text" value={name} placeholder="名前を入力してください" onChange={handleNameChange} />
      </div>
      <div>メールアドレスが入ります</div>
      <input type="text" value={email} placeholder="メールアドレスを入力してください" onChange={handleEmailChange} />
    </>
  );
}

export default App;
