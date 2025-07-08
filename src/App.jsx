// ① src/components/CategorySelect.tsx import React from "react";

type Props = { selectedCategory: string; onSelect: (category: string) => void; };

const CategorySelect: React.FC<Props> = ({ selectedCategory, onSelect }) => { return ( <div className="p-4"> <h2 className="text-lg mb-2">テーマカテゴリを選択：</h2> <div className="flex gap-4"> {['社会問題', '日常'].map((category) => ( <button key={category} onClick={() => onSelect(category)} className={px-4 py-2 rounded-xl border shadow ${selectedCategory === category ? 'bg-gray-200' : 'bg-white'}} > {category} </button> ))} </div> </div> ); };

export default CategorySelect;

// ② src/components/ThemeDisplay.tsx import React from "react";

type Props = { category: string; };

const themes: Record<string, string[]> = { 社会問題: [ "ベーシックインカムは導入すべきか", "日本に死刑制度は必要か", "18歳選挙権は効果的か", ], 日常: [ "シュークリーム vs プリン、優れているのは？", "朝シャワー派 vs 夜シャワー派", "紙の本 vs 電子書籍、読むならどっち？", ], };

const ThemeDisplay: React.FC<Props> = ({ category }) => { return ( <div className="p-4"> <h2 className="text-lg mb-2">選択カテゴリ: {category}</h2> <ul className="list-disc list-inside"> {themes[category]?.map((theme, i) => ( <li key={i}>{theme}</li> ))} </ul> </div> ); };

export default ThemeDisplay;

// ③ src/pages/index.tsx import React, { useState } from "react"; import CategorySelect from "../components/CategorySelect"; import ThemeDisplay from "../components/ThemeDisplay";

export default function Home() { const [category, setCategory] = useState("社会問題");

return ( <main className="p-8"> <h1 className="text-2xl font-bold mb-4">Logicary モックアップ</h1> <CategorySelect selectedCategory={category} onSelect={setCategory} /> <ThemeDisplay category={category} /> </main> ); }

// ④ src/App.tsx import React from "react"; import Home from "./pages/index";

function App() { return <Home />; }

export default App;

// ⑤ src/main.tsx import React from "react"; import ReactDOM from "react-dom/client"; import App from "./App"; import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render( <React.StrictMode> <App /> </React.StrictMode> );

// ⑥ index.html（public/index.html）

<!DOCTYPE html><html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Logicary Mock</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>// ⑦ index.css（src/index.css） body { font-family: sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }

h1, h2 { color: #333; }

