<template>
    <div>
        <div class="item" @mouseenter="mouseOver" @mouseleave="mouseOver">
            <div class="delete" @click = "$store.commit('deletePost', post)"  v-show="active" ></div>
            <div  class="photo">
                <img :src="post.image" alt="123">
           </div>
            <div class="main-item">
                <h2 >{{post.title}}</h2>
                <p class="item-lor">{{post.description}}</p>
                <p class="price">{{post.price}} руб.</p>
            </div>
        </div>
    </div>  
</template>



<script>
    export default {
        props:{
            post: Object
        },
        data() {
            return {
            active:false,
     }
  },
    methods: {
        mouseOver: function(){
            this.active = !this.active;   
        }
    }

    }
</script>

<style lang="scss" scoped>
    .item{
        margin: 0 16px 16px 0;
        width: 332px;
        height: 423px;
        background: #FFFEFB;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        .delete{
            width: 32px;
            height: 32px;
            position: absolute;
            top: -15px;
            right: -3%;
            z-index: 99;
            background: #FF8484;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }
        .photo{
            width: 332px;
            height: 200px;
            border-radius: 4px 4px 0px 0px;
            text-align: center;
            img{
                height: 100%;
                border-radius: 4px 4px 0px 0px;
            }
        }
        .main-item{
            
            h2{
                margin: 16px 0 0 16px;
                max-height: 25px;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            .item-lor{
                margin: 16px 16px 0 16px;
                font-size: 16px;
                line-height: 20px;
                max-height: 80px;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            .price{
                position: absolute;
                bottom: 0;
                margin: 32px 0px 24px 16px;
                font-weight: 600;
                font-size: 24px;
                line-height: 30px;
            }
        }
    }
</style>