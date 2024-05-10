'use client'
import React from 'react'
import Link from "next/link";
import {navLinks} from "@/constants";
import ModeToggle from "@/components/shared/mode-toggle";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import Mobile from "@/app/(root)/_components/mobile";

function Navbar() {
	const pathName = usePathname()
	return (
		<div className={"h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background"}>
			<div className={" container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between"}>
				{/*Logo*/}
				<Link href={"/"}>
					<h1 className={"text-4xl font-creteRound"}>LOGO</h1>
				</Link>
				{/*	Nav links*/}
				<div className={'gap-2 hidden md:flex'}>
					{navLinks.map(nav => (
						<Link
							href={nav.route}
							key={nav.route}
							className={cn("hover:bg-orange-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors",
								pathName === nav.route && 'text-orange-400'
							)}
						>
							{nav.name}
						</Link>
					))}
				</div>
				{/*	Search*/}
				<div className={"gap-1 flex items-center"}>
					<ModeToggle/>
					<Mobile/>
				</div>
			</div>
		</div>
	)
}

export default Navbar
