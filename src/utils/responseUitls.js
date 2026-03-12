export const toSafeList= (payload)=>
    Array.isArry(payload?.list)? payload.list:[];// 빈배열보장 -> .map()함수사용할 때 터지지 않게
//숫자가 와야할 부분에 다른 타입이 올 때 타입강제 혹은 0으로 기강잡기
export const toSafeTotalCount = (payload)=> Number(payload?.totalCount??0);
//페이지네이션 다음 페이지의 존재를 확인 undefined말고 확실한 null
export const toSafeNextCursor = (payload)=>payload?.nextCursor?? null;