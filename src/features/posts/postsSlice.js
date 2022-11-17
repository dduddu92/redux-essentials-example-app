import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: '첫번째 포스트입니다.', content: '안녕? 나는 수연' },
  { id: '2', title: '두번째 포스트입니다.', content: '이건 초기 값입니다.' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})

export default postsSlice.reducer
