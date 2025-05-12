/**
 * 페이징 처리 계산 후 출력 함수
 * @param {number} currentPageIndex 현재 페이지 번호
 * @param {number} postsPerPage 페이지 당 출력할 게시글 개수
 * @param {number} totalPosts 전체 게시글 개수
 * @returns {object} 페이징 정보를 담은 객체
 */
function total (currentPageIndex, postsPerPage, totalPosts) {

    let lastPageIndex, endPageIndex, startPageIndex, hasPrevPage, hasNextPage;

    lastPageIndex  = Math.ceil(totalPosts / postsPerPage);
    endPageIndex   = Math.ceil(currentPageIndex / 10) * 10;
    startPageIndex = endPageIndex - 9;
    hasPrevPage    = startPageIndex > 1;
    hasNextPage    = endPageIndex < lastPageIndex;

    // 끝 페이지 번호가 실제 마지막 페이지보다 클 수 있는 상황을 처리하기 위함
    if(lastPageIndex < endPageIndex) { endPageIndex = lastPageIndex;}

    let result = {
          currentPageIndex : currentPageIndex
        , postsPerPage     : postsPerPage
        , totalPosts       : totalPosts
        , lastPageIndex    : lastPageIndex
        , endPageIndex     : endPageIndex
        , startPageIndex   : startPageIndex
        , hasPrevPage      : hasPrevPage
        , hasNextPage      : hasNextPage
    }

    return result;
}

module.exports = {
    total
};