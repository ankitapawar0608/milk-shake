import "./App.css";

import MilkShake from "./MilkShake";

function App() {
    return (
        <>
        <h1 className="heading">MilkShakes 🥤 </h1>
          <MilkShake title = "Oreo Milkshake" description="This Oreo milkshake is easy to make, super kid-friendly, and delicious - a favorite on a hot day! " imgUrl="https://images.pexels.com/photos/12365249/pexels-photo-12365249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
          <MilkShake title = "Mango Milkshake" description="Mango Milkshake is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar." imgUrl="https://images.pexels.com/photos/6493405/pexels-photo-6493405.jpeg?auto=compress&cs=tinysrgb&w=600"/> 
          <MilkShake title = "Strawberry Milkshake" description ="Strawberry milkshake is a delicious drink made with strawberries, milk, ice cream and flavoring ingredients like vanilla extract or strawberry syrup. " imgUrl="https://images.pexels.com/photos/10066812/pexels-photo-10066812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
          <MilkShake title = "BlackCurrent Milkshake" description="Refreshing and creamy black currant milkshake which is super yummy and a perfect drink for this summer." imgUrl="https://images.pexels.com/photos/7463309/pexels-photo-7463309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
        </>
        
    )
}

export default App;