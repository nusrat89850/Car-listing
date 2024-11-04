const luxaryCar = document.getElementById("luxary-car");
const economyCar = document.getElementById("economy-car");
const exoticCar = document.getElementById("exotic-car");
const sportCar = document.getElementById("sport-car");
const suvCar = document.getElementById("SUVs");


function luxaryFunction(){
    
    document.getElementById("car-details").innerHTML = "";
    
    document.getElementById("car-details").innerHTML += `
      <div class="grid grid-cols-3 gap-5 mt-10" id="luxary-car">
            
                <div >
                    <img src="./images/luxary-car1.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Alfa Romeo Giulia Sprint</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">Avg. Price : $78.60 - $98.40</p>
                </div>
                <div >
                    <img src="./images/luxary-car2.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Audi A8 Long</p>
                    <p class="text-xl text-gray-800">Automatic * 6 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">Avg. Price : $678.60 - $698.40</p>
                </div>
                <div >
                    <img src="./images/luxary-car3.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Bentley Flying Spur</p>
                    <p class="text-xl text-gray-800">Automatic * 8 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">Avg. Price : $780.60 - $798.40</p>
                </div>
                <div >
                    <img src="./images/luxary4.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">INFINITY Q5 Sensory</p>
                    <p class="text-xl text-gray-800">Automatic * 6 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">Avg. Price : $781.60 - $798.40</p>
                </div>
                <div >
                    <img src="./images/luxary5.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Jaguar XF P250SE</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">Avg. Price : $578.60 - $598.40</p>
                </div>
                <div >
                    <img src="./images/luxary6.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Lexus LS 500 F-Sport</p>
                    <p class="text-xl text-gray-800">Automatic * 6 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">Avg. Price : $378.60 - $398.40</p>
                </div>
            </div>
    `
    ;
}

//View economy cars
function economyFunction(){
    document.getElementById("car-details").innerHTML = "";
    
    document.getElementById("car-details").innerHTML += `
      <div class="grid grid-cols-3 gap-5 mt-10" id="economy-car">
            
           <div >
                    <img src="./images/economy-car1.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">BMW 228 Gran Coupe</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">Avg. Price : $78.60 - $98.40</p>
                </div>
                <div >
                    <img src="./images/economy-car2.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Fiat 500</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">Avg. Price : $18.60 - $28.50</p>
                </div>
                <div >
                    <img src="./images/economy-car3.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Fiat 500X</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">Avg. Price : $23.60 - $31.40</p>
                </div>
                <div >
                    <img src="./images/economy-car4.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Honda Civic</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">Avg. Price : $25.00 - $29.00</p>
                </div>
                <div >
                    <img src="./images/economy-car5.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Mercedes-Benz C300</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">Avg. Price : $44.50 - $56.80</p>
                </div>
                <div >
                    <img src="./images/economy-car6.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Mercedes-Benz A220</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">Avg. Price : $35.00 - $45.00</p>
                </div>
            </div>
    `
    ;
}

//View exotic cars
function exoticFunction(){
    document.getElementById("car-details").innerHTML = "";
    
    document.getElementById("car-details").innerHTML += `
      <div class="grid grid-cols-3 gap-5 mt-10" id="economy-car">
            
        <div >
                    <img src="./images/exotic-car1.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">BMW 228 Gran Coupe</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$38.00 / per day</p>
                </div>
                <div >
                    <img src="./images/exotic-car2.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Fiat 500</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$19.00 / per day</p>
                </div>
                <div >
                    <img src="./images/exotic-car3.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Fiat 500X</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$35.00 / per day</p>
                </div>
                <div >
                    <img src="./images/exotic-car4.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Honda Civic</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$30.00 / per day</p>
                </div>
                <div >
                    <img src="./images/exotic-car5.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Mercedes-Benz C300</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$45.00 / per day</p>
                </div>
                <div >
                    <img src="./images/exotic-car6.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Mercedes-Benz A220</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$40.00 / per day</p>
                </div>
    `
    ;
}

////View sport cars
function sportFunction(){
    
    
    document.getElementById("car-details").innerHTML = "";
    
    document.getElementById("car-details").innerHTML += `
      <div class="grid grid-cols-3 gap-5 mt-10" id="economy-car">
            
        <div >
                    <img src="./images/sport-car1.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">BMW 228 Gran Coupe</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$38.00 / per day</p>
                </div>
                <div >
                    <img src="./images/sport-car2.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Fiat 500</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$19.00 / per day</p>
                </div>
                <div >
                    <img src="./images/sport-car3.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Fiat 500X</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$35.00 / per day</p>
                </div>
                <div >
                    <img src="./images/sport-car4.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Honda Civic</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$30.00 / per day</p>
                </div>
                <div >
                    <img src="./images/sport-car5.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Mercedes-Benz C300</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$45.00 / per day</p>
                </div>
                <div >
                    <img src="./images/sport-car6.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Mercedes-Benz A220</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$40.00 / per day</p>
                </div>
    `
    ;
}
////View sport cars
function suvFunction(){
    document.getElementById("car-details").innerHTML = "";
    
    document.getElementById("car-details").innerHTML += `
      <div class="grid grid-cols-3 gap-5 mt-10" id="economy-car">
            
        <div >
                    <img src="./images/suv1.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">BMW 228 Gran Coupe</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$38.00 / per day</p>
                </div>
                <div >
                    <img src="./images/suv2.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Fiat 500</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$19.00 / per day</p>
                </div>
                <div >
                    <img src="./images/suv3.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Fiat 500X</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$35.00 / per day</p>
                </div>
                <div >
                    <img src="./images/suv4.jpg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Honda Civic</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$30.00 / per day</p>
                </div>
                <div >
                    <img src="./images/suv5.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Mercedes-Benz C300</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$45.00 / per day</p>
                </div>
                <div >
                    <img src="./images/suv6.jpeg" class="rounded-xl">
                    <p class="text-2xl text-[#000000] font-semibold">Mercedes-Benz A220</p>
                    <p class="text-xl text-gray-800">Automatic * 4 Cylinder Turbo</p>
                    <p class="text-xl text-gray-800">$40.00 / per day</p>
                </div>
    `
    ;
}