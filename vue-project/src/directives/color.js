export default {
  bind(el, bindings, vnode) {
    //el.style.color = bindings.value
    // const arg = bindings.arg
    // console.log(arg)
    // el.style[arg] = bindings.value

    const fontModifier = bindings.modifiers['font'];
    if(fontModifier) {
        el.style.fontSize ='45px'
    }

    const delayModifier = bindings.modifiers['delay'];
    let delay = 0;
    if(delayModifier) {
      delay = 2000
    }
    setTimeout(()=> {
      const arg = bindings.arg
      console.log(arg)
      el.style[arg] = bindings.value
    },delay)
  }
  //
  // update(el, bindings, vnode) {
  //   el.style.color = bindings.value
  //   console.log(bindings.value)
  // }

}
