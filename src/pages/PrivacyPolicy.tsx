import { Meta } from '@solidjs/meta'
import Header from '../components/Header'
import Logo from '../components/Logo'
import PageContent from '../layouts/PageContent'

const PrivacyPolicy = () => {
	return (
		<PageContent title="Privacy policy" description="">
			<Meta name="robots" content="noindex" />

			<div class="container text-black dark:text-white-dark">
				<Header />
				<h1 class="pt-16 text-4xl font-bold">Privacy policy</h1>
				<p class="mt-4">
					Original owner has implemented analytics, my fork is analytics free. For more information, please visit the{' '}
					<a href="https://github.com/whytf/metar/blob/2952d8c604f2f1d55912b08562c8489453ea2497/index.html" target="_blank">
						Commit removing analytics
					</a>
					.
				</p>
			</div>
		</PageContent>
	)
}

export default PrivacyPolicy
