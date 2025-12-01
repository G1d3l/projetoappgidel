import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'projetoappgidel',
  location: 'us-east4'
};

export const addNewReviewRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewReview', inputVars);
}
addNewReviewRef.operationName = 'AddNewReview';

export function addNewReview(dcOrVars, vars) {
  return executeMutation(addNewReviewRef(dcOrVars, vars));
}

export const listProductsByCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProductsByCategory', inputVars);
}
listProductsByCategoryRef.operationName = 'ListProductsByCategory';

export function listProductsByCategory(dcOrVars, vars) {
  return executeQuery(listProductsByCategoryRef(dcOrVars, vars));
}

export const updateStockQuantityRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateStockQuantity', inputVars);
}
updateStockQuantityRef.operationName = 'UpdateStockQuantity';

export function updateStockQuantity(dcOrVars, vars) {
  return executeMutation(updateStockQuantityRef(dcOrVars, vars));
}

export const getUserReviewsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserReviews', inputVars);
}
getUserReviewsRef.operationName = 'GetUserReviews';

export function getUserReviews(dcOrVars, vars) {
  return executeQuery(getUserReviewsRef(dcOrVars, vars));
}

