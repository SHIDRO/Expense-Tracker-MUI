import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = {transactions: JSON.parse(localStorage.getItem('transactions')) || []}

const transactions = createSlice({
    name: 'transactions',
    initialState: initialState,
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