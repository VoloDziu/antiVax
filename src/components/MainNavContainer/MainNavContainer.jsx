import React from 'react'
import {connect} from 'react-redux'

import {toggleMainMenu} from '../../store/uiActions'

import MainNavDesktop from '../MainNavDesktop'
import MainNavMobile from '../MainNavMobile'

class MainNavContainer extends React.Component {
  render () {
    const {width, widthThreshold, toggleMainMenu, mainMenuIsOpen, sections, rootSections, currentSection, currentSubsections} = this.props

    if (width >= widthThreshold) {
      return <MainNavDesktop
        rootSections={rootSections}
        currentSection={currentSection}
        currentSubsections={currentSubsections} />
    } else {
      return <MainNavMobile
        rootSections={rootSections}
        toggleMainMenu={toggleMainMenu}
        mainMenuIsOpen={mainMenuIsOpen}
        sections={sections} />
    }
  }
}

export default connect(
  (state, ownProps) => {
    const metaSection = state.sections.items.find(s => s.sectionType === 'meta' && s.url === 'main-nav')
    const rootSections = state.sections.items.filter(s => metaSection.children.indexOf(s._id) !== -1)
    const currentSection = rootSections.find(s => s.url === ownProps.params.sectionUrl)
    const currentSubsections = currentSection.sectionType === 'parent'
      ? state.sections.items.filter(s => currentSection.children.indexOf(s._id) !== -1)
      : null

    return {
      sections: state.sections.items,
      rootSections,
      currentSection,
      currentSubsections,
      width: state.ui.windowWidth,
      widthThreshold: state.ui.widthThreshold,
      mainMenuIsOpen: state.ui.mainMenuIsOpen
    }
  },
  dispatch => {
    return {
      toggleMainMenu: () => {
        dispatch(toggleMainMenu())
      }
    }
  }
)(MainNavContainer)