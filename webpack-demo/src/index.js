import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // lodash 现在使用 import 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());