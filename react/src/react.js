
/**
 * 
{
  "type": "div",
  "key": null,
  "ref": null,
  "props": {
    "className": "title",
    "children": [
      {
        "type": "h1",
        "key": null,
        "ref": null,
        "props": {
          "children": "标题"
        },
        "_owner": null,
        "_store": {}
      },
      " ",
      {
        "type": "span",
        "key": null,
        "ref": null,
        "props": {
          "children": "内容"
        },
        "_owner": null,
        "_store": {}
      },
      " "
    ]
  },
  "_owner": null,
  "_store": {}
}

const el = React.createElement("div", {
    className: "title"
  }, 
  React.createElement("h1", null, "\u6807\u9898"),
  React.createElement("span", null, "\u5185\u5BB9"), 
  " "
);
 */
const REACT_ELEMENT_TYPE = 0xeac7;
function ReactElement(type, props) {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    props,
  }

  return element
}


/**
 * 
 * @param {*} type 
 * @param {*} config 
 * @param {*} chldren 
 */


export function createElement(type, config, children) {
  
  const props = {
    ...config, // 此处做了简化，源码中通过for in进行的遍历
  }
  
  const childrenLength = arguments.length - 2

  if(childrenLength === 1) {
    props.children = children
  } else if (childrenLength > 1) {
    // 此处简化，源码通过遍历实现
    props.children = Array.prototype.slice.call(arguments, 2)
  }

  return ReactElement (
    type,
    props,
  )
}