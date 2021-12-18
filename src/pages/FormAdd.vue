<template>
    <div class="main"> 
        <form class="form" @onChange="onChangeForm" @submit.prevent>
            <div class="inputs">
                <label>Наименование товара</label>
                <input v-model='onePost.title' class="input-name"  placeholder="введитее наименование товара" required/>
            </div>

            <div class="inputs">
             <label class="labels" for="input-name">Описание товара</label>
             <textarea v-model='onePost.description' placeholder="введите описание товара" required></textarea>
            </div>

            <div class="inputs">
            <label class="labels" for="input-name">Ссылка на изображение товара</label>
             <input v-model='onePost.image' class="input-name-two" placeholder="введитее ссылку"/>
            </div>  

            <div class="inputs">
                <label class="labels" for="input-name">Цена товара</label>
                <input  v-model='onePost.price' @input="onChange" class="input-name-two" placeholder="введитее цену" required/>
            </div> 
            <button @click= "addItem">Добавить товар</button>
        </form>
    </div>
</template>

<script>
    export default {
        data (){
            return{
                counter: 0,
                local: 0,
                onePost:{
                    id: 2,
                    title:'',
                    description:'',
                    price: '',
                    image:''
                }
            }
        },
        //тут я показываю, как работает localStorage
        watch:{
            local(newonePost){
                localStorage.local = newonePost;
                }
        },
        mounted() {
            if(localStorage.local){
                this.local = +localStorage.local;
            }
        },
        //добавление нового продукта
        methods:{
            addItem(){
                for (var key in this.onePost) {
                    if (this.onePost[key] === ''){
                        return none
                    }
                }
                let objCopy = Object.assign({}, this.onePost);
                objCopy.id = new Date().getTime();
                this.$store.commit('addItem', objCopy)
                this.local +=1;
                this.counter= 0;
                this.onePost = {
                    id: 2,
                    title:'',
                    description:'',
                    price: '',
                    image:''
                }
            },
            //расстановка пробелов
            onChange(){
                this.counter +=1;
                console.log(this.counter)

                if(this.counter === 3){
                    this.onePost.price = this.onePost.price + ' ';
                    this.counter = 0;
                }
            },
            onChangeForm(){
                console.log('hi')
            }
        }
    }
</script>

<style lang="scss" scoped>
.main{
    @media screen and (max-width: 740px){
      display: flex;
        justify-content: center;
     }
}
.form{
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 83px;
    left: 32px;
    width: 332px;
    height: 440px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    @media screen and (max-width: 740px){
      position: relative;
        
        left: 0px;

     }
    .inputs{
        display: block;
        label{
            position: relative;
            display: block;
            font-size: 10px;
            line-height: 13px;
            /* identical to box height */
            margin-top: 24px;
            letter-spacing: -0.02em;  
                .dot{
                    width: 4px;
                    height: 4px;    
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: #FF8484;
                    border-radius: 4px;
            }
        }
        .input-name{
            padding: 0 0 0 0;
            border: none;
            width: 284px;
            height: 36px;
            margin-top: 4px;
            /* Darks & Whites / White */

            background: #FFFEFB;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            text-indent: 16px;
    }   
    .labels{
        margin-top: 16px;
        font-size: 10px;
        line-height: 13px;
        /* identical to box height */

        letter-spacing: -0.02em;
    }
    
    .input-name-two{
        padding: 0 0 0 0;
        border: none;
        width: 284px;
        height: 36px;
        margin-top: 4px;
        /* Darks & Whites / White */

        background: #FFFEFB;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        text-indent: 16px;
    }
    ::-webkit-input-placeholder {
        
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */
       
        /* Greys / 500 */

        color: #B4B4B4;
    }
    textarea{
        
        padding: 15px 0 0 0;
        border: none;
        width: 284px;
        height: 93px;
        margin-top: 4px;
        text-indent: 16px;
        line-height: 15px;
        resize: none;

        /* Darks & Whites / White */

        background: #FFFEFB;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }
    }
    button{
        padding: 0 0 0 0;
        width: 284px;
        height: 36px;
        border: none;
        background: #EEEEEE;
        border-radius: 10px;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */
        margin-top: 24px;
        text-align: center;
        letter-spacing: -0.02em;
        cursor: pointer;
        /* Greys / 500 */

        color: #B4B4B4;
    }
}
</style>