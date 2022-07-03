import {gql} from '@apollo/client'

export const GET_ALL_PRODUCTS = gql`
query getALLProducts{
    products{
    title
    image
    price
  }
  
}
`;


export const ADD_NEW_PRODUCTS = gql`
mutation AddNewProduct($title:String, $image: String, $price: String, $category: String) {
  addNewProduct(title: $title, image:$image, price: $price, category:$category) {
    id
    title
    image
    price
    category
  }
}
`;
