// assets
import { Roboto } from 'next/font/google';
import '@assets/app.css';

// fonts
const font = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	variable: '--font-roboto',
});

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en' className={font.className}>
			<body>{children}</body>
		</html>
	);
};

export default Layout;
