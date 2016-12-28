/* in bisheng.config.js
 * module.exports = {
 *   plugins: [ 'pluginName?config1=value1&config2=value2' ],
 * }
 */


// 获取到的config配置
{
  config1: value1,
  config2: value2,
}

// utils会被合并到props.utils中去
module.exports = (config) => {
  console.log('config: ' + config); //config 在bisheng.config.js中的plugins中配置
  return {
    converters: [], // 转换器之类
    utils: {
      say(name) {
        console.log('my name is ' + name);
      }
    }
  }
}
