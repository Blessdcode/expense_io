export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }







// const initialState = {
//   transactions: localStorage.getItem('transactions') ? JSON.parse(localStorage.getItem('transactions')) : []
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'DELETE_TRANSACTION':
//       const updatedTransactions = state.transactions.filter(transaction => transaction.id !== action.payload);
//       saveTransactionsToLocalStorage(updatedTransactions);
//       return {
//         ...state,
//         transactions: updatedTransactions
//       };

//     case 'ADD_TRANSACTION':
//       const newTransactions = [action.payload, ...state.transactions];
//       saveTransactionsToLocalStorage(newTransactions);
//       return {
//         ...state,
//         transactions: newTransactions
//       };

//     default:
//       return state;
//   }
// };

// const saveTransactionsToLocalStorage = (transactions) => {
//   try {
//     const serializedTransactions = JSON.stringify(transactions);
//     localStorage.setItem('transactions', serializedTransactions);
//   } catch (error) {
//     console.error('Error saving transactions to local storage:', error);
//   }
// };

// export default reducer;
