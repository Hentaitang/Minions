!function(){
    // 声明左眼夹角a1,右眼夹角a2
    var a1, a2
    // 声明转动半径
    var R = 10
    // 声明整体偏离
    var offsetTop = allBody.offsetTop
    var offsetLeft = allBody.offsetLeft
    // 声明左眼球圆心(X1, Y1)，右眼球圆心(X2, Y2)
    var X1 = 98,Y1 = 99,X2 = 172,Y2 = 99

    wrapper.onmousemove = (e)=>{
        // 声明鼠标坐标(x, y)
        var x = e.clientX
        var y = e.clientY

        a1 = Math.atan2(x-offsetLeft-X1, y-offsetTop-Y1)
        a2 = Math.atan2(x-offsetLeft-X2, y-offsetTop-Y2)
        eye1.style.left = R*Math.sin(a1) + X1 - 6 + 'px'
        eye1.style.top = R*Math.cos(a1) + Y1 -6+ 'px'
        eye2.style.left = R*Math.sin(a2) + X2 + 8 + 'px'
        eye2.style.top = R*Math.cos(a2) + Y2 -5 + 'px'
    }
}.call()