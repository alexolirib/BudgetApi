var budgetController = (()=> {
    class element{
        constructor(node,id){
            this.id = id;
            this.type = node.type;
            this.description = node.description;
            this.value = parseFloat(node.value);
        }
    }
    //ES5
    // var element = function(node, id){
    //     this.id = id;
    //     this.type = node.type;
    //     this.description = node.description;
    //     this.value = node.value;
    // }

    class valuesCurrent{
        constructor(){
            this.inc = data.valueData["inc"];
            this.exp = data.valueData["exp"];
            this.amount = data.valueData["amount"];
    
        }
    }
    // var valuesCurrent = function(){
    //     this.inc = data.valueData["inc"];
    //     this.exp = data.valueData["exp"];
    //     this.amount = parseFloat(data.valueData["inc"]) - parseFloat(data.valueData["exp"]);
    // }

    var data={
        allData:{
            inc : [],
            exp : []
        },
        valueData:{
            inc : 0,
            exp : 0,
            amount: 0
        }
    }

    let upDateValues = ()=>{
        //console.log(data.allData["inc"].val);
        let positive = 0, negative = 0, amount = 0;
        for(let inc of data.allData["inc"]){
            positive += inc.value;
        }
        for(let exp of data.allData["exp"]){
            negative += exp.value;
        }
        amount = positive - negative;

        
        data.valueData["inc"] = positive;
        data.valueData["exp"] = negative;
        data.valueData["amount"] = amount;
    }

    return{
        getDetails: (node)=>{
            let newElement, id;
            let positionArray = data.allData[node.type].length;
            if(positionArray >0){
                id = data.allData[node.type][data.allData[node.type].length - 1].id + 1;
            } else{
                id = 0;
            }

            //aqui é feito a instanciação do novo objeto
            newElement = new element(node,id);            

            //add na lista
            data.allData[newElement.type].push(newElement);

            upDateValues();

            return newElement;
            
        },

        getValues: ()=>{
            var values = new valuesCurrent();
            return values;
        },

        removeData: item =>{
            let index = 0;
            for(let listData of data.allData[item.type]){
                if(listData.id === item.id){
                    data.allData[item.type].splice(index,1);
                }
                
                index++;
            }
            upDateValues();
        }
        
    }

})();

var UIController = (()=> {

    var codHtml = {
        codType: '.add__type',
        codDescription: '.add__description',
        codValue: '.add__value',
        codBtn: '.add__btn',
        incomeDad: '.income__list',
        ExpensesDad: '.expenses__list',
        fieldInc: '#IncomeId',
        fieldExp: '#ExpensesId',
        fieldAmount: '.budget__value'
    }

    var internalBlock ={
     inc : (node)=>{
        var block = `<div class="item clearfix" id="inc${node.id}">
        <div class="item__description">${node.description}</div>
        <div class="right clearfix">
        <div class="item__value">${node.value}</div>
        <div class="item__delete">
        <button class="item__delete--btn" id="btninc${node.id}"><i class="ion-ios-close-outline"></i></button>
        </div>
        <div>
        </div>`
        return block;
    },

     exp : (node)=>{
        var block = `<div class="item clearfix" id="exp${node.id}">
        <div class="item__description">${node.description}</div>
        <div class="item__percentage">21%</div>
        <div class="right clearfix">
        <div class="item__value">${node.value}</div>
        <div class="item__delete">
        <button class="item__delete--btn"  id="btnexp${node.id}"><i class="ion-ios-close-outline"></i></button>
        </div>
        <div>
        </div>`
        return block;
    }
}


    return{
        details: ()=>{
            return{
                // type : document.querySelector(codHtml.codType).value,
                // description: document.querySelector(codHtml.codDescription).value,
                // value: document.querySelector(codHtml.codValue).value
                type: $(codHtml.codType).val(),
                description: $(codHtml.codDescription).val(),
                value: $(codHtml.codValue).val()
            }
        },
        htmlCod: ()=>{
            return codHtml;
        },
        
        renderScreen: (item)=>{
            let blockChild = internalBlock[item.type](item);
            //console.log(item.type);
            //let actionBtn, blockDad;
            let actionBtn
           
            if(item.type === "inc"){
                // blockDad = document.querySelector(codHtml.incomeDad);
                // blockDad.insertAdjacentHTML('afterbegin' ,blockChild);

                $(codHtml.incomeDad).append(blockChild);
                
            } else{
                if(item.type === "exp"){
                    // blockDad = document.querySelector(codHtml.ExpensesDad);
                    // blockDad.insertAdjacentHTML('afterbegin' , blockChild);
                    
                    $(codHtml.ExpensesDad).append(blockChild);
                }
            }
            
            actionBtn = $(`#btn${item.type}${item.id}`);
            blockChild = $(`#${item.type}${item.id}`);           
            
            
            //actionBtn.addEventListener("click", ()=> controller.removeBlock(blockDad,blockChild,item));
            actionBtn.click(()=> controller.removeBlock(blockChild,item));
        },
        upDateValues: (values)=>{
            document.querySelector(codHtml.fieldInc).textContent = values.inc;
            document.querySelector(codHtml.fieldExp).textContent = values.exp;
            document.querySelector(codHtml.fieldAmount).textContent = values.amount;
        },
        clearField: ()=>{
            document.querySelector(codHtml.codDescription).value = "";
            document.querySelector(codHtml.codValue).value = "";
            document.querySelector(codHtml.codDescription).focus();
        },
        removeElement: (blockChild)=>{  
            $(blockChild).remove();
        }
    }

})();

var controller = ((budget, UI) => {

    let SaveAccount = ()=>{
        let item = UI.details();
        if(item.value > 0 && item.description.trim()!=="" && !isNaN(item.value)){
           newItem = budget.getDetails(item);
        
        //console.log(newItem);
            UI.renderScreen(newItem);
            let _values = budget.getValues();
            UI.upDateValues(_values)
            UI.clearField();
        }
    }

    var setupEvents = ()=>{  

        let codHtml = UI.htmlCod();
    
        //document.querySelector(codHtml.codBtn).addEventListener("click", SaveAccount);

        $(codHtml.codBtn).click(SaveAccount);
    
        // document.querySelector(codHtml.codValue).addEventListener("keypress", (event) =>{
        //     if(event.keyCode === 13 || event.which === 13){
        //         SaveAccount();
        //     }
        // })

        $(codHtml.codValue).keypress((event)=>{
            if(event.keyCode === 13 || event.which === 13){
                SaveAccount();
            }
        })
    }

    return{
        init: ()=>{
            console.log("Start Application")
            setupEvents();
        },
        removeBlock: (blockChild,item) =>{
            UI.removeElement(blockChild);
            //console.log(item);
            budget.removeData(item);
            let _values = budget.getValues();
            UI.upDateValues(_values)
        }
    }

})(budgetController, UIController);

controller.init();

/*
let test = new Map();
test.set(1,"Olá");
test.set(2,"Tarde");
test.set(3,"Boa");
test.set(true, "Parabens");
test.set(false, "Que Burro da zero para ele");

console.log(test.get(2));
console.log(test);

for(let [key, description] of test.entries()){
    console.log(key +" com " + description);
}
if(test.has(1)){
    console.log(true);
}

test.delete(2);
*/