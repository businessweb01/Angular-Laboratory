import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  product = [{id:1,
              name:"Mens Watch", 
              description:"Rolex", 
              price:500000, 
              color:['Red','Green','Blue'], 
              availability:true, 
              size:['small','medium','large'], 
              imgsrc:"rolex-men.jpg",
              selectedColor: '' // Store selected color here
            },
              {id:2,
                name:"Women's Watch",
                description:"Rolex",
                price:900000,
                color:['Red','Green','Pink'],
                availability:true,
                size:['small','medium','large'],
                imgsrc:"rolex-women.jpg",
                selectedColor: '' // Store selected color here
              },
              {id:3,
                name:"Women's T-shirt",
                description:"100% cotton",
                price:900,
                color:['Red','Blue','Pink'],
                availability:true,
                size:['small','medium','large'],
               imgsrc:"T-shirt-women.jpg",
               selectedColor: '' // Store selected color here
              },
              {id:4,
                name:"Men's T-shirt",
                description:"100% cotton",
                price:450,
                color:['White','Blue','Black'],
                availability:true,
                size:['small','medium','large'],
               imgsrc:"T-shirt-Men.jpg",
               selectedColor: '' // Store selected color here
              },
              {id:5,
                name:"Birkenstock",
                description:"100% cotton",
                price:960,
                color:['Brown','White','Black'],
                availability:true,
                size:['small','medium','large'],
               imgsrc:"birkenstock.jpg",
               selectedColor: '' // Store selected color here
              }]
              onColorChange(event: any, product: any) {
                product.selectedColor = event.target.value;
              }
}
