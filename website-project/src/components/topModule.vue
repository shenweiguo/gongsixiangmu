<template>
    <section class="main">
        <div class="top_header">

            <div class="top_header_img"><img src="../assets/images/shouye/logo_1.jpg" alt=""></div>
            <div class="top_header_img1"><img src="../assets/images/shouye/logo_2.jpg" alt=""></div>
        </div>
        <!--顶部内容-->
    </section>
    <!--所有内容-->
</template>

<script>
export default {


}
</script>

<style scoped>
.main{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.top_header{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 116px;
    background: #f7f7f7;
}
.top_header_img{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin: 0px 0px 4px 48px;
    width: 162px;
    height: 99px;
}
.top_header_img img{
    width: 100%;
    height: 100%;
}
.top_header_img1{
    width: 240px;
    height: 42px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 0 5px 175px;
}
.top_header_img1 img{
    width: 100%;
    height: 100%;
}

</style>
