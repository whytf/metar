import { A } from '@solidjs/router'
import { AiOutlineGithub } from 'solid-icons/ai'
import { FiExternalLink } from 'solid-icons/fi'
import { Component } from 'solid-js'
import DarkModeToggle from './DarkModeToggle'
import Logo from './Logo'

const Footer: Component = () => {
	return (
		<footer class="flex flex-col gap-4 py-16">
			<div class="container flex flex-col items-center justify-center gap-8 md:flex-row">
				<div class="flex flex-col items-center gap-2">
					<Logo showText={false} />
				</div>

				<div class="flex flex-col items-start gap-4 border-l-gray-400 dark:text-white-light md:flex-row md:border-l md:pl-8">
					<A class="mx-auto" href="/about">
						About
					</A>
					<A class="mx-auto" href="/legal">
						Legal
					</A>
					<A class="mx-auto" href="/terms">
						Terms of Use
					</A>
					<A class="mx-auto" href="/privacy">
						Privacy policy
					</A>
					<A class="mx-auto" href="/contact">
						Contact
					</A>
					<A class="mx-auto flex gap-1" href="https://status.metar.sk" target="_blank">
						Status
						<FiExternalLink class="my-auto" size={14} />
					</A>
				</div>

				<div class="flex flex-col items-start gap-4 border-l-gray-400 dark:text-white-light md:flex-row md:border-l md:pl-8">
					<A href="https://github.com/whytf/metar" target="_blank" class="mx-auto flex gap-2">
						<AiOutlineGithub class="my-auto" size={18} />
						GitHub
					</A>
				</div>

				<div class="flex flex-col md:hidden">
					<DarkModeToggle />
				</div>
			</div>
		</footer>
	)
}

export default Footer
