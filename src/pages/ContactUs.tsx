import { Meta } from '@solidjs/meta'
import Header from '../components/Header'
import Logo from '../components/Logo'
import PageContent from '../layouts/PageContent'

const ContactUs = () => {
	return (
		<PageContent title="Contact" description="">
			<Meta name="robots" content="noindex" />

			<div class="container text-black dark:text-white-dark">
				<Header />
				<h1 class="pt-16 text-4xl font-bold">Contact</h1>
				<h2 class="pt-16 text-3xl">LinkedIn</h2>
				<p class="mt-4">
					<a class="mt-4 block" href="https://www.linkedin.com/in/lukasgiret/">
						https://www.linkedin.com/in/lukasgiret/
					</a>
				</p>
				<h2 class="pt-8 text-3xl">Mail</h2>
				<p>
					<a class="mt-4 block" href="mailto: lukas@tssk.co.uk">
						lukas@tssk.co.uk
					</a>
				</p>
			</div>
		</PageContent>
	)
}

export default ContactUs
