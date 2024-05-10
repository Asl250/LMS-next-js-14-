import {ChildProps} from "@/types";
import Navbar from '@/app/(root)/_components/Navbar'

function Layout({children}: ChildProps) {
	return (
		<main>
			<Navbar/>
			{children}
		</main>
	)
}

export default Layout
