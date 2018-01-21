import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styled from 'styled-components'
import { Transition } from 'semantic-ui-react'
import Gitalk from 'gitalk'

import { Segment, Quote, Loading } from '../components'
import { colors } from '../theme'
import { shuffle } from '../utils'
import config from '../config'

const { gitalkOptions, duration, transitions, qoutes, aboutOptions } = config
const { avatar, info, enableGitalk } = aboutOptions
const newColors = shuffle(colors)

const Container = styled.div`
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 96%;
  }
`

const Wapper = styled.div`
  padding: 16px;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.24);
  background: rgba(255, 255, 255, 0.6);
`

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
`

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 10px 2px #999;
  transition: transform 1s ease-out;
  &:hover {
    animation-play-state: paused;
    transform: rotateZ(360deg);
  }
`

const Info = styled.div`
  margin-left: 16px;
`

const Item = styled.div`
  margin: .03rem;
  i {
    margin-right: .03rem;
    width: .16rem;
  }
`

class About extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'page/queryPage',
      payload: {
        type: 'about',
      }
    })

    if (enableGitalk) {
      const gitalk = new Gitalk({
        ...gitalkOptions,
        title: '关于',
      })
      // 渲染评论
      gitalk.render('gitalk')
    }
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: 'page/reset',
      payload: {
        about: {},
      },
    })
  }

  render() {
    const { about } = this.props
    const showAbout = !!Object.keys(about).length
    const section = showAbout && about.body &&
                    about.body.split('## ').filter((o) => o.length > 0).map((o) => {
                      const title = o.match(/.+?\r\n/)[0]
                      return {
                        title,
                        content: o.slice(title.length)
                      }
                    })
    return (
      <Container>
        <div>
          <Transition
            visible={showAbout}
            animation={transitions.page || 'drop'}
            duration={duration}
          >
            <Wapper>
              <Quote text={qoutes.about} />
              <div>
                <Header>
                  <Avatar alt="" src={avatar} />
                  <Info>
                    {info.length > 0 &&
                      info.map((o, i) => {
                        return (
                          <Item key={i}>
                            <i className={`fa fa-${o.icon}`} aria-hidden="true"></i> {o.text}
                          </Item>
                        )
                      })}
                  </Info>
                </Header>
                {!!section.length &&
                  section.map((o, i) => {
                    const color = newColors[i]
                    return (
                      <Segment key={i} color={color} title={o.title} content={o.content} />
                    )
                  })}
              </div>
            </Wapper>
          </Transition>
          {!showAbout && <Loading />}
        </div>
        {enableGitalk && <div id="gitalk" />}
      </Container>
    )
  }
}

export default connect(({ page }) => ({ ...page }))(About)
