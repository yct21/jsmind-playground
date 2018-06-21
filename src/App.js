import React, { Component } from 'react';
import logo from './logo.svg';
import JsMind from './JsMind'
import './App.css';

class App extends Component {
  render() {
    const options = {
        container : '',         // [必选] 容器的ID
        editable : true,       // 是否启用编辑
        theme : null,           // 主题
        mode :'full',           // 显示模式
        support_html : true,    // 是否支持节点里的HTML元素
        view:{
            hmargin:100,        // 思维导图距容器外框的最小水平距离
            vmargin:50,         // 思维导图距容器外框的最小垂直距离
            line_width:2,       // 思维导图线条的粗细
        },
        layout:{
            hspace:30,          // 节点之间的水平间距
            vspace:20,          // 节点之间的垂直间距
            pspace:13           // 节点与连接线之间的水平间距（用于容纳节点收缩/展开控制器）
        },
        shortcut:{
            enable:true,        // 是否启用快捷键
            handles:{},         // 命名的快捷键事件处理器
            mapping:{           // 快捷键映射
                addchild   : 45,    // <Insert>
                addbrother : 13,    // <Enter>
                editnode   : 113,   // <F2>
                delnode    : 46,    // <Delete>
                toggle     : 32,    // <Space>
                left       : 37,    // <Left>
                up         : 38,    // <Up>
                right      : 39,    // <Right>
                down       : 40,    // <Down>
            }
        },
    }
    
    const data = {
       /* 元数据，定义思维导图的名称、作者、版本等信息 */
        "meta":{
            "name":"jsMind-demo-tree",
            "author":"hizzgdev@163.com",
            "version":"0.2"
        },
        /* 数据格式声明 */
        "format":"node_tree",
        /* 数据内容 */
        "data":{"id":"root","topic":"jsMind","children":[
            {"id":"easy","topic":"Easy","direction":"left","expanded":false,"children":[
                {"id":"easy1","topic":"Easy to show"},
                {"id":"easy2","topic":"Easy to edit"},
                {"id":"easy3","topic":"Easy to store"},
                {"id":"easy4","topic":"Easy to embed"}
            ]},
            {"id":"open","topic":"Open Source","direction":"right","expanded":true,"children":[
                {"id":"open1","topic":"on GitHub"},
                {"id":"open2","topic":"BSD License"}
            ]},
            {"id":"powerful","topic":"Powerful","direction":"right","children":[
                {"id":"powerful1","topic":"Base on Javascript"},
                {"id":"powerful2","topic":"Base on HTML5"},
                {"id":"powerful3","topic":"Depends on you"}
            ]},
            {"id":"other","topic":"test node","direction":"left","children":[
                {"id":"other1","topic":"I'm from local variable"},
                {"id":"other2","topic":"I can do everything"}
            ]}
        ]}
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <JsMind options={options} data={data}/>
      </div>
    );
  }
}

export default App;
