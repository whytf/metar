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
					Original product owner has implemented analytics, my fork is analytics free. For more information, please visit the{' '}
					<a href="https://github.com/whytf/metar/commit/2952d8c604f2f1d55912b08562c8489453ea2497#diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051" target="_blank">
						Commit removing analytics
					</a>
					.
				</p>
			</div>
		</PageContent>
	)
}

export default PrivacyPolicy
