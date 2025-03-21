import React,{ useState } from 'react'
import "./App7.css"


export default function App7() {
    const [products, setProducts] = useState([]); //creating of variables. this is for capturing values
    const [product, setProduct] = useState([]);// this is used to display values
    const handleSumbit = () => { //when submit button is clicked we call this function
        setProducts([...products, product])
    };
  return (
    <div className="App-Row">
        <div>
            <h1>Billing Form</h1>
            <input type="text" placeholder="Enter Product Name" onChange={(e) => setProduct({...product, name:e.target.value}) }></input><br/><br/>
            <input type="number" placeholder="Enter Price" onChange={(e) => setProduct({...product, Price:e.target.value}) }></input><br/><br/>
            <input type="number" placeholder="Enter Quantity" onChange={(e) => setProduct({...product, Quantity:e.target.value}) }></input><br/><br/>
            <p style={{textAlign : "center"}}>
                <button onClick={handleSumbit}>Submit</button>
            </p>
        </div>
        <div>
            <h4>Items</h4>
            <table border="1">
                {products && 
                products.map((value, index) => (
                    <tr>
                        <td>{value.name}</td>
                        <td>{value.Price}</td>
                        <td>{value.Quantity}</td>
                        <td>{value.Price*value.Quantity}</td>
                    </tr>
                ))}
            </table>
        </div>
    </div>
  );
}
