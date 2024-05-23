 // Aplayer默认关闭歌词
 function removelrc() {
     // 检测是否存在歌词按钮
     const lrcIcon = document.querySelector(".aplayer-icon-lrc");
     if (!lrcIcon) {
         return;
     }

     // 触发以后立刻移除监听
     observer.disconnect();

     // 稍作延时保证触发函数时存在按钮
     setTimeout(() => {
         // 以触发按钮的方式隐藏歌词，防止在点击显示歌词按钮时需要点击两次才能出现的问题
         lrcIcon.click();
     }, 1);

     console.log("success");
 }

 const observer = new MutationObserver((mutationsList, observer) => {
     for (let mutation of mutationsList) {
         if (mutation.type === "childList") {
             removelrc();
         }
     }
 });

 const observerConfig = {
     childList: true, // 观察子节点的变化
     subtree: true, // 观察所有后代节点的变化
 };

 observer.observe(document, observerConfig); // 开始观察document节点的变化

// time
function show_runtime() {
    // 设置起始时间，注意这里使用了ISO 8601格式（YYYY-MM-DDTHH:mm:ss）
    var X = new Date("2024-05-12T00:00:00");
    // 获取当前时间
    var Y = new Date();
    // 计算时间差（毫秒）
    var T = Y.getTime() - X.getTime();
    // 一天的毫秒数
    var M = 24 * 60 * 60 * 1000;
    // 计算天数
    var A = Math.floor(T / M);
    // 计算剩余毫秒数（去掉整天的部分）
    var remainingMilliseconds = T % M;
    // 计算小时数
    var B = Math.floor(remainingMilliseconds / (60 * 60 * 1000));
    // 计算剩余毫秒数（去掉整小时的部分）
    remainingMilliseconds %= (60 * 60 * 1000);
    // 计算分钟数
    var C = Math.floor(remainingMilliseconds / (60 * 1000));
    // 计算剩余秒数
    var D = Math.floor((remainingMilliseconds % (60 * 1000)) / 1000);

    // 将结果显示到HTML元素中（假设已经有一个id为"runtime_span"的元素）
    document.getElementById("runtime").innerHTML = A + "天" + B + "小时" + C + "分" + D + "秒";
    // day_span.innerHTML = A + "天";

    // 每秒更新一次显示
    window.setTimeout(show_runtime, 1000);
}

// 首次调用函数以显示时间
show_runtime()

// 佛祖保佑
 console.log("%c\n"+
     "                                       阿弥陀佛\n\n"+
     "                                       _oo0oo_\n"+
     "                                      o8888888o\n"+
     "                                      88\" . \"88\n"+
     "                                      (| -_- |)\n"+
     "                                      0\\  =  /0\n"+
     "                                    ___/‘---’\\___\n"+
     "                                  .' \\|       |/ '.\n"+
     "                                 / \\\\|||  :  |||// \\  \n"+
     "                                / _||||| -卍-|||||_ \\   \n"+
     "                               |   | \\\\\\  -  /// |   |\n"+
     "                               | \\_|  ''\\---/''  |_/ |\n"+
     "                               \\  .-\\__  '-'  ___/-. /\n"+
     "                             ___'. .'  /--.--\\  '. .'___\n"+
     "                           .\"\" ‘<  ‘.___\\_<|>_/___.’>’ \"\".\n"+
     "                         | | :  ‘- \\‘.;‘\\ _ /’;.’/ - ’ : | |\n"+
     "                         \\  \\ ‘_.   \\_ __\\ /__ _/   .-’ /  /\n"+
     "                     =====‘-.____‘.___ \\_____/___.-’___.-’=====\n"+
     "                                       ‘=---=’\n\n"+
     "                                  佛祖保佑 ,永无BUG\n\n"+
     "██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗\n"+
     "██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗\n"+
     "███████║█████╗  ██║     ██║     ██║   ██║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║\n"+
     "██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║\n"+
     "██║  ██║███████╗███████╗███████╗╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝\n"+
     "╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ \n\n"+
     "                                   by xiaochen_er",
     'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;');

// new