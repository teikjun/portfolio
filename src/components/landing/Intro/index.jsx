import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi, I'm Teik Jun!</h1>
				<h4>
					<div> I'm a Full Stack Engineer </div>
					<div> and Open Source Enthusiast </div>
				</h4>
				<Button as={AnchorLink} href="#contact">
					Contact me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m a Full Stack Developer and Open Source enthusiast!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
