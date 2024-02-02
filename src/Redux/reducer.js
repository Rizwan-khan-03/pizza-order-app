import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "../service/services";

const initialState = {
    status: 'idle',
    user: {}
}
const slice = createSlice({
    name: 'testSlice',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload
        },
        extraReducer: (builder) => {
            builder
                .addCase(loginUserThunk.pending, (state) => {
                    state.status = "loading";
                })
                .addCase(loginUserThunk.fulfilled, (state, action) => {
                    console.log('action', action);
                    state.status = "idle";
                    state.user = action?.payload?.data.payload;
                })
                .addCase(loginUserThunk.rejected, (state) => {
                    state.status = "failed";
                })
        }
    }
});
export const { loginUser } = slice.actions
export default slice.reducer;