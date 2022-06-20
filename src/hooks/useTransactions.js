import { useSelector } from "react-redux";
import { incomeCategories, expenseCategories } from "../constants/categories";

//total, chartData
//chart data - 1: colors 2: amounts 3: labels

const useTransactions = (title) => {
    const {transactions: transactionsState} = useSelector(state => state);
    const {transactions} = transactionsState;
    const choseColors = title === "Income" ? incomeCategories : expenseCategories

    const selectedTransactions = transactions.filter(tr => tr.type === title);
    let total;
    total = selectedTransactions.reduce((total, transaction) => {return total += transaction.amount}, 0);

    const categories = [];
    selectedTransactions.forEach(tr => {
        const foundedCategoryIndex = categories.findIndex(c => tr.category === c.type);

        if(foundedCategoryIndex !== -1){
            categories[foundedCategoryIndex].amount += tr.amount; 
        }else {
            const categoryColor = choseColors.find(c => c.type === tr.category).color;
            categories.push({type: tr.category, color: categoryColor, amount: tr.amount });
        }
    });


    const data = {
        datasets: [{
            data: categories.map(c => {return c.amount }),
            backgroundColor: categories.map(c => c.color)
        }],
        labels: categories.map(c => c.type)
    }

    return {total, data}
}

export default useTransactions;