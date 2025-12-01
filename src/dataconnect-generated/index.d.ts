import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddNewReviewData {
  review_insert: Review_Key;
}

export interface AddNewReviewVariables {
  customerId: UUIDString;
  producerId: UUIDString;
  productId: UUIDString;
  rating: number;
  reviewText: string;
}

export interface GetUserReviewsData {
  reviews: ({
    id: UUIDString;
    productId?: UUIDString | null;
    rating: number;
    reviewText: string;
    createdAt: TimestampString;
  } & Review_Key)[];
}

export interface GetUserReviewsVariables {
  customerId: UUIDString;
}

export interface ListProductsByCategoryData {
  products: ({
    id: UUIDString;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  } & Product_Key)[];
}

export interface ListProductsByCategoryVariables {
  category: string;
}

export interface OrderItem_Key {
  id: UUIDString;
  __typename?: 'OrderItem_Key';
}

export interface Order_Key {
  id: UUIDString;
  __typename?: 'Order_Key';
}

export interface Product_Key {
  id: UUIDString;
  __typename?: 'Product_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface UpdateStockQuantityData {
  product_update?: Product_Key | null;
}

export interface UpdateStockQuantityVariables {
  id: UUIDString;
  stockQuantity: number;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface AddNewReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddNewReviewVariables): MutationRef<AddNewReviewData, AddNewReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddNewReviewVariables): MutationRef<AddNewReviewData, AddNewReviewVariables>;
  operationName: string;
}
export const addNewReviewRef: AddNewReviewRef;

export function addNewReview(vars: AddNewReviewVariables): MutationPromise<AddNewReviewData, AddNewReviewVariables>;
export function addNewReview(dc: DataConnect, vars: AddNewReviewVariables): MutationPromise<AddNewReviewData, AddNewReviewVariables>;

interface ListProductsByCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListProductsByCategoryVariables): QueryRef<ListProductsByCategoryData, ListProductsByCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListProductsByCategoryVariables): QueryRef<ListProductsByCategoryData, ListProductsByCategoryVariables>;
  operationName: string;
}
export const listProductsByCategoryRef: ListProductsByCategoryRef;

export function listProductsByCategory(vars: ListProductsByCategoryVariables): QueryPromise<ListProductsByCategoryData, ListProductsByCategoryVariables>;
export function listProductsByCategory(dc: DataConnect, vars: ListProductsByCategoryVariables): QueryPromise<ListProductsByCategoryData, ListProductsByCategoryVariables>;

interface UpdateStockQuantityRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateStockQuantityVariables): MutationRef<UpdateStockQuantityData, UpdateStockQuantityVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateStockQuantityVariables): MutationRef<UpdateStockQuantityData, UpdateStockQuantityVariables>;
  operationName: string;
}
export const updateStockQuantityRef: UpdateStockQuantityRef;

export function updateStockQuantity(vars: UpdateStockQuantityVariables): MutationPromise<UpdateStockQuantityData, UpdateStockQuantityVariables>;
export function updateStockQuantity(dc: DataConnect, vars: UpdateStockQuantityVariables): MutationPromise<UpdateStockQuantityData, UpdateStockQuantityVariables>;

interface GetUserReviewsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserReviewsVariables): QueryRef<GetUserReviewsData, GetUserReviewsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserReviewsVariables): QueryRef<GetUserReviewsData, GetUserReviewsVariables>;
  operationName: string;
}
export const getUserReviewsRef: GetUserReviewsRef;

export function getUserReviews(vars: GetUserReviewsVariables): QueryPromise<GetUserReviewsData, GetUserReviewsVariables>;
export function getUserReviews(dc: DataConnect, vars: GetUserReviewsVariables): QueryPromise<GetUserReviewsData, GetUserReviewsVariables>;

