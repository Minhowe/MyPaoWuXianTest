cc.Class({
    extends: cc.Component,

    properties: {
        img_ball: {
            default: null,
            type: cc.Sprite
        }
    },

    // use this for initialization
    onLoad: function () {
        // 设置精灵位置
        this.img_ball.position = cc.v2(50, 50);
        // 抛物线运动
        this.img_ball.node.runAction(cc.spawn(cc.rotateBy(1, 360),this.create(1, cc.v2(50, 50), cc.v2(450, 50), 100, 60)));
    },
    // 抛物线创建
    create(t, startPoint, endPoint, height, angle) {
        // 把角度转换为弧度
        let radian = angle * 3.14159 / 180;
        // 第一个控制点为抛物线左半弧的中点
        let q1x = startPoint.x + (endPoint.x - startPoint.x) / 4;
        let q1 = cc.v2(q1x, height + startPoint.y + Math.cos(radian) * q1x);
        // 第二个控制点为整个抛物线的中点
        let q2x = startPoint.x + (endPoint.x - startPoint.x) / 2;
        let q2 = cc.v2(q2x, height + startPoint.y + Math.cos(radian) * q2x);
        // 曲线配置
        return cc.bezierTo(t, [q1, q2, endPoint]).easing(cc.easeInOut(0.5));
    },
    // called every frame
    update: function (dt) {

    },
});
