import React, { useState , useEffect} from "react";

export default function Ewallet() {
    const [balanc, settBalance] = useState(() => {
        const savedBalance = localStorage.getItem("balanc");
        return savedBalance ? JSON.parse(savedBalance) : 0;
      });
    
      const [transiaction, setTransiaction] = useState(() => {
        const savedTransactions = localStorage.getItem("transiaction");
        return savedTransactions ? JSON.parse(savedTransactions) : [];
      });
    
      
      useEffect(() => {
        console.log('Saving balance and transactions to localStorage');
        localStorage.setItem("balanc", JSON.stringify(balanc));
        localStorage.setItem("transiaction", JSON.stringify(transiaction));
      }, [balanc, transiaction]);
    

  const withdrow=()=>{
  let amount =+ document.querySelector("input").value;
  let obj ={beforeBalance:balanc, type:"withdrow",amount:amount,afterBalance:balanc-amount}
  
    if(balanc>=amount){
        settBalance(balanc-amount)
        transiaction.push(obj)
    }else{
        alert("unsuffeicent fund ")
    }
  }
  
  const deposit=()=>{
    let amount =+ document.querySelector("input").value
    let obj ={beforeBalance:balanc, type:"deposit",amount:amount,afterBalance:balanc+amount}
    transiaction.push(obj)
    settBalance(balanc+amount)
  }
  return (
    <div className="">
      <h1>Amount is :{balanc}</h1>
      <input type="number" placeholder="Enter your Amount" />
      <button className="btn btn-danger" onClick={withdrow}>Withdrow</button>
      <button className="btn btn-success" onClick={deposit}>Deposit</button>
      <table className="table table-dark table-bordered">
        <thead>
            <tr>
                <th>-</th>
                <th>beforeBalance</th>
                <th>type</th>
                <th>amount</th>
                <th>afterBalance</th>
            </tr>
        </thead>
        <tbody>
            {
                transiaction.map((el,index)=>{
                    return(
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{el.beforeBalance}</td>
                        <td>{el.type}</td>
                        <td>{el.amount}</td>
                        <td>{el.afterBalance}</td></tr>
                        
                    )
                })
            }
        </tbody>
      </table>

    </div>
   
        
      );
}
