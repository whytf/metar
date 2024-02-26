import { Meta } from '@solidjs/meta'
import Header from '../components/Header'
import Logo from '../components/Logo'
import PageContent from '../layouts/PageContent'

const Legal = () => {
	return (
		<PageContent title="Legal" description="">
			<Meta name="robots" content="noindex" />

			<div class="container text-black dark:text-white-dark">
				<Header />
				<h1 class="pt-16 text-4xl font-bold">Legal</h1>
				<h2 class="pt-16 text-3xl">Disclaimer</h2>
				<p class="mt-4">
					Metar.sk is provided for informational purposes only and should not be relied upon for making critical decisions, including, but not limited to, flight planning or other aviation-related activities.
				<br/>
					The data displayed on metar.sk is gathered from publicly available sources and may be inaccurate, incomplete, or outdated. 
				<br/>
					You are solely responsible for verifying the accuracy and completeness of all information before using it for any purpose.
				<br/>
					By using metar.sk, you agree to these terms and conditions and acknowledge that the developers and contributors of metar.sk are not liable for any damages or losses arising from the use of this app or the information it provides.
				<br/>
					It is highly recommended to always consult official sources and qualified aviation professionals before making any aviation-related decisions.
				<br/>
					Airport related data is sourced from <a href="https://OurAirports.com">OurAirports.com</a> and METAR/TAF data is sourced from <a href="https://AviationWeather.gov">AviationWeather.gov</a> 
				</p>
				<h2 class="pt-8 text-3xl">Contact</h2>
				<p>
					<a class="mt-4 block" href="mailto: lukas@tssk.co.uk">
						lukas@tssk.co.uk
					</a>
				</p>
			</div>
		</PageContent>
	)
}

export default Legal
