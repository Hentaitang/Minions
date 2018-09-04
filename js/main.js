!function(){
    result=`/*
* 你好呀朋友
* 我将以动画的形式画一个小黄人给你看
* 直接给你看我画好的就太无聊了
* 我就让你看看我咋用代码画的~
* 首先准备一些样式
*/

*{
   transition: all 1s;
}
html{
   background: rgb(222,222,222);
}
#pre{
   background-color: #EEEEEE;
   border: 1px solid #AAAAAA;
   padding: 15px;
   height: 90vh;
}


/*
 * 现在我加一下代码高亮，让你看起来清晰些
 */

.token.comment{
    color: slategray;
}
.token.selector{
    color: #690;
}
.token.punctuation {
    color: #999;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}

/* 现在我要开始画图咯 */
/* 给我腾出点空间 */

#pre{
    width: 30%;

}

/* 准备一张纸 */

.wrapper{
    background-color: #EC7E65;
}

.body{
    width: 218px;
    height: 360px;
    background-color: #FFED41;
    border-radius: 120px 120px 63px 63px;
}
  
.frame{
    height: 12px;
    width: 240px;
    background-color: #494949;
    border-radius: 4px;
}
  
.frame::after{
    height: 12px;
    width: 240px;
    background-color: #2D2D2D;
    border-radius: 4px;
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
}
  
.frameLeft,
.frameRight{
    background-color: #E5BF36;
    width: 103px;
    height: 103px;
    border-radius: 50%;
    border: 12px solid #E2E2E0;
    box-shadow: 1px -1px 0 #FEFEFE, -4px 4px 0 0 rgba(50, 50, 50, 0.1);
}
  
.eyeLeft,
.eyeRight{
    width: 77px;
    height: 58px;
    background-color: #FFF;
    border-radius: 50px/50px;
}
  
.eye1,
.eye2{
    width: 28px;
    height: 28px;
    background-color: #724c25;
    border-radius: 50%;
}
  
.eye1:before,
.eye2:before{
    width: 12px;
    height: 12px;
    background-color: #2C2D2F;
    border-radius: 50%;
}
  
.eye1:after,
.eye2:after{
    width: 8px;
    height: 8px;
    background-color: #FFF;
    border-radius: 50%;
}
  
.mouth{
    width: 108px;
    height: 36px;
    background-color: #603814;
    border-radius: 0 0 100px 100px;
}
  
.topLip{
    width: 108px;
    height: 30px;
    background-color: #FFED41;
    border-radius: 55px/10px;
    box-shadow: 0 3px 0 0 rgba(50, 50, 50, 0.15);
}
  
.teeth > li{
    width: 18px;
    height: 25px;
    background-color: #FFF;
    border-radius: 10px;
}
  
.teeth > li:nth-child(1){
    transform: rotate(10deg);
    transform: translateY(-5px);
}

.teeth > li:nth-child(4){
    transform: rotate(-10deg);
    transform: translateY(-5px);
}

.jeanTop{
    width: 138px;
    height: 58px;
    background-color: #2B5B89;
}
  
.jeanLow{
    width: 220px;
    height: 63px;
    background-color: #2B5B89;
    border-radius: 0 0 63px 63px;
}
  
.strapLeft{
    width: 70px;
    height: 16px;
    background-color: #224467;
    transform: rotate(24deg) translateX(-53px);
}
  
.strapRight{
    width: 70px;
    height: 16px;
    background-color: #224467;
    transform: rotate(-24deg) translateX(53px);
}
  
.strapLeft:after,
.strapRight:after{
    height: 11px;
    width: 11px;
    background-color: #2d2d2b;
    border-radius: 50%;
}
  
.jeanLow:after{
    background-color: #224467;
    height: 44px;
    width: 58px;
    border-radius: 0 0 50px 50px;
}
  
.handLeft,
.handRight{
    background-color: #e5c034;
    height: 100px;
    width: 16px;
}
  
.handLeft{
    transform: translateX(-109px);
    border-top-left-radius: 100px;
}
  
.handRight{
    transform: translateX(109px);
    border-top-right-radius: 100px;
}
  
.handLeft:before,
.handRight:before{
    border-top-color: #424242;
}
  
.handLeft:after,
.handRight:after{
    width: 16px;
    height: 36px;
    background-color: #424242;
    border-radius: 10px;
}
  
.fingerLeft,
.fingerRight{
    width: 16px;
    height: 16px;
    background-color: #424242;
}
  
.fingerLeft{
    border-top-right-radius: 100px;
}
  
.fingerRight{
    border-top-left-radius: 100px;
}
  
.fingerLeft:before,
.fingerRight:before{
    width: 16px;
    height: 16px;
    background-color: #2C2C2C;
    border-radius: 50%;
}
  
.fingerLeft:after,
.fingerRight:after{
    width: 16px;
    height: 16px;
    background-color: #383838;
    border-radius: 50%;
}
  
.legLeft,
.legRight{
    width: 44px;
    height: 22px;
    background-color: #224467;
}
  
.legLeft:after{
    border-right: 10px solid #224467;
    border-bottom: 22px solid #EC7E65;
}
  
.legRight:after{
    border-left: 10px solid #224467;
    border-bottom: 22px solid #EC7E65;
}
  
.shoeLeft,
.shoeRight{
    width: 52px;
    height: 18px;
    background-color: #424242;
}
  
.shoeLeft{
    border-top-left-radius: 50px;
}
  
.shoeRight{
    border-top-right-radius: 50px;
}
  
.shoeLeft:before{
    border-right: 35px solid #224467;
    border-bottom: 5px solid #424242;
}
  
.shoeRight:before{
    border-left: 35px solid #224467;
    border-bottom: 5px solid #424242;
}
  
.shoeLeft:after,
.shoeRight:after{
    width: 56px;
    height: 5px;
    background-color: #2D2D2D;
}
`

    writeCode('', result)

    var duration = 50
    function writeCode(prefix, code, callback){
        var n = 0
        var preCode = prefix || ''
        var pre = document.querySelector('#pre')
        var styleTag = document.querySelector('#styleTag')
        var id = setTimeout(function fn(){
            n += 1
            // pre.innerHTML = preCode + code.slice(0, n)
            pre.innerHTML = Prism.highlight(preCode + code.slice(0, n), Prism.languages.css, 'css')
            styleTag.innerHTML = preCode + code.slice(0,n)
            pre.scrollTop = pre.scrollHeight
            if(n < result.length){
                setTimeout(fn, duration)
            }else{
                callback && callback()
            }
        }, duration)
    }

    $('#buttons').on('click', 'button', (e)=>{
        let $button = $(e.currentTarget)
        $button.addClass('active').siblings().removeClass('active')
        let speed = $button.attr('data-speed')
        switch (speed){
            case 'slow':
                duration = 100;
                break;
            case 'normal':
                duration = 50;
                break;
            case 'high':
                duration = 0;
                break;
        }
    })
}.call()