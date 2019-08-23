<template>
    <div class="main">
        <!--头部内容-->
        <header class="homeHerder">
            <top-module></top-module>
        </header>
        <!--头部内容结束-->
        <nav class="home-nav">
            <navigation-bar></navigation-bar>
        </nav>
        <!--导航条-->
        <section class="wise-lun">
            <img src="../../assets/images/joinLenton/jo_2.jpg" alt />
        </section>
        <!--轮播图片结束-->
        <section class="great-title">
            <span>
                <img src="../../assets/images/solution/so_2.jpg" alt />
            </span>
            <span>联系我们</span>
            <span>
                <img src="../../assets/images/solution/so_3.jpg" alt />
            </span>
        </section>
        <!--标题结束-->

        <section class="conta-companymain">
            <div class="conta-companyd1">
                <ul class="conta-companyd1ul">
                    <li>深圳市宏正道科技有限公司
                    </li>
                    <li>电话：+86-755-29031888
                    </li>
                    <li>传真：+86-755-26584662
                    </li>
                    <li>服务热线：400 889 8066
                    </li>
                    <li>官方网站：www.sz-led.com
                    </li>
                    <li>电子邮箱：leden@sz-led.com
                    </li>
                    <li>地址：深圳市南山区沙河西路2009号尚美科技大厦23层东
                    </li>
                </ul>
                <!--ul结束-->
                <div class="conta-companyd1img">
                    <img src="../../assets//images//joinLenton/jo_3.jpg" alt="">
                </div>
            </div>
        </section>
        <!--深圳市联腾有限公司结束-->

        <section class="conta-companymain">
            <div class="conta-companyd1">
                <ul class="conta-companyd1ul">
                    <li>深圳市联腾科技有限公司

                    </li>
                    <li>电话：+86-755-29031888
                    </li>
                    <li>传真：+86-755-26584662
                    </li>
                    <li>服务热线：400 889 8066
                    </li>
                    <li>官方网站：www.sz-led.com
                    </li>
                    <li>电子邮箱：leden@sz-led.com
                    </li>
                    <li>地址：深圳市南山区西丽新峰路21号728办公社区F1栋3层

                    </li>
                </ul>
                <!--ul结束-->
                <div class="conta-companyd1img">
                    <img src="../../assets//images//joinLenton/jo_4.jpg" alt="">
                </div>
            </div>
        </section>
        <!--深圳市联腾有限公司结束-->

        <section class="conta-companymain">
            <div class="conta-companyd1">
                <ul class="conta-companyd1ul">
                    <li>北京国勤正道科技有限公司

                    </li>
                    <li>电话：+86-755-29031888
                    </li>
                    <li>传真：+86-755-26584662
                    </li>
                    <li>服务热线：400 889 8066
                    </li>
                    <li>官方网站：www.sz-led.com
                    </li>
                    <li>电子邮箱：leden@sz-led.com
                    </li>
                    <li>地址：北京市丰台区双林东路1号院1号楼三层301

                    </li>
                </ul>
                <!--ul结束-->
                <div class="conta-companyd1img">
                    <img src="../../assets//images//joinLenton/jo_5.jpg" alt="">
                </div>
            </div>
        </section>
        <!--深圳市联腾有限公司结束-->

        <div style="height:100px"></div>

        <!--底部导航-->
        <footer class="home-footer">
            <footer-navigation></footer-navigation>
        </footer>
        <!--底部导航结束-->
    </div>
</template>


<script>
    //引入顶部内容
    import topModule from "../../components/topModule.vue";
    import navigationBar from "../../components/navigationBar.vue";
    import footerNavigation from "../../components/footerNavigation.vue";
    export default {
        data() {
            return {};
        },
        //模块
        components: {
            topModule,
            navigationBar,
            footerNavigation
        }
    };

</script>

<style scoped>
    .conta-companyd1img {
        width: 554px;
        height: 330px;
        display: flex;
    }

    .conta-companyd1img img {
        width: 100%;
        height: 100%;
    }

    .conta-companyd1ul li:first-child {
        font-size: 16px;
        font-weight: bold;
    }

    .conta-companyd1ul li {
        line-height: 35px;
        font-size: 15px;
    }

    .conta-companyd1ul {
        margin-right: 100px;
        margin-top: 20px;
        width: 400px;
    }

    .conta-companyd1 {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #dedede;
        text-align: left;
        padding: 40px;
        justify-content: center;
    }

    .conta-companymain {
        display: flex;
        flex-direction: column;
        padding: 0 150px;

    }

    .wise-lun {
        width: 100%;
        height: 550px;
        display: flex;
    }

    .wise-lun img {
        width: 100%;
        height: 100%;
    }

    .great-title span:nth-child(2) {
        font-weight: bold;
        font-size: 30px;
        color: #353232;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0 10px;
    }

    .great-title {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 150px;
        padding-bottom: 100px;
    }

    .main {
        background: #f7f7f7;
    }

    .great-title span:nth-child(2) {
        font-weight: bold;
        font-size: 30px;
        color: #353232;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0 10px;
    }

    .great-title {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 150px;
        padding-bottom: 100px;
    }

    .homeHerder {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .home-nav {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .home-footer {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
</style>