import { ApiRequestFlowPropsI } from "@/components/api-request-states/api-request-states.interface";
import {
  Box as ApiErrorState,
  Skeleton as TableSkeleton,
  Card as NoContentFound,
  Tab as IsFetching,
} from "@mui/material";

export const ApiRequestFlow = (props: ApiRequestFlowPropsI) => {
  const {
    showLoader = false,
    hasError = false,
    hasNoData = false,
    children = null,
    errorChildren = null,
    errorButtonVisibility = true,
    errorButtonClick,
    noDataChildren = null,
    hasNoDataImage = true,
    noDataMessage = "",
    hasErrorImage = true,
    errorMessage = "",
    errorHeight = "50vh",
    noDataHeight = errorHeight,
    isFormLoader = false,
    loadersLength = 4,
    isRefetching = false,
    skeletonComponent = (
      <TableSkeleton isFormLoader={isFormLoader} length={loadersLength} />
    ),
  } = props;

  if (showLoader) return <>{skeletonComponent}</>;

  if (hasError)
    return (
      <ApiErrorState
        buttonVisibility={errorButtonVisibility}
        buttonClick={errorButtonClick}
        message={errorMessage}
        imageVisibility={hasErrorImage}
        height={errorHeight}
        messageVisibility={!!errorMessage?.length}
      >
        {errorChildren}
      </ApiErrorState>
    );

  if (hasNoData)
    return (
      <NoContentFound
        message={noDataMessage}
        imageVisibility={hasNoDataImage}
        height={noDataHeight}
        messageVisibility={!!noDataMessage?.length}
      >
        {noDataChildren}
      </NoContentFound>
    );

  return (
    <Box sx={{ position: "relative" }}>
      {isRefetching && <IsFetching isFetching={isRefetching} />}
      {children}
    </Box>
  );
};

export default ApiRequestFlow;
