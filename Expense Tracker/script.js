const totalAmount = document.getElementById("total-amount")
const totalAmountButton = document.getElementById("total-amount-button")
const errorMessage = document.getElementById("budget-error")
const amount = document.getElementById("amount")
const balanceValue = document.getElementById("balance-amount")
const expenditureValue = document.getElementById("expenditure-value")
const checkAmountButton = document.getElementById("check-amount")
const userAmount = document.getElementById("user-amount")
const productTitle = document.getElementById("product-title")
const productTitleError = document.getElementById("product-title-error")
const list = document.getElementById("list")
const productCostError = document.getElementById("product-cost-error");
let tempAmount=0

// set Budget part
totalAmountButton.addEventListener("click",()=>{
     tempAmount = totalAmount.value;
    // for empty or negative value
    if(tempAmount ==="" || tempAmount<0){
        errorMessage.classList.remove("hide")
    }
    else{
        errorMessage.classList.add("hide")
        // set budget
        amount.textContent=tempAmount;
        // set balance
        balanceValue.innerHTML = tempAmount - expenditureValue.innerText;
        // clear Input box
        totalAmount.value=""
    }
}); 
//Function To Disable Edit and Delete Button
const disableButtons = (bool) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};

// FUNCTION TO modify list elements
    const modifyElement =(element,edit = false)=>{
        let parentDiv = element.parentElement;
        let currentBalance = balanceValue.innerText
        let currentExpenses = expenditureValue.innerText
        let parentAmount = parentDiv.querySelector(".amount").innerText;
         if (edit) {
    let parentText = parentDiv.querySelector(".product").innerText;
    productTitle.value = parentText;
    userAmount.value = parentAmount;
    disableButtons(true);
  }
  balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
  expenditureValue.innerText =
    parseInt(currentExpenses) - parseInt(parentAmount);
  parentDiv.remove();
    }
// function to create list
const listCreator = (expenseName, expenseValue)=>{
    let subListContent=document.createElement("div")
    subListContent.classList.add("sublist-content","flex-space");
    // list.appendChild(subListContent)
    subListContent.innerHTML = `<p class="product">${expenseName}</p> <p class="amount">${expenseValue}</p>`
    // edit button
    let editButton = document.createElement("button")
     editButton.classList.add("fa-solid", "fa-pen-to-square", "edit")
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editButton.style.fontSize="1.2em"
    editButton.addEventListener("click",()=>{
        modifyElement(editButton,true)
    });
    //delete button
    let deleteButton = document.createElement("button")
     deleteButton.classList.add("fa-solid", "fa-trash-can", "delete")
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.style.fontSize="1.2em"
    deleteButton.addEventListener("click",()=>{
        modifyElement(deleteButton)
    })
    subListContent.appendChild(editButton)
    subListContent.appendChild(deleteButton)
    document.getElementById("list").appendChild(subListContent)
   

}

checkAmountButton.addEventListener("click",()=>{
  // check empty
  if(!userAmount.value || !productTitle.value ){
    productTitleError.classList.remove("hide")
    return false;
  }
  // enable button
  disableButtons(false)
  // expenses 
  let expenditure = parseInt(userAmount.value)
  // total expenses 
  let sum = parseInt(expenditureValue.innerText) + expenditure;
  expenditureValue.innerText = sum
  // total balance (budget - totalexpenses)
  const totalBalance = tempAmount - sum;
  balanceValue.innerText = totalBalance;

  // create the list
   listCreator (productTitle.value,userAmount.value);
   productTitle.value=""
   userAmount.value=""
})

