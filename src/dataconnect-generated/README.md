# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListProductsByCategory*](#listproductsbycategory)
  - [*GetUserReviews*](#getuserreviews)
- [**Mutations**](#mutations)
  - [*AddNewReview*](#addnewreview)
  - [*UpdateStockQuantity*](#updatestockquantity)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListProductsByCategory
You can execute the `ListProductsByCategory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProductsByCategory(vars: ListProductsByCategoryVariables): QueryPromise<ListProductsByCategoryData, ListProductsByCategoryVariables>;

interface ListProductsByCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListProductsByCategoryVariables): QueryRef<ListProductsByCategoryData, ListProductsByCategoryVariables>;
}
export const listProductsByCategoryRef: ListProductsByCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProductsByCategory(dc: DataConnect, vars: ListProductsByCategoryVariables): QueryPromise<ListProductsByCategoryData, ListProductsByCategoryVariables>;

interface ListProductsByCategoryRef {
  ...
  (dc: DataConnect, vars: ListProductsByCategoryVariables): QueryRef<ListProductsByCategoryData, ListProductsByCategoryVariables>;
}
export const listProductsByCategoryRef: ListProductsByCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProductsByCategoryRef:
```typescript
const name = listProductsByCategoryRef.operationName;
console.log(name);
```

### Variables
The `ListProductsByCategory` query requires an argument of type `ListProductsByCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListProductsByCategoryVariables {
  category: string;
}
```
### Return Type
Recall that executing the `ListProductsByCategory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProductsByCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListProductsByCategoryData {
  products: ({
    id: UUIDString;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  } & Product_Key)[];
}
```
### Using `ListProductsByCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProductsByCategory, ListProductsByCategoryVariables } from '@dataconnect/generated';

// The `ListProductsByCategory` query requires an argument of type `ListProductsByCategoryVariables`:
const listProductsByCategoryVars: ListProductsByCategoryVariables = {
  category: ..., 
};

// Call the `listProductsByCategory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProductsByCategory(listProductsByCategoryVars);
// Variables can be defined inline as well.
const { data } = await listProductsByCategory({ category: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProductsByCategory(dataConnect, listProductsByCategoryVars);

console.log(data.products);

// Or, you can use the `Promise` API.
listProductsByCategory(listProductsByCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `ListProductsByCategory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProductsByCategoryRef, ListProductsByCategoryVariables } from '@dataconnect/generated';

// The `ListProductsByCategory` query requires an argument of type `ListProductsByCategoryVariables`:
const listProductsByCategoryVars: ListProductsByCategoryVariables = {
  category: ..., 
};

// Call the `listProductsByCategoryRef()` function to get a reference to the query.
const ref = listProductsByCategoryRef(listProductsByCategoryVars);
// Variables can be defined inline as well.
const ref = listProductsByCategoryRef({ category: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProductsByCategoryRef(dataConnect, listProductsByCategoryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetUserReviews
You can execute the `GetUserReviews` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserReviews(vars: GetUserReviewsVariables): QueryPromise<GetUserReviewsData, GetUserReviewsVariables>;

interface GetUserReviewsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserReviewsVariables): QueryRef<GetUserReviewsData, GetUserReviewsVariables>;
}
export const getUserReviewsRef: GetUserReviewsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserReviews(dc: DataConnect, vars: GetUserReviewsVariables): QueryPromise<GetUserReviewsData, GetUserReviewsVariables>;

interface GetUserReviewsRef {
  ...
  (dc: DataConnect, vars: GetUserReviewsVariables): QueryRef<GetUserReviewsData, GetUserReviewsVariables>;
}
export const getUserReviewsRef: GetUserReviewsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserReviewsRef:
```typescript
const name = getUserReviewsRef.operationName;
console.log(name);
```

### Variables
The `GetUserReviews` query requires an argument of type `GetUserReviewsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserReviewsVariables {
  customerId: UUIDString;
}
```
### Return Type
Recall that executing the `GetUserReviews` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserReviewsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserReviewsData {
  reviews: ({
    id: UUIDString;
    productId?: UUIDString | null;
    rating: number;
    reviewText: string;
    createdAt: TimestampString;
  } & Review_Key)[];
}
```
### Using `GetUserReviews`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserReviews, GetUserReviewsVariables } from '@dataconnect/generated';

// The `GetUserReviews` query requires an argument of type `GetUserReviewsVariables`:
const getUserReviewsVars: GetUserReviewsVariables = {
  customerId: ..., 
};

// Call the `getUserReviews()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserReviews(getUserReviewsVars);
// Variables can be defined inline as well.
const { data } = await getUserReviews({ customerId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserReviews(dataConnect, getUserReviewsVars);

console.log(data.reviews);

// Or, you can use the `Promise` API.
getUserReviews(getUserReviewsVars).then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

### Using `GetUserReviews`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserReviewsRef, GetUserReviewsVariables } from '@dataconnect/generated';

// The `GetUserReviews` query requires an argument of type `GetUserReviewsVariables`:
const getUserReviewsVars: GetUserReviewsVariables = {
  customerId: ..., 
};

// Call the `getUserReviewsRef()` function to get a reference to the query.
const ref = getUserReviewsRef(getUserReviewsVars);
// Variables can be defined inline as well.
const ref = getUserReviewsRef({ customerId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserReviewsRef(dataConnect, getUserReviewsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.reviews);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddNewReview
You can execute the `AddNewReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addNewReview(vars: AddNewReviewVariables): MutationPromise<AddNewReviewData, AddNewReviewVariables>;

interface AddNewReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddNewReviewVariables): MutationRef<AddNewReviewData, AddNewReviewVariables>;
}
export const addNewReviewRef: AddNewReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addNewReview(dc: DataConnect, vars: AddNewReviewVariables): MutationPromise<AddNewReviewData, AddNewReviewVariables>;

interface AddNewReviewRef {
  ...
  (dc: DataConnect, vars: AddNewReviewVariables): MutationRef<AddNewReviewData, AddNewReviewVariables>;
}
export const addNewReviewRef: AddNewReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addNewReviewRef:
```typescript
const name = addNewReviewRef.operationName;
console.log(name);
```

### Variables
The `AddNewReview` mutation requires an argument of type `AddNewReviewVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddNewReviewVariables {
  customerId: UUIDString;
  producerId: UUIDString;
  productId: UUIDString;
  rating: number;
  reviewText: string;
}
```
### Return Type
Recall that executing the `AddNewReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddNewReviewData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddNewReviewData {
  review_insert: Review_Key;
}
```
### Using `AddNewReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addNewReview, AddNewReviewVariables } from '@dataconnect/generated';

// The `AddNewReview` mutation requires an argument of type `AddNewReviewVariables`:
const addNewReviewVars: AddNewReviewVariables = {
  customerId: ..., 
  producerId: ..., 
  productId: ..., 
  rating: ..., 
  reviewText: ..., 
};

// Call the `addNewReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addNewReview(addNewReviewVars);
// Variables can be defined inline as well.
const { data } = await addNewReview({ customerId: ..., producerId: ..., productId: ..., rating: ..., reviewText: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addNewReview(dataConnect, addNewReviewVars);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
addNewReview(addNewReviewVars).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

### Using `AddNewReview`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addNewReviewRef, AddNewReviewVariables } from '@dataconnect/generated';

// The `AddNewReview` mutation requires an argument of type `AddNewReviewVariables`:
const addNewReviewVars: AddNewReviewVariables = {
  customerId: ..., 
  producerId: ..., 
  productId: ..., 
  rating: ..., 
  reviewText: ..., 
};

// Call the `addNewReviewRef()` function to get a reference to the mutation.
const ref = addNewReviewRef(addNewReviewVars);
// Variables can be defined inline as well.
const ref = addNewReviewRef({ customerId: ..., producerId: ..., productId: ..., rating: ..., reviewText: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addNewReviewRef(dataConnect, addNewReviewVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

## UpdateStockQuantity
You can execute the `UpdateStockQuantity` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateStockQuantity(vars: UpdateStockQuantityVariables): MutationPromise<UpdateStockQuantityData, UpdateStockQuantityVariables>;

interface UpdateStockQuantityRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateStockQuantityVariables): MutationRef<UpdateStockQuantityData, UpdateStockQuantityVariables>;
}
export const updateStockQuantityRef: UpdateStockQuantityRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateStockQuantity(dc: DataConnect, vars: UpdateStockQuantityVariables): MutationPromise<UpdateStockQuantityData, UpdateStockQuantityVariables>;

interface UpdateStockQuantityRef {
  ...
  (dc: DataConnect, vars: UpdateStockQuantityVariables): MutationRef<UpdateStockQuantityData, UpdateStockQuantityVariables>;
}
export const updateStockQuantityRef: UpdateStockQuantityRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateStockQuantityRef:
```typescript
const name = updateStockQuantityRef.operationName;
console.log(name);
```

### Variables
The `UpdateStockQuantity` mutation requires an argument of type `UpdateStockQuantityVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateStockQuantityVariables {
  id: UUIDString;
  stockQuantity: number;
}
```
### Return Type
Recall that executing the `UpdateStockQuantity` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateStockQuantityData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateStockQuantityData {
  product_update?: Product_Key | null;
}
```
### Using `UpdateStockQuantity`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateStockQuantity, UpdateStockQuantityVariables } from '@dataconnect/generated';

// The `UpdateStockQuantity` mutation requires an argument of type `UpdateStockQuantityVariables`:
const updateStockQuantityVars: UpdateStockQuantityVariables = {
  id: ..., 
  stockQuantity: ..., 
};

// Call the `updateStockQuantity()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateStockQuantity(updateStockQuantityVars);
// Variables can be defined inline as well.
const { data } = await updateStockQuantity({ id: ..., stockQuantity: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateStockQuantity(dataConnect, updateStockQuantityVars);

console.log(data.product_update);

// Or, you can use the `Promise` API.
updateStockQuantity(updateStockQuantityVars).then((response) => {
  const data = response.data;
  console.log(data.product_update);
});
```

### Using `UpdateStockQuantity`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateStockQuantityRef, UpdateStockQuantityVariables } from '@dataconnect/generated';

// The `UpdateStockQuantity` mutation requires an argument of type `UpdateStockQuantityVariables`:
const updateStockQuantityVars: UpdateStockQuantityVariables = {
  id: ..., 
  stockQuantity: ..., 
};

// Call the `updateStockQuantityRef()` function to get a reference to the mutation.
const ref = updateStockQuantityRef(updateStockQuantityVars);
// Variables can be defined inline as well.
const ref = updateStockQuantityRef({ id: ..., stockQuantity: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateStockQuantityRef(dataConnect, updateStockQuantityVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_update);
});
```

