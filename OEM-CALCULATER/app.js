 
 
 const storageController=(function(){


 })();

 const productController=(function(){

    //private
    const product=function(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;

    }

    //uygulamadaki veri listesini taşıyacak
    const data={
        products: [],
        selectedproduct :null,
        totalprice:0
    }
     

    //public
    return{
        getproducts: function(){

            return data.products;
        },
        getdata:function(){
            return data;
        },
        getproductbyId:function(id){

            let product=null;

            data.products.forEach(function(prd){

                if(prd.id==id){
                    product=prd;
                }

            });
            return product;
        },
        setcurrentproduct:function(product){
           
            data.selectedproduct=product;

        },
        getcurrentproduct:function(){

            return data.selectedproduct;
        },

        addproduct:function(name,price){
            let id;
            if(data.products.length>0){
                id=data.products[data.products.length-1].id+1;
            }
            else{
                id=0;
            }
            
            const newproduct=new product(id,name,parseFloat(price));
            data.products.push(newproduct);
            return newproduct;
        },
        updateProduct:function(name,price){
            let product=null;

            data.products.forEach(function(prd){
               if(prd.id==data.selectedproduct.id){
                   prd.name=name;
                   prd.price=parseFloat(price);
                   product=prd; 

               } 

            })


        },
        gettotal:function(){

            let total=0;

            data.products.forEach(function(item){
                total+=item.price;
            });

            data.totalprice=total;
            return data.totalprice;
            
        }


    }


 })();

 const UIcontroller=(function(){


    const selectors={

        productlist: '#item-list',
        addbutton:'.addbtn',
        updatebutton:'.updatebtn',
        deletebutton:'.deletebtn',
        cancelbutton:'.cancelbtn',
        productname:'#productname',
        productprice:'#productprice',
        productcard:'#productcard',
        totalTL:'#total-tl',
        totalDolar:'#total-dolar'


    }

    return{
           
        createproductlist: function(products){
            let html='';   

            products.forEach(prd => {
                html+=`
                
                <tr>
                  <td>${prd.id}</td>
                  <td>${prd.name}</td>
                  <td>${prd.price}</td>
                  <td class="text-right">
                      <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>


                `;
                
            });

            document.querySelector(selectors.productlist).innerHTML=html;
             },

         getselectors:function(){

                 return selectors;
            },

        addproduct:function(prd){

            document.querySelector(selectors.productcard).style.display='block';

                var item=`
                <tr>
                <td>${prd.id}</td>
                <td>${prd.name}</td>
                <td>${prd.price}</td>
                <td class="text-right">
                      <i class="far fa-edit edit-product"></i>            
                  </td>
              </tr>
                
            
                `;
                document.querySelector(selectors.productlist).innerHTML+=item;
                
            },

        clearinputs:function(){
                document.querySelector(selectors.productname).value='';
                document.querySelector(selectors.productprice).value='';

                

            },
        hidecard:function(){

            document.querySelector(selectors.productcard).style.display='none';
        },
        showtotal:function(total){
            document.querySelector(selectors.totalDolar).textContent=total;
            document.querySelector(selectors.totalTL).textContent=total*7.93;

        },
        addproducttoform:function(){
            const selectedproduct=productController.getcurrentproduct();

            document.querySelector(selectors.productname).value=
            selectedproduct.name;
            document.querySelector(selectors.productprice).value=
            selectedproduct.price;

        },
        addingState:function(){
            UIcontroller.clearinputs();
            document.querySelector(selectors.addbutton).style.display='inline';
            document.querySelector(selectors.updatebutton).style.display='none';
            document.querySelector(selectors.deletebutton).style.display='none';
            document.querySelector(selectors.cancelbutton).style.display='none';

        },
        editState:function(tr){

            const parent=tr.parentNode;
            for(let i=0;i<parent.children.length;i++){
                parent.children[i].classList.remove('bg-success')
            }

            tr.classList.add('bg-success');
            document.querySelector(selectors.addbutton).style.display='none';
            document.querySelector(selectors.updatebutton).style.display='inline';
            document.querySelector(selectors.deletebutton).style.display='inline';
            document.querySelector(selectors.cancelbutton).style.display='inline';

        }
        


    }




 })();

 //ana modülümüz html sayfası yuklendiği anda
 const App=(function(productCtrl,UICtrl){

    const UISelectors=UICtrl.getselectors();

   

    const loadeventlisteners=function(){

        document.querySelector(UISelectors.addbutton).addEventListener('click',
        productaddsubmit);

        document.querySelector(UISelectors.productlist).addEventListener('click',
        producteditclick);

        document.querySelector(UISelectors.updatebutton).addEventListener('click',
        editproductsubmit);




    }

    const productaddsubmit=function(e){

        const productname=document.querySelector(UISelectors.productname).value;
        const productprice=document.querySelector(UISelectors.productprice).value;


        if (productname!== '' && productprice!==''){

            //yeni ürün ekleme için obje
            const newproduct=productCtrl.addproduct(productname,productprice);

            //add  item to list
            UIcontroller.addproduct(newproduct);

            //ekledikten sonra text rea kısmını sil boşalt
            UIcontroller.clearinputs();

            //get total
            const total=productCtrl.gettotal();
            //show total
            UIcontroller.showtotal(total); 
            

        }

        console.log(productname,productprice);
        e.preventDefault();
    }

    const producteditclick=function(e){

        if(e.target.classList.contains('edit-product')){

            const id=
            e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.
            textContent;

        //get selected product
        const product= productCtrl.getproductbyId(id);
           

        //set current product
        productCtrl.setcurrentproduct(product);

        //add product to form
        UICtrl.addproducttoform();


 
        UICtrl.editState(e.target.parentNode.parentNode);




        }

        e.preventDefault();
    }
    
    const editproductsubmit=function(e){
       
        const productname=document.querySelector(UISelectors.productname).value;
        const productprice=document.querySelector(UISelectors.productprice).value;


        if (productname!== '' && productprice!==''){

            //update product
            const updatedProduct=productCtrl.updateProduct(productname,productprice);


            //update uı





        }

        e.preventDefault();

    }

    return {

        init:function(){
            console.log('sttarting app...');
            UICtrl.addingState();
            const products=productCtrl.getproducts();
            if(products.length==0){
                UICtrl.hidecard();
            }else{

            UICtrl.createproductlist(products); 

           
            }

            loadeventlisteners();


        }
    }


 })(productController,UIcontroller)

App.init();
