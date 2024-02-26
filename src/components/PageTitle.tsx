import { Title } from '@solidjs/meta'

const PageTitle = (props: { content: string }) => {
	return <Title>{props.content} | metar.sk</Title>
}

export default PageTitle
