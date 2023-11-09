import { Component, PropsWithChildren } from 'react'
import './app.less'

class App extends Component <PropsWithChildren> {

  taroGlobalData = {
    foo: 'bar'
  }

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
