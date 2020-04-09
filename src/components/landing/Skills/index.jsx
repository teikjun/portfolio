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
        <h1>About Me</h1>
        <p>
        <div>Hungry to learn and improve</div>
        <div>Passionate about building awesome products </div>
        <div>Searching for interesting challenges</div>
        </p>
        <h2>Frequently Used Technologies</h2> 
        <p>
        <div>HTML, CSS, JavaScript, TypeScript, Java, Python</div>
        <div>React, Node, Webpack, MongoDB, PostgreSQL</div>
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
