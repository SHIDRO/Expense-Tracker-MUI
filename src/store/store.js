import { createSlice, configureStore } from '@reduxjs/toolkit';

const transactions = createSlice({
    name: 'transactions',
    initialState: {transactions: []},
    reducers: {
        addTransaction(state, action){
            state.transactions.push(action.payload);
        },
        deleteTransaction(state, action){
            state.transactions = state.transactions.filter(tr => tr.id !== action.payload);
        }
    }
});

const store = configureStore({
    reducer: {transactions: transactions.reducer}
});

export const transactionsActions = transactions.actions;
export default store;