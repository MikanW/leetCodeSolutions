int removeDuplicates(int* nums, int numsSize){
    int* ret = nums;
    int* loop = nums;
    int i;
    int retSize = 1;
    
    for( i=0; i<numsSize; i++) {
        if ( *loop > *ret ) {
            *(++ret) = *loop;
            ++retSize;
        }
        ++loop;
    }
    return retSize;
}