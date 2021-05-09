import React from 'react'
import ReactDom from 'react-dom'
import {createElement} from './react'

const el = <div className="title"><h1>标题</h1> <span>内容</span> </div> 
console.log(el)
console.log(JSON.stringify(el, null, 2))

const el2 = createElement("div", {
  className: "title"
}, 
createElement("h1", null, "\u6807\u9898"),
createElement("span", null, "\u5185\u5BB9"), 
" "
)

console.log(JSON.stringify(el2, null, 2))

ReactDom.render(el, document.getElementById('root'))