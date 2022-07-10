import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import randomBytes from "randombytes";

// define database
// authors and products is like a collection in mongodb.
const brands = [
    {
        id: "00011",
        name: "HP",
        contact: "03451234657",
        //products: [],
        country: "USA"
    },
    {
        id: "00012",
        name: "Dell",
        contact: "03451234657",
        // products: [],
        country: "USA"
    },
    {
        id: "00014",
        name: "Asus",
        contact: "03451234657",
        // products: [],
        country: "Japan"
    },
    {
        id: "00015",
        name: "Lenovo",
        contact: "03451234657",
        products: [],
        country: "Korea"
    },
]
const products = [
    {
        id: "0001",
        title: 'Zbook Laptop',
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        price: "599",
        category: "electronic",
        rating: "4.5",
        by: "00011"
    },
    {
        id: "0002",
        title: 'HP Notebook Pro',
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        price: "650",
        category: "electronics",
        rating: "3.1",
        by: "00011"
    },
    {
        id: "0003",
        title: "DELL Inspiron",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        category: "electronic",
        price: "599",
        rating: "4.5",
        by: "00012"
    },
    {
        id: "0004",
        title: "DELL Latitude",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        category: "electronic",
        price: "750",
        rating: "4.5",
        by: "00012"
    },
    {
        id: "0004",
        title: "Lenovo Thinpad",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        category: "electronic",
        price: "750",
        rating: "4.5",
        by: "00015"
    },
    {
        id: "0004",
        title: "Lenovo Work station",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        category: "electronic",
        price: "750",
        rating: "4.5",
        by: "00015"
    },
];


//Prototype / Query Format:
//define your graphql schema or blueprint (for response object).
// const typeDefs = gql`
//     type Query{
//         greet:String
//     }
// `
const typeDefs = gql`
  type Brand {
    id:ID
    name: String
    contact:String
    country: String
    products:[Product]
  }

  type Product {
    id:ID
    title: String
    image: String
    price: String
    category: String
  }
 
 # Root Query / Starting Point.
  type Query {
    products: [Product] 
    brands: [Brand]
    brand(id:ID!): Brand
  } 
  type Mutation{
      addNewProduct(id:String, title:String, image: String, price: String, category: String): Product
  }
`;

//Controller - Query Resolver
const controller = {
    Query: {
        products: () => products,
        brands: () => brands,
        brand: (_, { id }) => brands.find(x => x.id === id)
    },
    Brand: {
        products: (brand) => products.filter(x => x.by == brand.id)
    },
    Mutation: {
        addNewProduct: (_, { ...product }) => {
            product.id = randomBytes(5).toString("hex");
            console.log({ ...product });
            products.push({ ...product })
            return products.find(x => x.id === id);
        }
    },
}

//create apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers: controller,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

// expressapp.listen(5000, console.log('Server is running..')) //node js server
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`server running at ${url}`);
})