import React, { Component, PropTypes } from 'react'
import NavList from '../navList.jsx'
import { Icon } from '../rctui'
import * as Language from '../Language'

class Page extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navShow: false,
      lang: Language.get().toLowerCase()
    }
    this.langToggle = this.langToggle.bind(this)
    this.navToggle = this.navToggle.bind(this)
  }

  navToggle () {
    this.setState({ navShow: !this.state.navShow })
  }

  langToggle () {
    let lang = this.state.lang === 'zh-cn' ? 'en' : 'zh-cn'
    Language.set(lang)
    window.location.reload()
  }

  render () {
    return (
      <div>
        <header>
          <a className="menu" href="javascript:;" onClick={this.navToggle}>menu</a>
          <a className="logo" href="#/home">React UI</a>
          <a className="link-github" href="https://github.com/Lobos/react-ui"><Icon icon="github" /> github</a>
          <a onClick={this.langToggle} className="link-lang">{this.state.lang === 'zh-cn' ? 'English' : '中文'}</a>
        </header>
        <div className="wrapper">
          <NavList onToggle={this.navToggle} navShow={this.navShow} />
          <div className="main">{this.props.children}</div>
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  children: PropTypes.any
}

module.exports = Page
