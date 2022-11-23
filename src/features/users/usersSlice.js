import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: '박뚜뚜' },
  { id: '1', name: '이후후' },
  { id: '2', name: '정예예' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
