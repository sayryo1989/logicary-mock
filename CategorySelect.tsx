// DebateCategories.js export const debateCategories = { '社会問題': [ '少子化対策に政府は十分な支援をしているか？', '働き方改革は労働者にとって本当にプラスか？', 'ベーシックインカムは導入すべきか？' ], '日常': [ 'プリンとシュークリーム、どっちが好き？', '朝型と夜型、どちらが効率的？', '夏と冬、どっちが好き？' ] };

// Home.js import { useNavigate } from 'react-router-dom'; import { Button } from '@/components/ui/button';

export default function Home() { const navigate = useNavigate();

const handleCategoryClick = (category) => { navigate(/debate?category=${encodeURIComponent(category)}); };

return ( <div className="flex flex-col items-center justify-center min-h-screen gap-4"> <h1 className="text-2xl font-bold mb-4">ディベートのテーマカテゴリを選んでください</h1> <Button onClick={() => handleCategoryClick('社会問題')}>社会問題</Button> <Button onClick={() => handleCategoryClick('日常')}>日常</Button> </div> ); }

// Debate.js import { useLocation } from 'react-router-dom'; import { useEffect, useState } from 'react'; import { debateCategories } from './DebateCategories';

function getRandomTheme(category) { const themes = debateCategories[category] || []; const randomIndex = Math.floor(Math.random() * themes.length); return themes[randomIndex]; }

export default function Debate() { const location = useLocation(); const params = new URLSearchParams(location.search); const category = params.get('category');

const [theme, setTheme] = useState('');

useEffect(() => { if (category) { setTheme(getRandomTheme(category)); } }, [category]);

return ( <div className="p-4"> <h2 className="text-xl font-semibold mb-4">テーマ: {theme}</h2> {/* ここにディベートコンポーネントを追加 */} </div> ); }
