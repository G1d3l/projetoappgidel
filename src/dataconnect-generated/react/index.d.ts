import { AddNewReviewData, AddNewReviewVariables, ListProductsByCategoryData, ListProductsByCategoryVariables, UpdateStockQuantityData, UpdateStockQuantityVariables, GetUserReviewsData, GetUserReviewsVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAddNewReview(options?: useDataConnectMutationOptions<AddNewReviewData, FirebaseError, AddNewReviewVariables>): UseDataConnectMutationResult<AddNewReviewData, AddNewReviewVariables>;
export function useAddNewReview(dc: DataConnect, options?: useDataConnectMutationOptions<AddNewReviewData, FirebaseError, AddNewReviewVariables>): UseDataConnectMutationResult<AddNewReviewData, AddNewReviewVariables>;

export function useListProductsByCategory(vars: ListProductsByCategoryVariables, options?: useDataConnectQueryOptions<ListProductsByCategoryData>): UseDataConnectQueryResult<ListProductsByCategoryData, ListProductsByCategoryVariables>;
export function useListProductsByCategory(dc: DataConnect, vars: ListProductsByCategoryVariables, options?: useDataConnectQueryOptions<ListProductsByCategoryData>): UseDataConnectQueryResult<ListProductsByCategoryData, ListProductsByCategoryVariables>;

export function useUpdateStockQuantity(options?: useDataConnectMutationOptions<UpdateStockQuantityData, FirebaseError, UpdateStockQuantityVariables>): UseDataConnectMutationResult<UpdateStockQuantityData, UpdateStockQuantityVariables>;
export function useUpdateStockQuantity(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateStockQuantityData, FirebaseError, UpdateStockQuantityVariables>): UseDataConnectMutationResult<UpdateStockQuantityData, UpdateStockQuantityVariables>;

export function useGetUserReviews(vars: GetUserReviewsVariables, options?: useDataConnectQueryOptions<GetUserReviewsData>): UseDataConnectQueryResult<GetUserReviewsData, GetUserReviewsVariables>;
export function useGetUserReviews(dc: DataConnect, vars: GetUserReviewsVariables, options?: useDataConnectQueryOptions<GetUserReviewsData>): UseDataConnectQueryResult<GetUserReviewsData, GetUserReviewsVariables>;
