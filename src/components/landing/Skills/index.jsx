import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Teik Jun and I’m an aspiring Full Stack Developer" />
      </Thumbnail>
      <Details>
        <h1>My Toolbox</h1>
        <p>
        <div>HTML, CSS, JavaScript, TypeScript, Java, Python</div>
        <div>Node.js, React.js, MongoDB, PostgreSQL</div>
        </p>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
