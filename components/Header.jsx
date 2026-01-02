import { useTheme } from '../hooks/useTheme.jsx'


function Header() {
const { theme, setTheme } = useTheme()


return (
<header className="header">
<h1>Smart Task & Focus Dashboard</h1>
<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
{theme === 'light' ? 'Dark Theme' : 'Light Theme'}
</button>
</header>
)
}
export default Header;