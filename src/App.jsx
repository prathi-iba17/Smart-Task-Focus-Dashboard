import Dashboard from './pages/Dashboard'
import { ThemeProvider } from './hooks/useTheme.jsx'


export default function App() {
return (
<ThemeProvider>
<Dashboard />
</ThemeProvider>
)
}