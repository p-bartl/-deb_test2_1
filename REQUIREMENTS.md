# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
### Products REQUIREMENT
- Index 
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

### Products SOLUTION
#### CREATE_REQUEST (POST http://localhost:3000/products/)

```
{
    "name": <name (string)>,
    "price" : <price  (number)>,
    "category": <category (string)>
}
```
#### CREATE_RESPONSE

```
{
    "id":1,
    "name": <name (string)>,
    "price" : <price  (number)>,
    "category": <category (string)>
}
```

#### GET_SPECIFIED_PRODUCT_REQUEST (GET http://localhost:3000/products/:id)
```
<no body>
```

#### GET_SPECIFIED_PRODUCT_RESPONSE

```
{
    "id":1,
    "name": <name (string)>,
    "price" : <price  (number)>,
    "category": <category (string)>
}
```

#### GET_ALL_REQUEST (GET http://localhost:3000/products/all)
```
<no body>
```

#### GET_ALL_RESPONSE

```
{
    "id":1,
    "name": <name (string)>,
    "price" : <price  (number)>,
    "category": <category (string)>
}
```

### Users REQUIREMENT
- Index [token required]
- Show [token required]
- Create N[token required]

### Users SOLUTION
#### CREATE_REQUEST (POST http://localhost:3000/users/)
```
{
    "first_name": <firstname (string)>,
    "last_name" : <lastname  (string)>,
    "password" : <password  (string)>
}
```

#### CREATE_RESPONSE
```
{
    "first_name": <firstname (string)>,
    "last_name" : <lastname  (string)>,
}
```

#### GET_ALL_REQUEST (GET http://localhost:3000/users/all)

```
<no body>
```

#### GET_ALL_RESPONSE

```
{
    "first_name": <firstname (string)>,
    "last_name" : <lastname  (string)>,
}
```

#### AUTHENTICATE_REQUEST (POST http://localhost:3000/users/auth)

```
{
    "first_name": <firstname (string)>,
    "password" : <password  (string)>
}
```

#### AUTHENTICATE_RESPONSE

```
{
    "token": <token (string)>,
}
```

### Orders REQUIREMENT
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

### Orders SOLUTION
#### CREATE_ORDER_REQUEST (POST http://localhost:3000/orders)
```
<use token>
```

```
{
    "user_id": <user_id (number)>,
    "status" : <status  (string)>
}
```

#### CREATE_ORDER_RESPONSE

```
{
    "id" : <id (number)>
    "user_id": <user_id (number)>,
    "status" : <status  (string)>,
}
```

#### CREATE_PRODUCT_WITHIN_ORDER_REQUEST (POST http://localhost:3000/orders/:id/products)
```
<use token>
```

```
{
    "product_id": <product_id (number)>,
    "quantity" : <quantity  (number)>
}
```

#### CREATE_PRODUCT_WITHIN_ORDER_RESPONSE

```
{
    "id":<id (number)>
    "product_id": <product_id (number)>,
    "order_id": <order_id (number)>
    "quantity" : <quantity  (string)>,
}
```

#### GET_SPECIFIED_ORDER_REQUEST (GET http://localhost:3000/orders/:id)
```
<no body>
```

#### GET_SPECIFIED_ORDER_RESPONSE

```
{
    "id" : <id (number)>
    "user_id": <user_id (number)>,
    "status" : <status  (string)>,
}
```

#### GET_ALL_REQUEST (GET http://localhost:3000/orders/)
```
<no body, use token>
```

#### GET_ALL_RESPONSE

```
{
    "id" : <id (number)>
    "user_id": <user_id (number)>,
    "status" : <status  (string)>,
}
```

## Data Shapes
### Product REQUIREMENT
-  id
- name
- price
- [OPTIONAL] category

### Product SOLUTION
Table: products9 (id:integer, name:varchar(50), price:integer, category:text)

### User REQUIREMENT
- id
- firstName
- lastName
- password

### User SOLUTION
Table: users9 (id:integer, first_name:varchar(100), last_name:varchar(100), password_digest:varchar(100))


### Orders REQUIREMENT
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

### Orders SOLUTION
Table: orders9 (id:integer, user_id:bigint[foreign key to users9 table], status:varchar)

### Order_Products SOLUTION
Table: order_products9 (id:integer, quantity:integer, order_id:bigint[foreign key to orders9 table], product_id:bigint[foreign key to products9 table])


