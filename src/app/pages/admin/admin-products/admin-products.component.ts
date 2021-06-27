import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'admin-products-form',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent {

  constructor(private firestore: AngularFirestore) {

  }

  addProductForm = new FormGroup({ 
    name: new FormControl('',
      [Validators.required,
      Validators.minLength(3)]
    ),
    description: new FormControl('',
      [Validators.required,
      Validators.minLength(3)],
    ),
    price: new FormControl('',
    [Validators.required,
    Validators.minLength(3)],
    ),
    priceWas: new FormControl('',
    [Validators.required,
    Validators.minLength(3)],
    ),
    priceRRP: new FormControl('',
    [Validators.required,
    Validators.minLength(3)],
    ),
    productCode: new FormControl('',
    [Validators.required,
    Validators.minLength(4)],
    ),
    productImage1: new FormControl('',
    [Validators.required,
    Validators.minLength(3)],
    ),
    productImage2: new FormControl('',
    [Validators.minLength(3)],
    ),
    productImage3: new FormControl('',
    [Validators.minLength(3)],
    ),
    productImage4: new FormControl('',
    [Validators.minLength(3)],
    ),
    productImage5: new FormControl('',
    [Validators.minLength(3)],
    ),
    productImage6: new FormControl('',
    [Validators.minLength(3)],
    ),
    quantityInStock: new FormControl('',
    [Validators.required,
    Validators.minLength(1)],
    ),
    rating: new FormControl('',
    [Validators.required,
    Validators.minLength(1)],
    ),
    
   })

   submitForm() {
    //  console.log(this.addProductForm.value)
     const formData  = this.addProductForm.value;

    const productImages = [formData.productImage1, formData.productImage2, formData.productImage3, formData.productImage4, formData.productImage5, formData.productImage6];
    let productImagesData = []

    for (let productImage of productImages) {
      if (productImage !== "") {
        productImagesData.push(productImage)
      }
    }

     this.firestore.collection('products-painting').add({
       name: formData.name,
       description: formData.description,
       price: parseInt(formData.price),
       priceWas: parseInt(formData.priceWas),
       priceRRP: parseInt(formData.priceRRP),
       productCode: parseInt(formData.productCode),
       quantityInStock: parseInt(formData.quantityInStock),
       rating: parseInt(formData.rating),
       productImages: productImagesData
     })
   }

}

// create a service for adding the product to the db and submit from here