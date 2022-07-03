import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import randomBytes from "randombytes";

// define database
const authors = [
    {
        id: "00011",
        name: "HP",
        contact: "03451234657",
        products: [],
        city: "Islamabad"
    },
    {
        id: "00011",
        name: "HP",
        contact: "03451234657",
        products: [],
        city: ""
    },
    {
        id: "00011",
        name: "HP",
        contact: "03451234657",
        products: [],
        city: "Rawalpindi"
    },
    {
        id: "00011",
        name: "HP",
        contact: "03451234657",
        products: [],
        city: "Murre"
    },
    {
        id: "00013",
        name: "DELL",
        contact: "03452254877",
        products: [],
    }
]
const products = [
    {
        id: "0001",
        title: 'Zbook Laptop',
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        category: "jewelery",
        price: "599",
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
        category: "electronics",
        price: "599",
        rating: "4.5",
        by: "00013"
    },
    {
        id: "0003",
        title: "DELL Latitude",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        category: "women's clothing",
        price: "750",
        rating: "4.5",
        by: "00011"
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
  type Product {
    id:ID
    title: String
    image: String
    price: String
    category: String
  }
 type Author {
    id:ID
    name: String
    country: String
    contact:String
    city:String
    products:[Product]
  }
  
  # Root Query / Starting Point.
  type Query {
    products: [Product] 
    authors: [Author]
  }
  type Mutation{
      addNewProduct(id:String, title:String, image: String, price: String, category: String): Product
  }
`;

//Controller - query resolver
const controller = {
    Query: {
        products: () => products,
        authors: () => authors,
    },
    Mutation: {
        addNewProduct: (_, { ...product }) => {
            product.id = randomBytes(5).toString("hex");
            console.log({ ...product });
            products.push({ ...product })
            return products.find(x => x.id === id);
        }
    },
    Author: {
        country: () => "Canada",
        products: (author) => products.filter(x => x.by === author.id),
        city: (author) => (author && author.city) ? author.city : "Default"
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