const icons = import.meta.glob('./svg/*.svg') // mport.meta.glob 从文件系统导入多个模块

let iconNames: Array<string> = []
Object.keys(icons).forEach((key) => {
  const name = key.replace(/\.\/svg\/(.*)\.svg/, '$1')  // 正则表达式 ...
  iconNames.push(name)
})
export default iconNames